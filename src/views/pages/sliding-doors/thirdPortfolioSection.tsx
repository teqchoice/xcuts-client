import React from 'react'
import MiddleRedTitle from '@/views/pages/components/middleRedTitle'

export default function ThirdPortfolio() {
  return (
    <section className='pb-24'>
      <div className='px-4 sm:container grid grid-cols-1 gap-1'>
        <div className='grid grid-cols-2 gap-1'>
          <div>
            <img src='images/some-more-thumb-01.webp' className='w-full' alt='' />
          </div>
          <div>
            <img src='images/some-more-thumb-02.webp' className='w-full' alt='' />
          </div>
        </div>
        <div className='mt-[1px]'>
          <img src='images/some-more-thumb-03.webp' className='w-full' alt='' />
        </div>
        <div className='flex justify-center gap-4 mt-10'>
          <a
            href='#'
            className='bg-primary px-5 py-4 md:px-5 lg:px-9 md:py-4 font-medium text-xl text-white hover:bg-black ease-in duration-200 flex items-center justify-between'
          >
            Order your sliding doors now!
          </a>
        </div>
      </div>
    </section>
  )
}
