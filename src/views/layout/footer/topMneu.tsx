import React from 'react'

export default function TopMneu() {
  return (
    <div className='ftr__title__grid relative pt-20 pb-10'>
      <h4 className='text-2xl font-semibold text-white mb-8'>Contact Details</h4>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div className='bg-neutral-400 text-center px-3 lg:p-5 flex flex-col justify-center align-middle min-h-[213px]'>
          <img className='w-[39px] h-[49px] ml-auto mr-auto mb-6' src='images/map-icon.webp' alt='' />
          <p className='text-white xxl:px-16'>Unit 33 The IO Centre, Hearle Way, Hatfield, AL10 9EW</p>
        </div>
        <div className='bg-neutral-400 text-center lg:p-5 flex flex-col justify-center align-middle min-h-[213px]'>
          <img className='w-[43px] h-[43px] ml-auto mr-auto mb-6' src='images/phone-ftr-icon.webp' alt='' />
          <a href='tel:+44(0)1707907000' className='text-white xxl:px-16'>
            +44 (0) 170 790 7000
          </a>
        </div>
        <div className='bg-neutral-400 text-center lg:p-5 flex flex-col justify-center align-middle min-h-[213px]'>
          <img className='w-[57px] h-[41px] ml-auto mr-auto mb-6' src='images/envelop-icon.webp' alt='' />
          <a href='mailto:hello@xcuts.co.uk' className='text-white xxl:px-16'>
            hello@xcuts.co.uk
          </a>
        </div>
      </div>
    </div>
  )
}
