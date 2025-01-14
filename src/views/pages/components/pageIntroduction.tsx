import Image from 'next/image'
import React from 'react'

type TPageIntroduction = {
  title: string
  baner: string
}

const defaultPageIntroduction: Partial<TPageIntroduction> = {
  title: 'Page Name',
  baner: '/images/sliding-doors-banner.webp'
}

export default function PageIntroduction(data, props: any) {
  const Data = { title: 'Wardrobe Sliding Doors', baner: '/images/sliding-doors-banner.webp' }

  return (
    <>
      {/* <section className='text-center bg-[#eaeaea] h-[200px] flex items-center justify-center'>
        <h4 className='lg:text-6xl md:text-4xl text-3xl font-semibold'>{Data?.title}</h4>
      </section> */}

      <section
        className={
          Data?.baner ?? null
            ? 'relative'
            : 'relative text-center bg-[#eaeaea] h-[200px] flex items-center justify-center'
        }
      >
        {Data?.baner && (
          <Image
            src={Data?.baner}
            alt=''
            className='max-h-[460px] w-full md:h-auto h-[200px] object-cover'
            width={2000}
            height={460}
          />
        )}

        <div className='absolute top-1/2 w-full -translate-y-1/2 text-center grid'>
          {Data?.baner ?? null ? (
            <>
              <h4 className='font-semibold text-white text-2xl md:text-4xl lg:text-6xl uppercase'>
                {data?.data?.title}
              </h4>
              {/* <span className='font-semibold text-white text-lg md:text-xl lg:text-2xl uppercase'>
                {Data?.subtitle}
              </span>
              {Data?.butt && (
                <a
                  href={Data?.url}
                  className='border w-fit mx-auto p-3 mt-4 font-semibold text-white hover:bg-white hover:text-primary hover:border-primary text-lg md:text-xl lg:text-2xl uppercase'
                >
                  {Data?.butt}
                </a>
              )} */}
            </>
          ) : (
            <h4 className='font-semibold text-2xl md:text-4xl lg:text-6xl uppercase'>
              {Data?.title}
              <br />
              {/* {Data?.subtitle && Data?.subtitle} */}
            </h4>
          )}

          {/* {Data?.order && (
            <>
              <a href='#' className='text-xl text-white underline hover:no-underline mt-3'>
                Order name
              </a>
              <p className='text-xl text-center text-white leading-9 mt-1'>Order number: 104175-DEF</p>
              <p className='text-xl text-center text-white leading-9 mt-1'>Order status: Saved</p>
              <p className='text-xl text-center text-white leading-9 mt-1'>Created on: 22 Sep 2023</p>
            </>
          )} */}
        </div>
      </section>
    </>
  )
}
