import { Search, Shopping, ShoppingCart, ShoppingCartOne } from '@icon-park/react'
import React from 'react'

type MenuItem = {
  id: string
  title: string
  url: string
}

export default function MineMenu({ Data }: any) {
  return (
    <nav className='bg-black relative py-3'>
      <div className='px-4 sm:container flex justify-between flex-grow items-center'>
        <div className=''>
          <div className='flex items-center justify-start'>
            <input type='checkbox' name='hamburger' id='hamburger' className='peer' hidden />
            <label
              // for='hamburger'
              className='peer-checked:hamburger block relative z-20 p-0 -mr-6 cursor-pointer md:hidden'
            >
              <div aria-hidden='true' className='m-auto h-0.5 w-6 rounded bg-white transition duration-300'></div>
              <div aria-hidden='true' className='m-auto mt-2 h-0.5 w-6 rounded bg-white transition duration-300'></div>
            </label>
            <div className='peer-checked:block hidden md:block md:pt-0'>
              <ul className='flex flex-col gap-y-4 md:gap-y-0 md:flex-row md:gap-x-2 transition duration-300 md:transition-none absolute md:relative w-[100%] left-0 top-[100%] bg-neutral-400 md:bg-transparent md:text-white space-y-0 px-2 md:px-0 pb-3 pt-2 md:pb-0 md:pt-0 z-50'>
                {Data?.menu?.map((item: MenuItem) => {
                  return (
                    <li key={item.id} className='md:mt-0'>
                      <a
                        href='#'
                        className='text-base md:text-base block md:inline-block text-white px-2 sm:px-2 z-50 md:py-3 py-1.5 relative hover:before:bg-primary hover:before:absolute hover:before:top-0 hover:before:bottom-0 hover:before:contents hover:before:md:skew-y-[0deg] hover:before:md:skew-x-[30deg] hover:md:before:right-6 hover:before:right-0 hover:before:md:left-6 hover:before:left-0 hover:before:-z-50 before:transition before:duration-700 hover:before:md:rounded-none hover:before:rounded'
                      >
                        {item.title} +
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className='flex gap-6'>
          <a href='#' className=''>
            {/* <img src='images/search-icon.webp' alt='' className='' /> */}
            <Search theme='outline' size='27' fill='#fff' />
          </a>
          <a href='#'>
            {/* <img src='images/cart-icon.webp' alt='' /> */}
            <Shopping theme='outline' size='30' fill='#fff' />
          </a>
        </div>
      </div>
    </nav>
  )
}
