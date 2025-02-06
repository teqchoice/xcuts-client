import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
export default function MineMenu({ data }: any) {
  // const Resources = [
  //   {
  //     id: '44',
  //     title: 'Resources',
  //     value: 'Articles',
  //     link: '',
  //     filec: ''
  //   },
  //   {
  //     id: '45',
  //     title: 'Inspiration hub',
  //     value: 'Xcuts Tips',
  //     link: '',
  //     filec: ''
  //   },
  //   {
  //     id: '46',
  //     title: 'How to',
  //     value: 'FAQ',
  //     link: '',
  //     filec: ''
  //   }
  // ]

  const [brands, setBrands] = useState([])

  useEffect(() => {
    axios
      .get('https://shop.xcuts.co.uk/items/categories?fields=&filter[parent][related_categories_id][name][_eq]=brand')
      .then(res => setBrands(res?.data?.data))
  }, [])

  return (
    <div className='ftr__links grid grid-cols-1 md:grid-cols-3 gap-4 lg:grid-cols-12 gap-y-7 md:gap-y-0 md:gap-x-6'>
      <div className='basis-full md:basis-[28%] col-span-4'>
        <div className='w-16 h-[0.35rem] mb-2 bg-primary'></div>
        <h5 className='md:text-2xl text-xl font-semibold text-white md:mb-4'>Collections</h5>
        <div className='grid grid-cols-2 items-start gap-y-2'>
          {brands?.map((item: any) => (
            <Link
              key={item.name}
              href={`/all-decors?Brand=${item.name}`}
              className='text-white hover:text-primary font-normal md:text-base text-[12px] transition-all'
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div className='basis-full md:basis-[19%] col-span-3'>
        <div className='w-14 h-[0.35rem] mb-2 bg-primary'></div>
        <h5 className='md:text-2xl text-xl font-semibold text-white md:mb-4'>Services</h5>
        <div className='flex gap-x-14'>
          <div className='md:mt-4 mt-2 space-y-2 flex flex-col'>
            {data?.Services_menu?.map((item: any) => (
              <Link
                key={item.name}
                href={item.link}
                className='text-white hover:text-primary font-normal md:text-base text-[12px] transition-all'
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className='basis-full md:basis-[19%] col-span-3'>
        <div className='w-14 h-[0.35rem] mb-2 bg-primary'></div>
        <h5 className='md:text-2xl text-xl font-semibold text-white md:mb-4'>Products</h5>
        <div className='flex gap-x-14'>
          <div className='md:mt-4 mt-2 space-y-2 flex flex-col'>
            {data?.Products_menu?.map((item: any) => (
              <Link
                key={item.name}
                href={item.link}
                className='text-white hover:text-primary font-normal md:text-base text-[12px] transition-all'
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className='basis-full md:basis-[19%] col-span-2'>
        <div className='w-16 h-[0.35rem] mb-2 bg-primary'></div>
        <h5 className='md:text-2xl text-xl font-semibold text-white md:mb-4'>Company</h5>
        <div className='flex gap-x-14'>
          <div className='md:mt-4 mt-2 space-y-2 flex flex-col'>
            {data?.Company_menu?.map((item: any) => (
              <Link
                key={item.name}
                href={item.link}
                className='text-white hover:text-primary font-normal md:text-base text-[12px] transition-all'
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* <div className='basis-full md:basis-[15%]'>
        <div className='w-16 h-[0.35rem] mb-2 bg-primary'></div>
        <h5 className='text-2xl font-semibold text-white mb-4'>Resources</h5>
        <div className='flex gap-x-14'>
          <div className='md:mt-4 mt-2 space-y-2 flex flex-col'>
            {Resources?.map((item: any) => (
              <a key={item.id} href='#' className='text-white hover:text-primary font-normal md:text-base text-[12px] transition-all'>
                {item.value}
              </a>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  )
}
