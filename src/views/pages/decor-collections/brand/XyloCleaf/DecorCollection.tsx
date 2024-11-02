import React from 'react'

export default function ABSEdgebandSection(props: any) {
  // console.log(Data)
  return (
    <>
      <section>
        <div className='px-4 sm:container'>
          <div className=' flex justify-center items-center flex-col'>
            <div className='text-center  max-w-[80%] text-black mb-5 mt-20'>
              <p className='text-base text-black'>
                Discover and select the perfect décor for your next project with ease. Start compiling your shopping
                list today .Enjoy instant quotations without the need to open an account.
              </p>
            </div>

            <div className=' pb-32 text-center flex justify-center'>
              <a
                href='#'
                className='bg-black  px-3 py-4 md:px-5  lg:px-9 md:py-4 font-medium text-lg md:text-2xl text-white hover:bg-primary ease-in duration-200 flex items-center justify-between'
              >
                View Decors
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
