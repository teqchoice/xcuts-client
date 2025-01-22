import React from 'react'

export default function CallActionSection() {
  return (
    <section className='w-full md:mb-0 mb-16'>
      <div className='px-4 sm:container'>
        <div className='planyourvisit bg-primary md:px-5 py-4 md:py-9 flex flex-col md:flex-row justify-between items-center -mt-20 -mb-16 max-md:-mb-20 relative px-4'>
          <h5 className='font-semibold max-md:text-xl md:!text-2xl !text-lg text-white text-center md:text-left mb-5 md:mb-0'>
            We're open from 8am-5pm, Monday to Friday
          </h5>
          <div className='flex items-center gap-x-12'>
            <h6 className='font-semibold text-lg whitespace-nowrap lg:text-2xl text-white'>Visit us</h6>
            <a href='#' className='bg-black text-white font-medium text-base whitespace-nowrap lg:text-xl p-5'>
              Plan your visit <i className='ri-arrow-right-s-line'></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
