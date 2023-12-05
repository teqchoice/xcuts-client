import React from 'react'

export default function AboutSection({ data }: any) {
  // console.log(data[0].value)

  return (
    <section className=' py-10 md:py-20'>
      <div className='px-4 sm:container'>
        <div className='text-center px-1 overflow-hidden'>
          <div
            className='text-2xl md:text-4xl'
            dangerouslySetInnerHTML={{
              __html: data[0][0].value
            }}
          ></div>
          <div className='bg-black mx-6 md:mx-28 skew-y-[0] skew-x-[35deg] relative'>
            <div className='w-3 md:w-20 h-11 bg-primary absolute left-0 md:-left-24 bottom-0'></div>
            <div className='w-3 md:w-20 h-11 bg-primary absolute right-0 md:-right-24 top-0'></div>
            <h1
              className='text-white text-xl/6 md:text-4xl font-bold -skew-x-[35deg] py-2 uppercase px-4'
              dangerouslySetInnerHTML={{
                __html: data[0][1].value
              }}
            ></h1>
          </div>
          <div
            className='flex flex-col gap-y-3 text-black-1d mt-10'
            dangerouslySetInnerHTML={{
              __html: data[0][2].value
            }}
          ></div>
        </div>
      </div>
    </section>
  )
}
