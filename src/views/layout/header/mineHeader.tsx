import { user_info } from '@/extensions/redux/api/auth'
import Modal from '@/views/pages/components/Modal'
import { Pencil } from '@icon-park/react'
import React, { useState } from 'react'


export default function MineHeader({ data }: any) {
  const [modal, setModal] = useState(false)
  // const Data: HeaderItem = {
  //   ...defaultHeaderItem,
  //   ...props.Data
  // }
  // console.log(data[3])
  // console.log(`https://cms.xcuts.co.uk/items/header/` + data.logo)
  return (
    <div className='relative mainHder bg-white py-7'>
      <div className='px-4 sm:container flex justify-between place-items-center'>
        <a href={'/'}>
          <img
            src={`${process.env.NEXT_PUBLIC_API__URL_images}/${data?.logo?.id}/${data?.logo?.filename_download}`}
            alt=''
            className=' w-28 md:w-56'
          />
        </a>
        <div className='tp-phone flex place-items-center'>
          <img src='../images/phone-icon.webp' alt='' className='w-9 h-9' />
          <div className='phoneDtls ml-3'>
            <div className='text-sm md:text-base flex gap-5'>
              <span
                dangerouslySetInnerHTML={{
                  __html: data?.days
                }}
              ></span>
              <span
                className='text-primary'
                dangerouslySetInnerHTML={{
                  __html: data?.time
                }}
              ></span>
            </div>
            <a href='#' className='text-xl md:text-[1.7rem] leading-4'>
              {data?.phone}
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
