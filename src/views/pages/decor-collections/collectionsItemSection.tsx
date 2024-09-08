import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Pupapt from './pupupt'
import { Close } from '@icon-park/react'
import Table from './table'

export default function CollectionsItemSection({ Data, Brand }: any) {
  const [opened, setOpened] = useState(false)
  const [show, setShow] = useState(1)
  // console.log(Data)
  const router = useRouter()

  const [query, setQuery] = useState()

  useEffect(() => {
    setQuery(router.query)
  }, [router.query])
  function BrandItem() {
    return Brand.map((item: any, index: number) => {
      // console.log(item)
      return (
        <div className='col-span-1 flex flex-col'>
          <div className='flex sm:flex-row flex-col sm:items-end'>
            <div className='sm:w-[60%]'>
              <img src={`https://api.xcuts.co.uk${item.main_image}`} alt='' className='w-full' />
            </div>
            <div className='relative py-5 pl-5 pr-10 before:border-solid before:border-t-[bg-transparent] before:border-r-[#fff] before:border-b-[#f82f45] before:border-l-[bg-transparent] before:border-t-0 sm:before:border-r-[40px] before:border-b-[72px] before:border-l-0 before:absolute before:w-full before:h-full before:-top-2 before:md:top-0 before:left-0 before:-z-10 sm:w-[40%] lg:bottom-10 bottom-0'>
              <h5 className='lg:text-xl text-base pr-8 font-semibold text-white whitespace-nowrap'>{item.name}</h5>
            </div>
          </div>
          <div className='xl:ml-16 lg:ml-12 ml:ml-8 ml-0 relative lg:-mt-10 h-full'>
            <div className='bg-white p-7 shadow-[0_10px_30px_0px_rgba(0,0,0,0.15)] h-full flex flex-col'>
              <p className='text-base text-[#5f5f5f] leading-7 mb-10'>{item.short_des}</p>
              <div className='flex sm:flex-row flex-col gap-y-4 sm:gap-y-0 sm:gap-x-4 mt-auto'>
                <Link
                  href={'/all-decors/' + item.slug}
                  className='text-base font-semibold text-black border border-primary lg:py-4 lg:px-6 md:py-4 md:px-3 py-4 px-6 block text-center hover:bg-primary hover:text-white transition-all'
                >
                  View More
                </Link>
                <Link
                  href={'/all-decors?Brand=' + item.slug}
                  className='text-base font-semibold text-black border border-black lg:py-4 lg:px-6 md:py-4 md:px-3 py-4 px-6 block text-center bg-black hover:text-black text-white hover:bg-white transition-all'
                >
                  Order Sample
                </Link>
              </div>
            </div>
          </div>
        </div>
      )
    })
  }
  function ProductItem() {
    // console.log(Brand)
    return Data.map((item: any, index: number) => {
      // console.log(item)
      return (
        <div className='text-center flex items-center justify-center' key={index}>
          <div>
            <div className='relative'>
              <a data-fancybox='gallery-f206' href='assets/images/img-01.webp'>
                <img src={`../imagestt/img-01.webp`} />
              </a>
              <div className='absolute hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <img src='assets/images/grid-icon-hover.webp' />
              </div>
              <div style={{ display: 'none' }}>
                <a data-fancybox='gallery-f206' href={'/all-decors/' + item.Brand}>
                  <img src='assets/images/img-02.webp' />
                </a>
                <a data-fancybox='gallery-f206' href={'/all-decors/' + item.Brand}>
                  <img src='assets/images/img-03.webp' />
                </a>
                <a data-fancybox='gallery-f206' href={'/all-decors/' + item.Brand}>
                  <img src='assets/images/img-04.webp' />
                </a>
              </div>
              <div className='absolute z-10 py-5 pl-5 pr-[75px] before:border-solid before:border-t-[bg-transparent] before:border-r-transparent before:border-b-[#f82f45] before:border-l-[bg-transparent] before:border-t-0 sm:before:border-r-[40px] before:border-b-[90px] before:border-l-0 before:absolute before:w-full before:h-full before:-top-2 before:md:top-0 before:left-0 before:-z-10 sm:w-[40%] lg:bottom-0 bottom-0'>
                <div className='flex justify-between'>
                  <span className='font-medium text-2xl text-white'>{item.Brand}</span>
                  <span className='font-medium text-2xl text-white'>F206-PM</span>
                </div>
                <div className='text-lg text-white text-left'>Black Pietra Grigia</div>
              </div>
            </div>
            <div className='relative border border-[#cccccc] px-7 py-6'>
              <div className='bg-[#f4f4f4] border border-[#898989] px-[10px] py-2 inline-block flex w-max'>
                <div className='flex items-center gap-x-4'>
                  Length oriented grain{' '}
                  <span>
                    <img src='../cross-icon.webp' alt='' />
                  </span>
                </div>
              </div>
              <div className='mt-3'>
                <div className='grid grid-cols-2 text-left'>
                  <div className='text-lg text-black'>Size: </div>
                  <div className='text-lg text-primary'>2800 x 2070 mm</div>
                </div>
                <div className='grid grid-cols-2 text-left'>
                  <div className='text-lg text-black'>Thickness: </div>
                  <div className='text-lg text-primary'>19, 38 mm</div>
                </div>
                <div className='grid grid-cols-2 text-left'>
                  <div className='text-lg text-black'>Core: </div>
                  <div className='text-lg text-primary'>MDF</div>
                </div>
                <div className='grid grid-cols-2 text-left'>
                  <div className='text-lg text-black'>Surface:</div>
                  <div className='text-lg text-primary'>Lacquered Melamine</div>
                </div>
                <div className='grid grid-cols-2 text-left'>
                  <div className='text-lg text-black'>Finish: </div>
                  <div className='text-lg text-primary'>Supermatt</div>
                </div>
                <div className='grid grid-cols-2 text-left'>
                  <div className='text-lg text-black'>Design:</div>
                  <div className='text-lg text-primary'>Pattern</div>
                </div>
                <div className='grid grid-cols-2 text-left'>
                  <div className='text-lg text-black'>Texture: </div>
                  <div className='text-lg text-primary'>Plain</div>
                </div>
              </div>
              <div
                onClick={() => setOpened(!opened)}
                className='bg-black popup-modal -rotate-90 cursor-pointer inline-block text-white text-lg font-semibold px-10 py-5 absolute bottom-[76px] right-[-76px]'
              >
                More info - Buy
              </div>
            </div>
          </div>
        </div>
      )
    })
  }

  if (query && Object.values(query).every(x => x === '')) {
    return (
      <div className='grid md:grid-cols-2 gap-x-10 gap-y-10 pb-20'>
        <BrandItem />
      </div>
    )
  }
  return (
    <div>
      <div className='flex md:justify-end flex-col w-40 text-center ml-auto md:ml-auto md:mr-0 mr-auto'>
        <p className='mb-3'>Display options</p>
        <div className='flex justify-center'>
          {/*Tabs navigation*/}
          <ul
            className='mb-5 flex gap-3 list-none flex-row flex-wrap border-b-0 pl-0'
            role='tablist'
            data-te-nav-ref=''
          >
            <li role='presentation' onClick={() => setShow(1)}>
              <div className='cursor-pointer'>
                <div className='flex space-y-[3px] flex-col'>
                  <span className='w-[39px] h-[7px] bg-primary rounded-full block' />
                  <span className='w-[39px] h-[7px] bg-primary rounded-full block' />
                  <span className='w-[39px] h-[7px] bg-primary rounded-full block' />
                  <span className='w-[39px] h-[7px] bg-[#afafaf] rounded-full block' />
                </div>
              </div>
            </li>
            <li role='presentation' onClick={() => setShow(2)}>
              <div className='cursor-pointer'>
                <div className='grid grid-cols-2 gap-1'>
                  <span className='w-[16px] h-[16px] bg-primary rounded-sm block' />
                  <span className='w-[16px] h-[16px] bg-primary rounded-sm block' />
                  <span className='w-[16px] h-[16px] bg-primary rounded-sm block' />
                  <span className='w-[16px] h-[16px] bg-[#afafaf] rounded-sm block' />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {show == 1 ? (
        <Table data={Data} />
      ) : (
        <div className='grid md:grid-cols-2 gap-x-10 gap-y-10 pb-20'>
          <ProductItem />
        </div>
      )}

      {opened && (
        <div className='w-6/12 z-50 min-h-[80vh] overflow-y-scroll p-5 rounded-md fixed bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <div className='relative'>
            <div
              className='bg-red-600 text-white p-3 top-0 right-0 w-10 h-10 cursor-pointer'
              onClick={() => setOpened(!opened)}
            >
              <Close />
            </div>
            <Pupapt />
          </div>
        </div>
      )}
    </div>
  )
}
