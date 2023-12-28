import { Close, HamburgerButton, Search, Shopping, ShoppingCart, ShoppingCartOne } from '@icon-park/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

// type MenuItem = {
//   id: string
//   title: string
//   url: string
// }

// const defaultMenuItem: Partial<MenuItem[]> = [
//   {
//     id: '1',
//     title: 'Decor collections',
//     url: '#'
//   },
//   {
//     id: '2',
//     title: 'Services',
//     url: '#'
//   },
//   {
//     id: '3',
//     title: 'Products',
//     url: '#'
//   },
//   {
//     id: '4',
//     title: 'Showroom',
//     url: '#'
//   },
//   {
//     id: '5',
//     title: 'Shop online',
//     url: '#'
//   }
// ]

export default function MineMenu({ data, logo }: any) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem('HamburgerMenu', `${isOpen}`)
    console.log('first')
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
        <Link href={`${logo[4]?.link}`}>
          <img src={process.env.NEXT_PUBLIC_API_URL + logo[4]?.filec} alt='' className=' w-48' />{' '}
        </Link>
      </div>
      {/* <div className=' text-white'>sdfdsf</div> */}
      <div className=' w-full p-5 '>
        <ul className='flex flex-col text-white divide-y'>
          {data?.map((item: any, i: number) => {
            return (
              <li key={i} className='relative group p-3'>
                <Link href={item.link} className='group-hover:text-black relative duration-150'>
                  {item.value} +
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
      <nav className='bg-black relative py-3'>
        <div className='px-4 sm:container flex justify-between flex-grow items-center'>
          <HamburgerButton
            theme='outline'
            size='27'
            fill='#fff'
            className='md:hidden'
            onClick={() => setIsOpen(!isOpen)}
          />
          <div className='hidden md:block md:pt-0'>
            <ul className='flex flex-col gap-y-4 md:gap-y-0 md:flex-row md:gap-x-0 transition duration-300 md:transition-none absolute md:relative w-[100%] left-0 top-[100%] bg-neutral-400 md:bg-transparent md:text-white space-y-0 px-2 md:px-0 pb-3 pt-2 md:pb-0 md:pt-0 z-10'>
              {data?.map((item: any, i: number) => {
                // if (i > 5)
                return (
                  <li key={i} className='md:mt-0'>
                    <Link
                      href={item.link}
                      className='text-base md:text-base block md:inline-block text-white px-2 sm:px-2 z-50 md:py-3 py-1.5 relative hover:before:bg-primary hover:before:absolute hover:before:top-0 hover:before:bottom-0 hover:before:contents hover:before:md:skew-y-[0deg] hover:before:md:skew-x-[30deg] hover:md:before:right-6 hover:before:right-0 hover:before:md:left-6 hover:before:left-0 hover:before:-z-50 before:transition before:duration-700 hover:before:md:rounded-none hover:before:rounded'
                    >
                      {item.value} +
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className='flex gap-6'>
            <a href='#' className=''>
              <Search theme='outline' size='27' fill='#fff' />
            </a>
            <a href='#'>
              <Shopping theme='outline' size='30' fill='#fff' />
            </a>
          </div>
        </div>
      </nav>
      {hamb}
    </>
  )
}
