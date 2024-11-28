import React from 'react'

export default function BlockBaner({ data }: any) {
  // console.log(data)
  return (
    <section
      className={
        data?.baner ?? null
          ? 'relative'
          : 'relative text-center bg-[#eaeaea] h-[200px] flex items-center justify-center'
      }
    >
      {data?.baner && <img src={data?.baner} alt='baner' className='max-h-[460px] w-full md:h-auto object-cover' />}

      <div className='absolute top-1/2 w-full -translate-y-1/2 text-center grid'>
        {data?.baner ?? null ? (
          <>
            <h4 className='font-semibold text-white text-2xl md:text-4xl lg:text-6xl uppercase'>{data?.title}</h4>
            <span className='font-semibold text-white text-lg md:text-xl lg:text-2xl uppercase'>{data?.subtitle}</span>
            {data?.butt && (
              <a
                href={data?.url}
                className='border w-fit mx-auto p-3 mt-4 font-semibold text-white hover:bg-white hover:text-primary hover:border-primary text-lg md:text-xl lg:text-2xl uppercase'
              >
                {data?.butt}
              </a>
            )}
          </>
        ) : (
          <h4 className='font-semibold text-2xl md:text-4xl lg:text-6xl uppercase'>
            {data?.title}
            <br />
            {data?.subtitle && data?.subtitle}
          </h4>
        )}

        {data?.order && (
          <>
            <a href='#' className='text-xl text-white underline hover:no-underline mt-3'>
              Order name
            </a>
            <p className='text-xl text-center text-white leading-9 mt-1'>Order number: 104175-DEF</p>
            <p className='text-xl text-center text-white leading-9 mt-1'>Order status: Saved</p>
            <p className='text-xl text-center text-white leading-9 mt-1'>Created on: 22 Sep 2023</p>
          </>
        )}
      </div>
    </section>
  )
}
