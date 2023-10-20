import React from 'react'

export default function CopyRight() {
  return (
    <div className='ftr__copy__right flex flex-col md:flex-row md:justify-between items-center py-8'>
      <div className='order-1 md:order-none'>
        <a href='#' className='text-white text-base'>
          Copyright © 2023 xcuts.co.uk. All rights reserved.
        </a>
      </div>
      <div className='mb-6 md:mb-0'>
        <a href='#'>
          <img src='images/ftr-logo.webp' alt='' />
        </a>
      </div>
    </div>
  )
}
