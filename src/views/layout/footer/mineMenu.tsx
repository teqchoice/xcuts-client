import Link from 'next/link'
import { select } from 'radash'
import React from 'react'

export default function MineMenu({ data }: any) {
  // console.log(Collections)
  const Collections = select(
    data,
    item => item,
    item => item[0]?.title?.includes('Collections')
  )[0]
  const Services = select(
    data,
    item => item,
    item => item[0]?.title?.includes('Services')
  )[0]
  const Products = select(
    data,
    item => item,
    item => item[0]?.title?.includes('Products')
  )[0]
  const Company = select(
    data,
    item => item,
    item => item[0]?.title?.includes('Company')
  )[0]
  const Resources = select(
    data,
    item => item,
    item => item[0]?.title?.includes('Resources')
  )[0]
  // console.log(Collections.slice(1, 7))
  return (
    <div className='ftr__links grid grid-cols-1 md:grid-cols-3 gap-4 lg:grid-cols-6 space-y-14 md:space-y-0 md:space-x-6'>
      <div className='basis-full md:basis-[28%] col-span-2'>
        <div className='w-16 h-[0.35rem] mb-2 bg-primary'></div>
        <h5 className='text-2xl font-semibold text-white mb-4'>{Collections[0].value}</h5>
        <div className='grid grid-cols-2 items-start '>
          <div className='mt-4 space-y-2 flex flex-col'>
            {Collections?.slice(1, 7)?.map((item: any) => (
              <a key={item.id} href='#' className='text-white hover:text-primary font-normal text-base transition-all'>
                {item.value}
              </a>
            ))}
          </div>
          <div className='mt-4 space-y-2 flex flex-col'>
            {Collections?.slice(7, 14)?.map((item: any) => (
              <a key={item.id} href='#' className='text-white hover:text-primary font-normal text-base transition-all'>
                {item.value}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className='basis-full md:basis-[19%]'>
        <div className='w-14 h-[0.35rem] mb-2 bg-primary'></div>
        <h5 className='text-2xl font-semibold text-white mb-4'>{Services[0].value}</h5>
        <div className='flex gap-x-14'>
          <div className='mt-4 space-y-2 flex flex-col'>
            {Services?.map((item: any) => (
              <a key={item.id} href='#' className='text-white hover:text-primary font-normal text-base transition-all'>
                {item.value}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className='basis-full md:basis-[19%]'>
        <div className='w-14 h-[0.35rem] mb-2 bg-primary'></div>
        <h5 className='text-2xl font-semibold text-white mb-4'>{Products[0].value}</h5>
        <div className='flex gap-x-14'>
          <div className='mt-4 space-y-2 flex flex-col'>
            {Products?.map((item: any) => (
              <a key={item.id} href='#' className='text-white hover:text-primary font-normal text-base transition-all'>
                {item.value}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className='basis-full md:basis-[19%]'>
        <div className='w-16 h-[0.35rem] mb-2 bg-primary'></div>
        <h5 className='text-2xl font-semibold text-white mb-4'>{Company[0].value}</h5>
        <div className='flex gap-x-14'>
          <div className='mt-4 space-y-2 flex flex-col'>
            {Company?.map((item: any) => (
              <a key={item.id} href='#' className='text-white hover:text-primary font-normal text-base transition-all'>
                {item.value}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className='basis-full md:basis-[15%]'>
        <div className='w-16 h-[0.35rem] mb-2 bg-primary'></div>
        <h5 className='text-2xl font-semibold text-white mb-4'>{Resources[0].value}</h5>
        <div className='flex gap-x-14'>
          <div className='mt-4 space-y-2 flex flex-col'>
            {Resources?.map((item: any) => (
              <a key={item.id} href='#' className='text-white hover:text-primary font-normal text-base transition-all'>
                {item.value}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
