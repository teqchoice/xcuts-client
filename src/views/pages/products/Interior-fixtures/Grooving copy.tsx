import React from 'react'

export default function Grooving(props: any) {
  // console.log(Data)
  return (
    <>
      <section>
        <div className='px-4 sm:container'>
          <div className=' flex justify-center items-center flex-col mt-20'>
            <div className='text-center flex flex-col gap-3 max-w-[80%] text-black mb-5'>
              <p className='text-3xl'>Panel Grooving</p>
              <h4 className='md:text-[40px] text-2xl font-semibold mb-7'>Movento Range Applications:</h4>
              <p className='text-base text-black'>
                The Movento’s line is synchronised, with ultra-light glide and weight carrying capacity of 40 and 60 kg
                which is exceptionally impressive. Base installation allows you to attach it to the shelf or base of the
                cabinet, and full extension provides you complete access to the very back of drawers.
              </p>

              <div className='flex gap-5 my-5 lg:my-10'>
                <div className='flex flex-col items-center gap-3'>
                  <img className=' w-full object-cover object-center' src='/images/alldecor.jpeg' alt='' />
                  <h4 className='font-bold text-lg'>Gallery</h4>
                  <p>To cover up your LED strip and cables invisibly, have a recess carved into your panel.</p>
                </div>
                <div className='flex flex-col items-center gap-3'>
                  <img className=' w-full object-cover object-center' src='/images/alldecor.jpeg' alt='' />
                  <h4 className='font-bold text-lg'>Back Panel</h4>
                  <p>To make it simple to slot in your base, grooves can be carved into the drawer sides.</p>
                </div>
                <div className='flex flex-col items-center gap-3'>
                  <img className=' w-full object-cover object-center' src='/images/alldecor.jpeg' alt='' />
                  <h4 className='font-bold text-lg'>Ornamental</h4>
                  <p>By using ornamental grooves, you may give your MDF or plywood a more upscale appearance.</p>
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
