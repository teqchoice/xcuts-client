import { user_info } from '@/extensions/redux/api/auth'
import Modal from '@/views/pages/components/Modal'
import { Close, HamburgerButton, Pencil, Search, Shopping, ShoppingCart, ShoppingCartOne, User } from '@icon-park/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import SearchC from './components/search'

const defaultMenuItem = [
  // {
  //   id: '1',
  //   title: 'Home',
  //   value: 'Home',
  //   link: '/',
  //   filec: ''
  // },
  {
    id: '2',
    title: 'Decor Collections',
    value: 'ALL DECORS',
    link: '#',
    filec: ''
  },
  {
    id: '3',
    title: 'Services',
    value: 'SERVICES',
    link: '#',
    filec: ''
  },
  {
    id: '4',
    title: 'Products',
    value: 'PRODUCTS',
    link: '#',
    filec: ''
  },

  {
    id: '5',
    title: 'Showroom',
    value: 'SHOWROOM',
    link: '/showroom',
    filec: ''
  },
  {
    id: '6',
    title: 'Shop online',
    value: 'SHOP ONLINE',
    link: '/shop-online',
    filec: ''
  }
]

export default function MineMenu({ data, setMenu }: any) {
  const [isOpen, setIsOpen] = useState(false)
  const [modal, setModal] = useState(false)
  const [user, setUser] = useState(false)

  useEffect(() => {
    localStorage.setItem('HamburgerMenu', `${isOpen}`)
    user_info ? setUser(true) : setUser(false)
    // console.log('first')
  }, [isOpen])

  const hamb = (
    <div
      className={`flex flex-col items-center justify-start fixed top-0 left-0 z-50 h-screen bg-black ${
        isOpen ? 'w-screen' : 'w-0'
      } transition-all duration-300 overflow-hidden`}
    >
      <Close
        theme='outline'
        size='27'
        fill='#fff'
        onClick={() => setIsOpen(!isOpen)}
        className=' absolute top-0 left-0 p-3 cursor-pointer'
      />
      <div className=' pt-10 pb-5'>
        <Link href={`${data?.logo?.link}`}>
          {/* <img src={process.env.NEXT_PUBLIC_API_URL + logo[4]?.filec} alt='' className=' w-48' /> */}
        </Link>
      </div>
      {/* <div className=' text-white'>sdfdsf</div> */}
      <div className=' w-full p-5 '>
        <ul className='flex flex-col text-white divide-y'>
          {defaultMenuItem?.map((item: any, i: number) => {
            return (
              <li key={i + item.value} className='relative group p-3'>
                <Link href={item.link} className='group-hover:text-black relative duration-150'>
                  {item.value}
                </Link>
                <span className='absolute left-0 bottom-0 w-0 h-full bg-white -z-10 group-hover:w-full group-hover:transition-all duration-150'></span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )

  return (
    <>
      <nav className='relative bg-black py-2'>
        <div className='px-4 sm:container flex justify-between flex-grow items-center'>
          <HamburgerButton
            theme='outline'
            size='27'
            fill='#fff'
            className='md:hidden z-40 bg-black'
            onClick={() => setIsOpen(!isOpen)}
          />
          <div className='hidden md:block md:pt-0'>
            <ul className='flex flex-col flex-wrap gap-y-4 md:gap-y-0 md:flex-row md:gap-x-0 transition duration-300 md:transition-none absolute md:relative w-[100%] left-0 top-[100%] bg-neutral-400 md:bg-transparent md:text-white space-y-0 px-2 md:px-0 pb-3 pt-2 md:pb-0 md:pt-0 z-10'>
              {defaultMenuItem?.map((item: any, i: number) => {
                // if (i > 5)
                return (
                  <li
                    key={i + item.value}
                    className='group relative md:mt-0 cursor-pointer  z-50'
                    onClick={() => setMenu(item.value)}
                    // onMouseOut={() => setMenu('')}
                  >
                    <Link
                      href={item.link}
                      className='text-base md:text-base block md:inline-block text-white px-2 sm:px-2 z-50 md:py-3 py-1.5 relative hover:before:bg-primary hover:before:absolute hover:before:top-0 hover:before:bottom-0 hover:before:contents hover:before:md:skew-y-[0deg] hover:before:md:skew-x-[30deg] hover:md:before:right-6 hover:before:right-0 hover:before:md:left-6 hover:before:left-0 hover:before:-z-50 before:transition before:duration-700 hover:before:md:rounded-none hover:before:rounded'
                    >
                      {item.value}
                    </Link>
                    <div className='opacity-0 group-hover:opacity-100 transition-all duration-150 w-16 h-8 bg-primary absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 skew-y-[0] skew-x-[35deg]'></div>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className='flex gap-6'>
            <SearchC />
            <a href='#'>
              <Shopping theme='outline' size='30' fill='#fff' />
            </a>
            <Link href='/dashboard' className='text-white flex text-center items-center justify-center gap-2'>
              {!user ? <User theme='outline' size='27' fill='#fff' /> : 'Hi ' + user_info?.first_name || 'new user'}
            </Link>
          </div>
        </div>
        {user_info?.role === 'admin' && process.env.NEXT_PUBLIC_ADMIN_SHOW === 'true' && (
          <div className='cursor-pointer flex items-center justify-center bg-primary border border-white p-4 w-fit absolute left-0 top-0'>
            <Pencil theme='outline' size='10' fill='#fff' className='cursor-pointer' onClick={() => setModal(true)} />
          </div>
        )}
        <Modal modal={modal} setModal={setModal} data={data} />
      </nav>
      {hamb}
    </>
  )
}
