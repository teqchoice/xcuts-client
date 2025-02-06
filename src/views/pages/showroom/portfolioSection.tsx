import React from 'react'

export default function PortfolioSection() {
  return (
    <section>
      <div className='bg-neutral-100 md:flex'>
        <div className='basis-[52.12%] order-1'>
          <div className='relative overflow-hidden w-full bg-neutral-100 before:absolute before:content-normal before:bottom-0 before:w-1/2 before:bg-inherit before:right-1/2 before:skew-x-[40deg] before:pb-7 before:origin-[100%_100%] after:absolute after:content-normal after:bottom-0 after:w-1/2 after:bg-inherit after:left-1/2 after:-skew-x-[40deg] after:pb-7 after:origin-[100%_100%] md:before:w-10 md:before:h-1/2 md:before:top-0 md:before:bottom-auto md:before:right-auto md:before:skew-x-[0deg] md:before:-skew-y-[40deg] md:after:w-10 md:after:h-1/2 md:after:bottom-0 md:after:right-auto md:after:left-0 md:after:skew-x-[0deg] md:after:skew-y-[40deg] md:before:origin-[0%_0%] md:after:origin-[0%_0%]'>
            <img
              className='h-[380px] md:h-[460px] lg:h-[596px] w-full object-cover object-center'
              src='/images/showroom-1.jpeg'
              alt=''
            />
          </div>
        </div>
        <div className='basis-[47.88%] flex items-center'>
          <div className='flex flex-col md:justify-center md:ml-auto pb-16 py-8 px-4 md:max-w-[410px] lg:max-w-[567px] lg:pr-16'>
            <p className='text-black text-3xl mb-1'>A feeling of the senses!</p>
            <h2 className='text-3xl md:text-4xl lg:text-5xl text-black font-bold mb-6'>DISCOVER</h2>
            <p className='text-xl'>
              Learn more about our newest decors, what makes them special, and try to picture them in your environment.{' '}
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
                src='/images/showroom-1.jpeg'
                alt=''
              />
            </div>
          </div>
        </div>
        <div className='basis-[47.88%] flex items-center'>
          <div className='flex flex-col md:justify-center md:mr-auto pb-16 py-8 px-4 md:max-w-[410px] lg:max-w-[567px] lg:pl-16'>
            <p className='text-black text-3xl mb-1'>How can we assist?</p>
            <h2 className='text-3xl md:text-4xl lg:text-5xl text-black font-bold mb-6'>ENGAGE</h2>
            <p className='text-xl'>
              Speak with a member of our sales staff to learn more about our decors, goods, and services. We'll assist
              you in simplifying your work.
            </p>
          </div>
        </div>
      </div>
      <div className='bg-neutral-100 md:flex'>
        <div className='basis-[52.12%] order-1'>
          <div className='relative overflow-hidden w-full bg-neutral-100 before:absolute before:content-normal before:bottom-0 before:w-1/2 before:bg-inherit before:right-1/2 before:skew-x-[40deg] before:pb-7 before:origin-[100%_100%] after:absolute after:content-normal after:bottom-0 after:w-1/2 after:bg-inherit after:left-1/2 after:-skew-x-[40deg] after:pb-7 after:origin-[100%_100%] md:before:w-10 md:before:h-1/2 md:before:top-0 md:before:bottom-auto md:before:right-auto md:before:skew-x-[0deg] md:before:-skew-y-[40deg] md:after:w-10 md:after:h-1/2 md:after:bottom-0 md:after:right-auto md:after:left-0 md:after:skew-x-[0deg] md:after:skew-y-[40deg] md:before:origin-[0%_0%] md:after:origin-[0%_0%]'>
            <img
              className='h-[380px] md:h-[460px] lg:h-[596px] w-full object-cover object-center'
              src='/images/showroom-1.jpeg'
              alt=''
            />
          </div>
        </div>
        <div className='basis-[47.88%] flex items-center'>
          <div className='flex flex-col md:justify-center md:ml-auto pb-16 py-8 px-4 md:max-w-[410px] lg:max-w-[567px] lg:pr-16'>
            <p className='text-black text-3xl mb-1'>Easy access to convenience</p>
            <h2 className='text-3xl md:text-4xl lg:text-5xl text-black font-bold mb-6'>PROCURE</h2>
            <p className='text-xl'>
              You may explore decors, submit your cutting list, and place your purchase right away using our ordering
              stations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
