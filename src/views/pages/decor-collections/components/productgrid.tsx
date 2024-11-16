import axios from 'axios'
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
          <a data-fancybox='gallery-f206' href='assets/images/img-01.webp'>
            <img
              alt=''
              src={`${process.env.NEXT_PUBLIC_SHOP_API_URL}/files/${item?.collectionName}/${item?.id}/${item?.decor[0]}`}
            />
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
          <div className='absolute z-10 py-5 pl-5 pr-[75px] before:border-solid before:border-t-[bg-transparent] before:border-r-transparent before:border-b-[#f82f45] before:border-l-[bg-transparent] before:border-t-0 sm:before:border-r-[40px] before:border-b-[90px] before:border-l-0 before:absolute before:w-full before:h-full before:-top-2 before:md:top-0 before:left-0 before:-z-10 lg:bottom-0 bottom-0'>
            <div className='flex justify-between'>
              <span className='font-medium text-2xl text-white mr-4'>{item?.expand?.brand_ref[0].name}</span>
              <span className='font-medium text-2xl text-white'>F206-PM</span>
            </div>
            <div className='text-lg text-white text-left'>Black Pietra Grigia</div>
          </div>
        </div>
        <div className='relative border border-[#cccccc] px-7 py-6'>
          <div className='bg-[#f4f4f4] border border-[#898989] px-[10px] py-2 inline-block flex w-max'>
            <div className='flex items-center gap-x-4'>
              Length oriented grain
              <span>
                <img src='../cross-icon.webp' alt='' />
              </span>
            </div>
          </div>
          <div className='mt-3'>
            <div className='grid grid-cols-2 text-left'>
              <div className='text-lg text-black'>Size: </div>
              <div className='text-lg text-primary'>
                {item?.length} x {item?.width} mm
              </div>
            </div>
            <div className='grid grid-cols-2 text-left'>
              <div className='text-lg text-black'>Thickness: </div>
              <div className='text-lg text-primary'>
                {thickness[0]?.thickness}, {thickness[1]?.thickness} mm
              </div>
            </div>
            <div className='grid grid-cols-2 text-left'>
              <div className='text-lg text-black'>Core: </div>
              <div className='text-lg text-primary'>{item?.expand?.core_ref?.name}</div>
            </div>
            <div className='grid grid-cols-2 text-left'>
              <div className='text-lg text-black'>Surface:</div>
              <div className='text-lg text-primary'>{item?.expand?.surface_ref?.name}</div>
            </div>
            <div className='grid grid-cols-2 text-left'>
              <div className='text-lg text-black'>Finish: </div>
              <div className='text-lg text-primary'>{item?.expand?.finish_ref?.name}</div>
            </div>
            <div className='grid grid-cols-2 text-left'>
              <div className='text-lg text-black'>Design:</div>
              <div className='text-lg text-primary'>{item?.expand?.design_ref?.name}</div>
            </div>
            <div className='grid grid-cols-2 text-left'>
              <div className='text-lg text-black'>Texture: </div>
              <div className='text-lg text-primary'>{item?.expand?.texture_ref?.name}</div>
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
