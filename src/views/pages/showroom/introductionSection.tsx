import React from 'react'

export default function IntroductionSection() {
  return (
    <section className='section-one-stop py-10 md:py-20'>
      <div className='px-4 sm:container'>
        <div className='text-center px-1 overflow-hidden'>
          <div className='text-2xl md:text-4xl mb-2'>Seeing is believing.</div>
          <div className='bg-black mx-6 md:mx-28 skew-y-[0] skew-x-[35deg] relative'>
            <div className='w-3 md:w-20 h-11 bg-primary absolute left-0 md:-left-24 bottom-0'></div>
            <div className='w-3 md:w-20 h-11 bg-primary absolute right-0 md:-right-24 top-0'></div>
            <h1 className='text-white text-xl/6 md:text-5xl font-bold -skew-x-[35deg] py-2 uppercase px-4'>
              WELCOME TO OUR XCUTS SHOWROOM!
            </h1>
          </div>
          <div className='flex flex-col gap-y-3 text-black-1d mt-10'>
            <p>
              Conveniently located in Hatfield, just outside London, the Xcuts showroom is easily accessible via the
              M25, M1, and A1. Visit us to explore our top décor selections in person and get a closer look at how we
              operate. Our showroom is open to everyone, from carpenters and furniture makers to interior designers and
              DIY enthusiasts.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
