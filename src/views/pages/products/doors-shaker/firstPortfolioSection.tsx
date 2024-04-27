import React from 'react'
import MiddleRedTitle from '@/views/pages/components/middleRedTitle'

export default function FirstPortfolio() {
  return (
    <section className='overflow-hidden'>
      <MiddleRedTitle title={'Fewer than five working days to complete!'} />
      <div className='bg-neutral-100 md:flex'>
        <div className='basis-[52.12%] order-1'>
          <div className='relative overflow-hidden w-full bg-neutral-100 before:absolute before:content-normal before:bottom-0 before:w-1/2 before:bg-inherit before:right-1/2 before:skew-x-[40deg] before:pb-7 before:origin-[100%_100%] after:absolute after:content-normal after:bottom-0 after:w-1/2 after:bg-inherit after:left-1/2 after:-skew-x-[40deg] after:pb-7 after:origin-[100%_100%] md:before:w-10 md:before:h-1/2 md:before:top-0 md:before:bottom-auto md:before:right-auto md:before:skew-x-[0deg] md:before:-skew-y-[40deg] md:after:w-10 md:after:h-1/2 md:after:bottom-0 md:after:right-auto md:after:left-0 md:after:skew-x-[0deg] md:after:skew-y-[40deg] md:before:origin-[0%_0%] md:after:origin-[0%_0%]'>
            <img
              className='h-[380px] md:h-[460px] lg:h-[596px] w-full object-cover object-center'
              src='../images/alldecor.jpeg'
              alt=''
            />
          </div>
        </div>
        <div className='basis-[47.88%] flex items-center'>
          <div className='flex flex-col md:justify-center md:ml-auto pb-16 py-8 px-8 md:max-w-[410px] lg:max-w-[567px]'>
            <p className='text-xl md:text-3xl'>"Shaker" Size Dimensions</p>
            <h2 className='text-3xl md:text-4xl text-black font-bold mb-6'>customised to meet your needs!</h2>
            <p className='text-lg'>
              We can create "Shakers" that are properly squared and precisely proportioned up to 2.7 metres tall and 0.9
              metres wide.
            </p>
          </div>
        </div>
      </div>
      <div className='bg-neutral-100 md:flex'>
        <div className='basis-[52.12%]'>
          <div>
            <div className='relative overflow-hidden w-full bg-neutral-100 before:absolute before:content-normal before:bottom-0 before:w-1/2 before:bg-inherit before:right-1/2 before:skew-x-[40deg] before:pb-7 before:origin-[100%_100%] after:absolute after:content-normal after:bottom-0 after:w-1/2 after:bg-inherit after:left-1/2 after:-skew-x-[40deg] after:pb-7 after:origin-[100%_100%] md:before:w-10 md:before:h-1/2 md:before:top-0 md:before:bottom-auto md:before:right-0 md:before:skew-x-[0deg] md:before:skew-y-[40deg] md:after:w-10 md:after:h-1/2 md:after:bottom-0 md:after:right-0 md:after:left-auto md:after:skew-x-[0deg] md:after:-skew-y-[40deg]'>
              <img
                className='h-[380px] md:h-[460px] lg:h-[596px] w-full object-cover object-center'
                src='../images/alldecor.jpeg'
                alt=''
              />
            </div>
          </div>
        </div>
        <div className='basis-[47.88%] flex items-center'>
          <div className='flex flex-col md:justify-center md:mr-auto pb-16 py-8 px-8 md:max-w-[410px] lg:max-w-[567px]'>
            <p className='text-xl md:text-3xl'>Door panels: </p>
            <h2 className='text-3xl md:text-4xl text-black font-bold mb-6'>One, maybe two, three or four?</h2>
            <p className='text-lg'>
              When you can divide your doors into two, three, or four panels to better fit your design, why choose a
              single panel?
            </p>
          </div>
        </div>
      </div>
      <div className='bg-neutral-100 md:flex'>
        <div className='basis-[52.12%] order-1'>
          <div className='relative overflow-hidden w-full bg-neutral-100 before:absolute before:content-normal before:bottom-0 before:w-1/2 before:bg-inherit before:right-1/2 before:skew-x-[40deg] before:pb-7 before:origin-[100%_100%] after:absolute after:content-normal after:bottom-0 after:w-1/2 after:bg-inherit after:left-1/2 after:-skew-x-[40deg] after:pb-7 after:origin-[100%_100%] md:before:w-10 md:before:h-1/2 md:before:top-0 md:before:bottom-auto md:before:right-auto md:before:skew-x-[0deg] md:before:-skew-y-[40deg] md:after:w-10 md:after:h-1/2 md:after:bottom-0 md:after:right-auto md:after:left-0 md:after:skew-x-[0deg] md:after:skew-y-[40deg] md:before:origin-[0%_0%] md:after:origin-[0%_0%]'>
            <img
              className='h-[380px] md:h-[460px] lg:h-[596px] w-full object-cover object-center'
              src='../images/alldecor.jpeg'
              alt=''
            />
          </div>
        </div>
        <div className='basis-[47.88%] flex items-center'>
          <div className='flex flex-col md:justify-center md:ml-auto pb-16 py-8 px-8 md:max-w-[410px] lg:max-w-[567px]'>
            <p className='text-xl md:text-3xl'>Spray-finish: </p>
            <h2 className='text-3xl md:text-4xl text-black font-bold mb-6'>Show off your individuality! </h2>
            <p className='text-lg'>
              Have fun with your doors and get them satin- or matte-finished spray-painted in any colour.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
