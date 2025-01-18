import { select } from 'radash'
import React from 'react'

export default function CopyRight({ data }: any) {
  // console.log(data[1][2].filec)
  // const datafilter = data?.find(
  //   arr =>
  //     select(
  //       arr,
  //       item => item,
  //       item => item.title === 'Contact Details'
  //     )[0]
  // )
  return (
    <div className='ftr__copy__right flex flex-col md:flex-row md:justify-between items-center md:py-10 py-5'>
      <div className='order-1 md:order-none'>
        <a href='#' className='text-white md:text-base text-[12px]'>
          {/* {
            select(
              datafilter,
              item => item,
              item => item.title === 'Copyright'
            )[0]?.value
          } */}
          {data?.copy_right}
        </a>
      </div>
      <div className='mb-6 md:mb-0'>
        <a
        // href={
        //   select(
        //     datafilter,
        //     item => item,
        //     item => item.title === 'logoFooter'
        //   )[0]?.link
        // }
        >
          <img
            className='w-96'
            // src={
            //   process.env.NEXT_PUBLIC_API_URL +
            //   select(
            //     datafilter,
            //     item => item,
            //     item => item.title === 'logoFooter'
            //   )[0]?.filec
            // }
            alt=''
          />
        </a>
      </div>
    </div>
  )
}
