import React from 'react'

export default function TopMneu({ data }: any) {
  console.log(data)
  return (
    <div className='ftr__title__grid relative pt-20 pb-10'>
      <h4 className='text-2xl font-semibold text-white mb-8'>{data[1][0]?.value}</h4>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div className='bg-neutral-400 text-center px-3 lg:p-5 flex flex-col justify-center align-middle min-h-[213px]'>
          <img className='w-[39px] h-[49px] ml-auto mr-auto mb-6' src='images/map-icon.webp' alt='' />
          <p className='text-white xxl:px-16'>{data[1][3]?.value}</p>
        </div>
        <div className='bg-neutral-400 text-center lg:p-5 flex flex-col justify-center align-middle min-h-[213px]'>
          <img className='w-[43px] h-[43px] ml-auto mr-auto mb-6' src='images/phone-ftr-icon.webp' alt='' />
          <a href='tel:+44(0)1707907000' className='text-white xxl:px-16'>
            {data[1][4]?.value}
          </a>
        </div>
        <div className='bg-neutral-400 text-center lg:p-5 flex flex-col justify-center align-middle min-h-[213px]'>
          <img className='w-[57px] h-[41px] ml-auto mr-auto mb-6' src='images/envelop-icon.webp' alt='' />
          <a href='mailto:hello@xcuts.co.uk' className='text-white xxl:px-16'>
            {data[1][5]?.value}
          </a>
        </div>
      </div>
    </div>
  )
}
