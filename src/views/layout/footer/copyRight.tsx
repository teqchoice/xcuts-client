import React from 'react'

export default function CopyRight({ data }: any) {
  // console.log(data[1][2].filec)
  return (
    <div className='ftr__copy__right flex flex-col md:flex-row md:justify-between items-center py-8'>
      <div className='order-1 md:order-none'>
        <a href='#' className='text-white text-base'>
          {data[1][1].value}
        </a>
      </div>
      <div className='mb-6 md:mb-0'>
        <a href={data[1][2].link}>
          <img src={process.env.NEXT_PUBLIC_API_URL + data[1][2]?.filec} alt='' />
        </a>
      </div>
    </div>
  )
}
