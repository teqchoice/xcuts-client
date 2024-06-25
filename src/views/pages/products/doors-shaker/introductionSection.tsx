import React from 'react'

export default function IntroductionSection() {
  return (
    <section className='section-one-stop py-10 md:py-20'>
      <div className='px-4 sm:container'>
        <div className='text-center px-1 overflow-hidden'>
          <div className='text-2xl md:text-3xl mb-2'>Enhance your home with timeless elegance.</div>
          <div className='bg-black mx-6 md:mx-28 skew-y-[0] skew-x-[35deg] relative'>
            <div className='w-3 md:w-20 h-11 bg-primary absolute left-0 md:-left-24 bottom-0'></div>
            <div className='w-3 md:w-20 h-11 bg-primary absolute right-0 md:-right-24 top-0'></div>
            <h1 className='text-white text-xl/6 md:text-4xl font-bold -skew-x-[35deg] py-2 px-4'>
              Order your made-to-measure shaker doors
            </h1>
          </div>
          <div className='flex flex-col gap-y-3 text-black-1d mt-10'>
            <p>
              Introducing our custom-made Shaker-style doors and drawer fronts, built in bespoke sizes with meticulous
              attention to detail using the traditional five-piece construction for precise angles. Made using the best
              22mm moisture-resistant MDF for the frame and 9mm MDF for the inset, these "Shaker" designs can be
              expertly spray-painted in your preferred colour or primed for a hand-finished look. We also drill hinge
              holes for your convenience, completing your Shaker door, ready for installation.
            </p>
          </div>
          {/* <div className='flex justify-center gap-4 mt-10'>
            <a
              href='#'
              className='bg-black px-5 py-4 md:px-5 lg:px-6 lg:px-9 md:py-4 font-medium text-xl text-white hover:bg-primary ease-in duration-200 flex items-center justify-between'
            >
              Downloads <i className='ri-arrow-right-s-line text-xl'></i>{' '}
            </a>
            <a
              href='#'
              className='bg-primary px-5 py-4 md:px-5 lg:px-6 lg:px-9 md:py-3 font-medium text-md md:text-xl text-white hover:bg-black ease-in duration-200 flex items-center justify-between'
            >
              Shop now <i className='ri-arrow-right-s-line text-xl'></i>{' '}
            </a>
          </div> */}
        </div>
      </div>
    </section>
  )
}
