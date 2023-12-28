import React from 'react'

// type HeaderItem = {
//   logo: string
//   phone_number: string
//   days: string
//   times: string
// }

// const defaultHeaderItem: Partial<HeaderItem> = {
//   logo: 'images/logo.webp',
//   phone_number: '0170 790 7000',
//   days: 'MON - FRI',
//   times: '8AM - 5PM'
// }

export default function MineHeader({ data }: any) {
  // const Data: HeaderItem = {
  //   ...defaultHeaderItem,
  //   ...props.Data
  // }
  // console.log(data[3])
  return (
    <div className='mainHder bg-white py-5'>
      <div className='px-4 sm:container flex justify-between place-items-center'>
        <a href={data[3]?.link}>
          <img src={process.env.NEXT_PUBLIC_API_URL + data[3]?.filec} alt='' className=' w-28 md:w-48' />{' '}
        </a>
        <div className='tp-phone flex place-items-center'>
          <img src='images/phone-icon.webp' alt='' className='w-9 h-9' />
          <div className='phoneDtls ml-3'>
            <div className='text-sm md:text-lg flex gap-5'>
              <span
                dangerouslySetInnerHTML={{
                  __html: data[0]?.value
                }}
              ></span>
              <span
                className='text-primary'
                dangerouslySetInnerHTML={{
                  __html: data[1]?.value
                }}
              ></span>
            </div>
            <a href='#' className='text-xl md:text-2xl leading-4'>
              {data[2]?.value}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
