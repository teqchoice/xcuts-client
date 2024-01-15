import React from 'react'

export default function CallActionSection() {
  return (
    <section className='w-full bg-neutral-500'>
      <div className='px-4 sm:container'>
        <div className='planyourvisit bg-primary md:px-5 py-4 md:py-9 flex flex-col md:flex-row justify-between items-center -mt-20 -mb-16 max-md:-mb-20  relative'>
          <h5 className='font-semibold max-md:text-xl text-2xl text-white text-center md:text-left mb-8 md:mb-0'>
            We're open from 8am-5pm, Monday to Friday
          </h5>
          <div className='flex items-center space-x-12'>
            <h6 className='font-semibold text-lg whitespace-nowrap lg:text-2xl mb-5 sm:mb-0 text-white'>Visit us</h6>
            <a href='#' className='bg-black text-white font-medium text-base whitespace-nowrap lg:text-xl p-5'>
              Plan your visit <i className='ri-arrow-right-s-line'></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
