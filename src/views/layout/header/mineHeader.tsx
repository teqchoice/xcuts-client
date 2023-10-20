import React from 'react'

export default function MineHeader() {
  return (
    <div className='mainHder bg-white py-5'>
      <div className='px-4 sm:container flex justify-between place-items-center'>
        <a href='#'>
          <img src='images/logo.webp' alt='' className=' w-28 md:w-48' />{' '}
        </a>
        <div className='tp-phone flex place-items-center'>
          <img src='images/phone-icon.webp' alt='' className='w-9 h-9' />
          <div className='phoneDtls ml-3'>
            <p className='text-sm md:text-lg'>
              MON - FRI <span className='text-primary'>8AM - 5PM</span>
            </p>
            <a href='#' className='text-xl md:text-2xl leading-4'>
              0170 790 7000
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
