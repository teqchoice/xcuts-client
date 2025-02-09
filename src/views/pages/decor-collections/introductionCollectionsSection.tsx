import React from 'react'

export default function Collections(props: any) {
  return (
    <>
      <section className='section-one-stop py-10 pb-0 md:pb-0'>
        <div className='px-4 sm:container'>
          <div className='text-center px-1 overflow-hidden'>
            <div className='text-2xl md:text-3xl mb-2'>Collections</div>
            <div className='bg-black mx-6 md:mx-28 skew-y-[0] skew-x-[35deg] relative'>
              <div className='w-3 md:w-20 sm:h-11 h-[39px] bg-primary absolute left-0 md:-left-24 bottom-0'></div>
              <div className='w-3 md:w-20 sm:h-11 h-[39px] bg-primary absolute right-0 md:-right-24 top-0'></div>
              <h1 className='text-white sm:text-[16px] text-[12px] py-2.5 md:text-4xl lg:text-5xl font-bold -skew-x-[35deg] px-4 uppercase'>
                Our Collections - Trendy Decors!
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
