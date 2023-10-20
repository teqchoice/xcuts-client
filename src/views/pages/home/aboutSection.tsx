import React from 'react'

export default function AboutSection() {
  return (
    <section className=' py-10 md:py-20'>
      <div className='px-4 sm:container'>
        <div className='text-center px-1 overflow-hidden'>
          <div className='text-2xl md:text-4xl'>
            <span className='font-bold text-primary inline-block'>X</span>CUTS
          </div>
          <div className='bg-black mx-6 md:mx-28 skew-y-[0] skew-x-[35deg] relative'>
            <div className='w-3 md:w-20 h-11 bg-primary absolute left-0 md:-left-24 bottom-0'></div>
            <div className='w-3 md:w-20 h-11 bg-primary absolute right-0 md:-right-24 top-0'></div>
            <h1 className='text-white text-xl/6 md:text-4xl font-bold -skew-x-[35deg] py-2 uppercase px-4'>
              One-Stop Shop for Cut-to-Size MDF
            </h1>
          </div>
          <div className='flex flex-col gap-y-3 text-black-1d mt-10'>
            <p>
              We specialise in delivering comprehensive solutions and top-tier products catering to furniture makers,
              interior designers, and general builders. Our commitment to exceptional customer service goes hand in hand
              with our dedication to providing products of unparalleled quality.
            </p>
            <p>We're proud to position ourselves as industry leaders, driven by our passion and expertise.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
