import React from 'react'

export default function IntroductionSection(props: any) {
  // console.log(Data)
  return (
    <>
      <section className='section-one-stop py-10 md:py-20'>
        <div className='px-4 sm:container'>
          <div className='text-center px-1 overflow-hidden'>
            <div className='text-2xl md:text-3xl mb-2'>We Will Help From A-Z</div>
            <div className='bg-black mx-6 md:mx-28 skew-y-[0] skew-x-[35deg] relative'>
              <div className='w-3 md:w-20 h-11 bg-primary absolute left-0 md:-left-24 bottom-0'></div>
              <div className='w-3 md:w-20 h-11 bg-primary absolute right-0 md:-right-24 top-0'></div>
              <h1 className='text-white text-xl/6 md:text-4xl font-bold -skew-x-[35deg] py-2 px-4'>
                Swatches. Promotions. Samples.
              </h1>
            </div>
            <div className='flex flex-col gap-y-3 text-black-1d mt-10'>
              <p>
                Choosing the right colour or style for your board product can feel overwhelming with so many options
                available today. It's essential to touch and feel the product before making a decision, especially with
                the numerous textures and finishes that melamine board producers offer.
              </p>
              <p>
                At XCUTS, we make it easy for you to order swatches and samples. Simply click the button below to
                explore a variety of textures and styles. Manufacturers, importers, and distributors often supply
                samples, and we make them accessible for you whenever possible.
              </p>
              <p>
                Visit our Decor Collections page to order your individual samples and explore our ongoing promotions
                below for nearly every decor collection we carry.
              </p>
            </div>
            <div className='flex justify-center gap-4 mt-10'>
              <a
                href='#'
                className='bg-black px-5 py-4 md:px-5 lg:px-6 lg:px-9 md:py-4 font-medium text-xl text-white hover:bg-primary ease-in duration-200 flex items-center justify-between'
              >
                Order Your Swatches and Samples Now<i className='ri-arrow-right-s-line text-xl'></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
