import React from 'react'

export default function Grooving(data, props: any) {
  // console.log(Data)
  return (
    <>
      <section>
        <div className='px-4 sm:container'>
          <div className=' flex justify-center items-center flex-col md:mt-20 mt-10'>
            <div className='text-center flex flex-col gap-3 md:max-w-[80%] max-w-full text-black mb-5'>
              <p className='text-3xl'>Gallery</p>
              <h4 className='md:text-[40px] text-2xl font-semibold mb-7'>
                {/* Legrabox Applications: */}
                {data?.data?.items[1]?.title}
              </h4>
              <p className='text-base text-black'>
                {/* The Legrabox selection is as diverse as the idea of home itself. Different colours, heights, nominal
                lengths, and load-bearing classifications are available for drawers, inner drawers, high fronted
                pull-outs, and inner pull-outs. */}
                {data?.data?.items[1]?.content}
              </p>

              <div className='flex md:flex-row flex-col gap-5 my-5 lg:my-10'>
                <div className='flex flex-col items-center gap-3'>
                  <img
                    className=' w-full object-cover object-center'
                    src={'/images/interior-fixtures/14-Legrabox Applications.jpg'}
                    alt=''
                  />
                </div>
                <div className='flex flex-col items-center gap-3'>
                  <img
                    className=' w-full object-cover object-center'
                    src={'/images/interior-fixtures/15-Legrabox Applications.jpg'}
                    alt=''
                  />
                </div>
                <div className='flex flex-col items-center gap-3'>
                  <img
                    className=' w-full object-cover object-center'
                    src={'/images/interior-fixtures/16-Legrabox Applications.jpg'}
                    alt=''
                  />
                </div>
                <div className='flex flex-col items-center gap-3'>
                  <img
                    className=' w-full object-cover object-center'
                    src={'/images/interior-fixtures/17-Legrabox Applications.jpg'}
                    alt=''
                  />
                </div>
                <div className='flex flex-col items-center gap-3'>
                  <img
                    className=' w-full object-cover object-center'
                    src={'/images/interior-fixtures/18-Legrabox Applications.jpg'}
                    alt=''
                  />
                </div>
              </div>
              <div className='flex justify-center'>
                <a
                  href='#'
                  className='bg-black px-5 py-4 md:px-5 lg:px-9 md:py-4 font-medium text-xl text-white hover:bg-primary ease-in duration-200 flex items-center justify-between'
                >
                  Purchase Legrabox Now <i className='ri-arrow-right-s-line text-xl'></i>{' '}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
