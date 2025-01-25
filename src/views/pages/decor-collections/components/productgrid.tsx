import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function Productgrid({ item, setOpened, opened, setPupitem }: any) {
  const [thickness, setThickness] = useState([])

  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://shopi.xcuts.co.uk/api/collections/thickness/records?filter=(decor_ref='${item?.id}')`,
      headers: {}
    }

    axios
      .request(config)
      .then(response => {
        console.log(setThickness(response.data?.items))
      })
      .catch(error => {
        console.log(error)
      })
  }, [setThickness])

  return (
    <div className='text-center flex items-center justify-center'>
      <div>
        <div className='relative'>
          <Image
            alt={item.product_name}
            src={`${process.env.NEXT_PUBLIC_API_SHOP_URL_images}/${item?.decor_poster[0]?.directus_files_id?.id}/${item?.decor_poster[0]?.directus_files_id?.filename_disk}`}
            width={448}
            height={300}
            className='md:w-[448px] md:h-[300px] object-cover'
            quality={100}
          />
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
          <div className='absolute z-10 py-5 pl-5 pr-[75px] before:border-solid before:border-t-[bg-transparent] before:border-r-transparent before:border-b-[#f82f45] before:border-l-[bg-transparent] before:border-t-0 before:border-r-[40px] before:border-b-[90px] before:border-l-0 before:absolute before:w-full before:h-full before:-top-2 before:md:top-0 before:left-0 before:-z-10 md:bottom-0 bottom-[-8px]'>
            <div className='flex justify-between'>
              <span className='font-medium text-xl text-white mr-4 capitalize'>{item?.brand_ref?.name}</span>
              <span className='font-medium text-xl text-white'>{item.product_code}</span>
            </div>
            <div className='text-lg text-white text-left truncate'>{item.product_name}</div>
          </div>
        </div>
        <div className='relative border border-[#cccccc] px-4 py-6'>
          <div className='bg-[#f4f4f4] border border-[#898989] px-[10px] py-2 flex w-max'>
            <div className='flex items-center gap-x-4'>
              {item?.grain_ref?.name}
              <span>
                <img src='../cross-icon.webp' alt='' />
              </span>
            </div>
          </div>
          <div className='mt-3 flex flex-col gap-y-1 mr-[70px]'>
            <div className='grid grid-cols-2 text-left'>
              <div className='text-sm text-black'>Size: </div>
              <div className='text-sm text-primary'>
                {item?.length} x {item?.width} mm
              </div>
            </div>
            <div className='grid grid-cols-2 text-left'>
              <div className='text-sm text-black'>Thickness: </div>
              <div className='text-sm text-primary'>
                {item?.thickness_ref?.map((thickness: any) => thickness.thickness)?.join(',')}{' '}
                {item?.thickness_ref?.length && 'mm'}
              </div>
            </div>
            <div className='grid grid-cols-2 text-left'>
              <div className='text-sm text-black'>Core: </div>
              <div className='text-sm text-primary'>{item?.core_ref?.name}</div>
            </div>
            <div className='grid grid-cols-2 text-left'>
              <div className='text-sm text-black'>Surface:</div>
              <div className='text-sm text-primary'>{item?.surface_ref?.name}</div>
            </div>
            <div className='grid grid-cols-2 text-left'>
              <div className='text-sm text-black'>Finish: </div>
              <div className='text-sm text-primary'>{item?.finish_ref?.name}</div>
            </div>
            <div className='grid grid-cols-2 text-left'>
              <div className='text-sm text-black'>Design:</div>
              <div className='text-sm text-primary'>{item?.design_ref?.name}</div>
            </div>
            <div className='grid grid-cols-2 text-left'>
              <div className='text-sm text-black'>Texture: </div>
              <div className='text-sm text-primary'>{item?.texture_ref?.name}</div>
            </div>
          </div>
          <div
            onClick={() => {
              setPupitem({
                item,
                thickness
              })
              setOpened(!opened)
            }}
            className='bg-black popup-modal -rotate-90 cursor-pointer inline-block text-white text-lg font-semibold px-10 py-5 absolute bottom-[76px] right-[-76px]'
          >
            More info - Buy
          </div>
        </div>
      </div>
    </div>
  )
}
