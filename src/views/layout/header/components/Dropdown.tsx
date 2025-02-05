import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Dropdown({ menu, setMenu, data }: any) {
  // console.log(data)
  function AllDecors({ menu }: any) {
    return (
      <div onMouseLeave={() => setMenu('')} className={`relative bg-white`}>
        <div className='container  grid grid-cols-4 p-6 gap-10 items-center'>
          <Link href={'/all-decors'} className='relative border-4 cursor-pointer'>
            <Image src='/images/alldecor.jpeg' alt='' className='w-full' width={334} height={227} />
            <div className='bg-primary/50 absolute bottom-0 left-0 right-0 w-full text-white'>
              <h3 className='font-semibold text-lg text-center'>ALL DECORS</h3>
            </div>
          </Link>
          <div>
            <ul className='grid gap-3'>
              {data?.all_decors_menuitem.slice(0, 5).map((i: any) => (
                <Link
                  key={i.name}
                  href={`/all-decors?Brand=${i?.link}`}
                  className='group flex items-center gap-2 font-semibold'
                >
                  <div className='w-10 group-hover:scale-105'>
                    <Image src='/images/marker.png' alt='' className='w-full' width={40} height={40} />
                  </div>
                  <li>{i?.name}</li>
                </Link>
              ))}
            </ul>
          </div>
          <div>
            <ul className='grid gap-3'>
              {data?.all_decors_menuitem.slice(5, 10).map((i: any) => (
                <Link
                  key={i.name}
                  href={`/all-decors?Brand=${i?.link}`}
                  className='group flex items-center gap-2 font-semibold'
                >
                  <div className='w-10 group-hover:scale-105'>
                    <Image src='/images/marker.png' alt='' className='w-full' width={40} height={40} />
                  </div>
                  <li>{i?.name}</li>
                </Link>
              ))}
            </ul>
          </div>
          <div>
            <ul className='grid gap-3'>
              {data?.all_decors_menuitem.slice(10, 15).map((i: any) => (
                <Link
                  key={i.name}
                  href={`/all-decors?Brand=${i?.link}`}
                  className='group flex items-center gap-2 font-semibold'
                >
                  <div className='w-10 group-hover:scale-105'>
                    <Image src='/images/marker.png' alt='' className='w-full' width={40} height={40} />
                  </div>
                  <li>{i?.name}</li>
                </Link>
              ))}
            </ul>
          </div>
          {/* <div>
            <ul className='grid gap-3'>
              <Link href={'/all-decors?Brand=veneered+boards'} className='group flex items-center gap-2 font-semibold'>
                <div className='w-10 group-hover:scale-105'>
               <Image src='/images/marker.png' alt='' className='w-full' width={40} height={40} />
                </div>
                <li>Veneers</li>
              </Link>
              <Link href={'/all-decors?Brand=plywood'} className='group flex items-center gap-2 font-semibold'>
                <div className='w-10 group-hover:scale-105'>
               <Image src='/images/marker.png' alt='' className='w-full' width={40} height={40} />
                </div>
                <li>Plywood</li>
              </Link>
              <Link href={'/all-decors/Diplos'} className='group flex items-center gap-2 font-semibold'>
                <div className='w-10 group-hover:scale-105'>
               <Image src='/images/marker.png' alt='' className='w-full' width={40} height={40} />
                </div>
                <li>Diplos</li>
              </Link>
              <Link href={'/all-decors/Finsa'} className='group flex items-center gap-2 font-semibold'>
                <div className='w-10 group-hover:scale-105'>
               <Image src='/images/marker.png' alt='' className='w-full' width={40} height={40} />
                </div>
                <li>Finsa</li>
              </Link>
            </ul>
          </div> */}
        </div>
        {/* <div className='absolute -bottom-4 right-[5%]'>
          <img src='../images/x-icon-02.webp' alt='' className='w-full scale-125' />
        </div> */}
        {/* <div className='absolute -top-4 left-[5%] opacity-60'>
          <img src='../images/x-icon-02.webp' alt='' className='w-full scale-125' />
        </div> */}
      </div>
    )
  }
  function Services({ menu }: any) {
    return (
      <div onMouseLeave={() => setMenu('')} className={`relative  bg-white`}>
        <div className='container  grid grid-cols-4 p-8 gap-10'>
          {data?.services_menuitem.map((i: any) => (
            <Link key={i.name} href={`/${i?.link}`} className=' group cursor-pointer'>
              <div className='relative  overflow-hidden'>
                <Image src={i?.poster_url} alt='' className='w-full h-40' width={338} height={160} />
                <div className='overflow-hidden absolute left-0 top-0 z-10 ring-inset group-hover:ring-8 ring-primary opacity-0 group-hover:opacity-100 transition-all duration-150'>
                  <Image src={i?.poster_url} alt='' className='w-screen h-40 opacity-20' width={338} height={160} />
                </div>
              </div>
              <h3 className='font-bold text-lg'>{i?.name}</h3>
              <p>{i?.content}</p>
            </Link>
          ))}
        </div>
        <div className='absolute -bottom-4 right-[5%]'>
          <img src='../images/x-icon-02.webp' alt='' className='w-full scale-125' />
        </div>
        {/* <div className='absolute -top-4 left-[5%] opacity-60'>
          <img src='../images/x-icon-02.webp' alt='' className='w-full scale-125' />
        </div> */}
      </div>
    )
  }

  function Product({ menu }: any) {
    return (
      <div onMouseLeave={() => setMenu('')} className={`relative bg-white`}>
        <div className='container grid grid-cols-3 p-8 gap-10'>
          {data?.products_menuitem?.map((i: any) => (
            <Link
              key={i.name}
              href={`/${i?.link}`}
              className='grid grid-cols-2 group cursor-pointer items-center gap-2'
            >
              <div className='relative overflow-hidden'>
                <Image src={i?.poster_url} alt='' className='w-full h-40' height={160} width={228} />
                <div className='overflow-hidden absolute left-0 top-0 z-10 ring-inset group-hover:ring-8 ring-primary opacity-0 group-hover:opacity-100 transition-all duration-150'>
                  <Image src={i?.poster_url} alt='' className='w-full opacity-20 h-40' height={160} width={228} />
                </div>
              </div>
              <div>
                <h3 className='font-bold text-lg'>{i?.name}</h3>
                <p>{i?.content}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className='absolute -bottom-4 right-[5%]'>
          <img src='../images/x-icon-02.webp' alt='' className='w-full scale-125' />
        </div>
        {/* <div className='absolute top-0 left-[5%]'>
          <img src='../images/x-icon-02.webp' alt='' className='w-full scale-125' />
        </div> */}
      </div>
    )
  }

  return (
    <div className='relative bg-slate-600'>
      <div className={`absolute z-10 left-0 top-0 right-0`}>
        {menu === 'ALL DECORS' ? (
          <AllDecors menu={menu} />
        ) : menu === 'SERVICES' ? (
          <Services menu={menu} />
        ) : menu === 'PRODUCTS' ? (
          <Product menu={menu} />
        ) : null}
      </div>
    </div>
  )
}
