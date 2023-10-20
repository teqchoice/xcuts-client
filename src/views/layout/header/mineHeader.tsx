import React from 'react'

type HeaderItem = {
  logo: string
  phone_number: string
  days: string
  times: string
}

const defaultHeaderItem: Partial<HeaderItem> = {
  logo: 'images/logo.webp',
  phone_number: '0170 790 7000',
  days: 'MON - FRI',
  times: '8AM - 5PM'
}

export default function MineHeader(props: any) {
  const Data: HeaderItem = {
    ...defaultHeaderItem,
    ...props.Data
  }

  return (
    <div className='mainHder bg-white py-5'>
      <div className='px-4 sm:container flex justify-between place-items-center'>
        <a href='#'>
          <img src={Data?.logo} alt='' className=' w-28 md:w-48' />{' '}
        </a>
        <div className='tp-phone flex place-items-center'>
          <img src='images/phone-icon.webp' alt='' className='w-9 h-9' />
          <div className='phoneDtls ml-3'>
            <p className='text-sm md:text-lg'>
              {Data?.days} <span className='text-primary'>{Data?.times}</span>
            </p>
            <a href='#' className='text-xl md:text-2xl leading-4'>
              {Data?.phone_number}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
