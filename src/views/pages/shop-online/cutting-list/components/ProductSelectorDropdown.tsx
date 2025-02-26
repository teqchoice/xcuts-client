import { components } from '@/core/api-shop/v1'
import { useCMSRequest } from '@/utils/CMSRequest'
import { useSHOPRequest } from '@/utils/SHOPRequest'
import React, { useState, useImperativeHandle, useRef, useEffect } from 'react'

interface ProductSelectorDropdownProps {
  children: React.ReactNode
  onSelect?: (value: components['schemas']['ItemsDecors']) => void
}

const ProductSelectorDropdown = (props: ProductSelectorDropdownProps) => {
  const { children, onSelect } = props

  const [isOpen, setIsOpen] = useState(false)

  const dropdownRef = useRef<HTMLDivElement>(null)

  const { data: brandsData } = useSHOPRequest().useQuery('get', '/items/categories', {
    params: {
      query: {
        fields: ['*.*.*'],
        [`filter[parent][related_categories_id][name][_eq]`]: 'brand'
      }
    }
  })

  const brands = brandsData?.data

  const [selectedBrand, setSelectedBrand] = useState<string | undefined | null>(undefined)

  const [selectedDecor, setSelectedDecor] = useState<components['schemas']['ItemsDecors']>()

  const { data: decorsData, isLoading: isLoadingDecors } = useSHOPRequest().useQuery(
    'get',
    '/items/decors',
    {
      params: {
        query: {
          fields: ['*.*.*'],
          [`filter[brand_ref][name][_eq]`]: selectedBrand?.toLowerCase(),
          limit: 500,
          sort: ['sort', '-date_updated', 'date_updated']
        }
      }
    },
    {
      enabled: !!selectedBrand
    }
  )

  const decors = decorsData?.data

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  useEffect(() => {
    if (brands) {
      setSelectedBrand(brands[0]?.name)
    }
  }, [brands])

  const handleClickInside = () => {
    setIsOpen(prev => !prev)
  }

  const handleSelectBrand = (brandName: string | null | undefined) => {
    setSelectedBrand(brandName)
  }

  const handleSelectDecor = (decor: components['schemas']['ItemsDecors']) => {
    setSelectedDecor(decor)

    if (onSelect) {
      onSelect({ product_name: `${decor.product_code} ${decor.product_name}`, ...decor })
    }

    setIsOpen(false)
  }

  return (
    <div ref={dropdownRef}>
      <div onClick={handleClickInside}>{children}</div>
      {isOpen && (
        <div className='absolute w-[865px] p-2 bg-white border border-[#d1d1d1] top-[37px] z-50'>
          <div className='w-full flex flex-col gap-y-5'>
            <div className='flex flex-wrap gap-2'>
              {brands?.map(brand => (
                <div
                  className={`px-[9.75px] py-2 border border-primary text-primary text-[14px] capitalize cursor-pointer ${
                    brand.name === selectedBrand ? 'bg-primary text-white' : ''
                  }`}
                  onClick={() => handleSelectBrand(brand.name)}
                >
                  {brand.name}
                </div>
              ))}
            </div>
            <div className='max-h-[150px] overflow-y-scroll'>
              {decors?.map(decor => (
                <div
                  className={`grid grid-cols-6 px-2 py-1.5 transition duration-200 hover:bg-[#FFFADB] cursor-pointer ${
                    selectedDecor?.product_code === decor.product_code ? 'bg-[#feeec5]' : ''
                  }`}
                  onClick={() => handleSelectDecor(decor)}
                >
                  <span className='col-span-1 text-[14px]'>{decor.product_code}</span>
                  <span className='col-span-3 text-[14px]'>{decor.product_name}</span>
                  <span className='col-span-1 text-[14px]'>
                    {(decor.core_ref as components['schemas']['ItemsCategories']).name}
                  </span>
                  <span className='col-span-1 text-[14px]'>More Info</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

ProductSelectorDropdown.displayName = 'ProductSelectorDropdown'

export default ProductSelectorDropdown
