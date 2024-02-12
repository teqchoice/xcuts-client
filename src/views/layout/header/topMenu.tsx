import Modal from '@/views/pages/components/Modal'
import { Pencil } from '@icon-park/react'
import Link from 'next/link'
import React, { useState } from 'react'

// type MenuItem = {
//   id: string
//   title: string
//   value: string
//   link: string
// }

// const defaultMenuItem: Partial<MenuItem[]> = [
//   {
//     id: '1',
//     title: 'DELIVERY',
//     value: 'DELIVERY',
//     link: '#'
//   },
//   {
//     id: '2',
//     title: 'CONTACT',
//     value: 'CONTACT',
//     link: '#'
//   },
//   {
//     id: '3',
//     title: 'SAMPLES',
//     value: 'SAMPLES',
//     link: '#'
//   },
//   {
//     id: '4',
//     title: 'MY ACCOUNT',
//     value: 'MY ACCOUNT',
//     link: '#'
//   }
// ]

export default function TopMenu({ data }: any) {
  const [modal, setModal] = useState(false)
  // const Data: { menu: MenuItem[] } = {
  //   menu: defaultMenuItem,
  //   ...props.data
  // }
  // console.log(data)
  return (
    <div className='relative bg-neutral-300'>
      <div className='px-4 sm:container flex justify-center sm:justify-end p-3 relative divide-x-2'>
        {data?.map((item: any) => {
          // console.log(item)
          return (
            <Link
              key={item.id}
              href={item.link}
              className='text-sm sm:text-base/3 text-white font-medium px-2 py-1 hover:text-primary transition-all duration-300'
            >
              {item.value}
            </Link>
          )
        })}
      </div>
      <div className='cursor-pointer flex items-center justify-center bg-primary border border-white p-4 w-fit absolute left-0 top-0'>
        <Pencil theme='outline' size='10' fill='#fff' className='cursor-pointer' onClick={() => setModal(true)} />
      </div>
      <Modal modal={modal} setModal={setModal} data={data} />
    </div>
  )
}
