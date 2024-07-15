import { user_info } from '@/extensions/redux/api/auth'
import Modal from '@/views/pages/components/Modal'
import { Pencil } from '@icon-park/react'
import Link from 'next/link'
import React, { useState } from 'react'

export default function TopMenu({ data }: any) {
  const [modal, setModal] = useState(false)

  return (
    <div className='relative bg-neutral-300'>
      <div className='px-4 sm:container flex justify-center sm:justify-end p-3 relative divide-x-2'>
        {data
          ?.map((item: any, i: number) => {
            // console.log(item)
            return (
              <div className='group relative ' key={i}>
                <Link
                  href={item.link}
                  className='relative z-20 text-sm sm:text-base/3 text-white font-medium px-2 py-1'
                >
                  {item.value}
                </Link>
                <div className='opacity-0 z-10 group-hover:opacity-100 transition-all duration-150 w-16 h-8 bg-primary absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 skew-y-[0] skew-x-[35deg]'></div>
              </div>
            )
          })
          .reverse()}
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
