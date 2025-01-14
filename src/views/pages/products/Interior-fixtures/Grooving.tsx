import React from 'react'

export default function Grooving(data, props: any) {
  // console.log(Data)
  return (
    <>
      <section>
        <div className='px-4 sm:container'>
          <div className=' flex justify-center items-center flex-col md:mt-20 mt-10'>
            <div className='text-center flex flex-col gap-3 md:max-w-[80%] max-w-full text-black mb-5'>
              <p className='text-3xl'>Panel Grooving</p>
              <h4 className='md:text-5xl text-4xl font-semibold mb-7'>
                {/* Movento Range Applications: */}
                {data?.data?.items[0]?.title}
              </h4>
              <p className='text-base text-black'>
                {data?.data?.items[0]?.content}
                {/* The Movento’s line is synchronised, with ultra-light glide and weight carrying capacity of 40 and 60 kg
                which is exceptionally impressive. Base installation allows you to attach it to the shelf or base of the
                cabinet, and full extension provsynchronised, with ultra-light glide and weight carrying capacity of 40 and 60 kg
                which is exceptionally impressive. Base installation allows you to attach it to the shelf or base of the
                cabinet, and full extension provides you complete access to the very back of drawers. */}
              </p>

              <div className='flex md:flex-row flex-col gap-5 my-5 lg:my-10'>
                <div className='flex flex-col items-center gap-3'>
                  <img className=' w-full object-cover object-center' src={data?.data?.items[0]?.poster_url} alt='' />
                </div>
                <div className='flex flex-col items-center gap-3'>
                  <img className=' w-full object-cover object-center' src={data?.data?.items[0]?.poster_url} alt='' />
                </div>
                <div className='flex flex-col items-center gap-3'>
                  <img className=' w-full object-cover object-center' src={data?.data?.items[0]?.poster_url} alt='' />
                </div>
              </div>
              <div className='flex justify-center'>
                <a
                  href='#'
                  className='bg-black px-5 py-4 md:px-5 lg:px-9 md:py-4 font-medium text-xl text-white hover:bg-primary ease-in duration-200 flex items-center justify-between'
                >
                  Order Movento Right Away <i className='ri-arrow-right-s-line text-xl'></i>{' '}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
