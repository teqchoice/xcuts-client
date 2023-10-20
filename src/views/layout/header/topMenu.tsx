import React from 'react'

type MenuItem = {
  id: string
  title: string
  url: string
}

const defaultMenuItem: Partial<MenuItem[]> = [
  {
    id: '1',
    title: 'DELIVERY',
    url: '#'
  },
  {
    id: '2',
    title: 'CONTACT',
    url: '#'
  },
  {
    id: '3',
    title: 'SAMPLES',
    url: '#'
  },
  {
    id: '4',
    title: 'MY ACCOUNT',
    url: '#'
  }
]

export default function TopMenu(props: any) {
  const Data: { menu: MenuItem[] } = {
    menu: defaultMenuItem,
    ...props.Data
  }
  return (
    <div className='topHder bg-neutral-300'>
      <div className='px-4 sm:container flex justify-center sm:justify-end p-2 relative'>
        {Data?.menu?.map((item: MenuItem) => {
          return (
            <a
              key={item.id}
              href='#'
              className='text-sm sm:text-base/3 text-white px-2 sm:px-3 z-50 py-1 sm:py-3 relative after:border-r-2 after:absolute after:w-1 after:h-3 sm:after:h-4 after:right-0 after:top-2 sm:after:inset-y-2/4 sm:after:-mt-2 hover:before:bg-primary hover:before:absolute hover:before:top-0 hover:before:bottom-0 hover:before:contents hover:before:skew-y-[0deg] hover:before:skew-x-[30deg] hover:before:right-4 hover:before:left-4 hover:before:-z-50 before:transition before:duration-700'
            >
              {item.title}
            </a>
          )
        })}
      </div>
    </div>
  )
}
