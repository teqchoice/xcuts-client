import { user_info } from '@/extensions/redux/api/auth'
import Modal from '@/views/pages/components/Modal'
import { Pencil } from '@icon-park/react'
import React, { useState } from 'react'

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
  const [modal, setModal] = useState(false)
  // const Data: HeaderItem = {
  //   ...defaultHeaderItem,
  //   ...props.Data
  // }
  // console.log(data[3])
  return (
    <div className='relative mainHder bg-white py-7'>
      <div className='px-4 sm:container flex justify-between place-items-center'>
        <a href={'/'}>
          <img src={process.env.NEXT_PUBLIC_API_URL + data[3]?.filec} alt='' className=' w-28 md:w-56' />
        </a>
        <div className='tp-phone flex place-items-center'>
          <img src='../images/phone-icon.webp' alt='' className='w-9 h-9' />
          <div className='phoneDtls ml-3'>
            <div className='text-sm md:text-base flex gap-5'>
              <span
                dangerouslySetInnerHTML={{
                  __html: data[2]?.value
                }}
              ></span>
              <span
                className='text-primary'
                dangerouslySetInnerHTML={{
                  __html: data[0]?.value
                }}
              ></span>
            </div>
            <a href='#' className='text-xl md:text-[1.7rem] leading-4'>
              {data[1]?.value}
            </a>
          </div>
        </div>
      </div>
      {user_info?.role === 'admin' && process.env.NEXT_PUBLIC_ADMIN_SHOW === 'true' && (
        <div className='cursor-pointer flex items-center justify-center bg-primary border border-white p-4 w-fit absolute left-0 top-0'>
          <Pencil theme='outline' size='10' fill='#fff' className='cursor-pointer' onClick={() => setModal(true)} />
        </div>
      )}
      <Modal modal={modal} setModal={setModal} data={data} />
    </div>
  )
}
