import React from 'react'

export default function ProductSection() {
  return (
    <section className='py-20'>
      <div className='px-4 sm:container max-w-full xl:px-16 xxl:px-32'>
        <div className='text-center'>
          <h2 className='font-normal text-5xl mb-14'>Our Products</h2>
        </div>

        <div className='flex md:flex-row flex-col space-y-4 md:space-y-0 md:space-x-4'>
          <div className='basis-[100%] md:basis-[33.333%] xl:basis-[40%]'>
            <div className='our__prdts__item relative overflow-hidden'>
              <img
                className='w-full h-96 md:h-[400px] xl:h-[709px] object-cover'
                src='images/our-product-01.webp'
                alt=''
              />
              <div className='pr-11'>
                <div className='prdts__itembox bg-neutral-600 pb-16 absolute -bottom-full transition-all duration-1000'>
                  <div className='pt-8 px-7'>
                    <h4 className='text-black font-bold text-2xl mb-6'>Sliding Doors</h4>
                    <p className='mb-4'>
                      We can produce a range of sliding wardrobe doors in bespoke sizes in under five working days.
                      Elegant, sturdy and well-priced.
                    </p>
                  </div>
                </div>
                <div className='flex gap-0 justify-end absolute bottom-0 right-0 pr-11'>
                  <a
                    href='#'
                    className='bg-primary px-3 py-4 md:px-6 md:py-4 font-bold text-base text-white hover:bg-black ease-in duration-200 flex items-center justify-between'
                  >
                    Find out more
                    <img className='w-2 ml-2' src='images/angle-arrow.webp' alt='' />
                  </a>
                  <a
                    href='#'
                    className='bg-black px-5 py-4 md:px-5 lg:px-6 lg:px-9 md:py-3 font-bold text-base text-white hover:bg-primary ease-in duration-200 flex items-center justify-between'
                  >
                    Shop
                    <img className='w-2 ml-2' src='images/angle-arrow.webp' alt='' />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='basis-[100%] md:basis-[33.333%] xl:basis-[30%]'>
            <div className='our__prdts__item relative overflow-hidden'>
              <img
                className='w-full h-96 md:h-[400px] xl:h-[709px] object-cover'
                src='images/our-product-02.webp'
                alt=''
              />
              <div className='pr-11'>
                <div className='prdts__itembox bg-neutral-600 pb-16 absolute -bottom-full transition-all duration-1000'>
                  <div className='pt-8 px-7'>
                    <h4 className='text-black font-bold text-2xl mb-6'>Sliding Doors</h4>
                    <p className='mb-4'>
                      We can produce a range of sliding wardrobe doors in bespoke sizes in under five working days.
                      Elegant, sturdy and well-priced.
                    </p>
                  </div>
                </div>
                <div className='flex gap-0 justify-end absolute bottom-0 right-0 pr-11'>
                  <a
                    href='#'
                    className='bg-primary px-3 py-4 md:px-6 md:py-4 font-bold text-base text-white hover:bg-black ease-in duration-200 flex items-center justify-between'
                  >
                    Find out more
                    <img className='w-2 ml-2' src='images/angle-arrow.webp' alt='' />
                  </a>
                  <a
                    href='#'
                    className='bg-black px-5 py-4 md:px-5 lg:px-6 lg:px-9 md:py-3 font-bold text-base text-white hover:bg-primary ease-in duration-200 flex items-center justify-between'
                  >
                    Shop
                    <img className='w-2 ml-2' src='images/angle-arrow.webp' alt='' />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='basis-[100%] md:basis-[33.333%] xl:basis-[30%]'>
            <div className='our__prdts__item relative overflow-hidden'>
              <img
                className='w-full h-96 md:h-[400px] xl:h-[709px] object-cover'
                src='images/our-product-03.webp'
                alt=''
              />
              <div className='pr-11'>
                <div className='prdts__itembox bg-neutral-600 pb-16 absolute -bottom-full transition-all duration-1000'>
                  <div className='pt-8 px-7'>
                    <h4 className='text-black font-bold text-2xl mb-6'>Sliding Doors</h4>
                    <p className='mb-4'>
                      We can produce a range of sliding wardrobe doors in bespoke sizes in under five working days.
                      Elegant, sturdy and well-priced.
                    </p>
                  </div>
                </div>
                <div className='flex gap-0 justify-end absolute bottom-0 right-0 pr-11'>
                  <a
                    href='#'
                    className='bg-primary px-3 py-4 md:px-4 md:py-4 font-bold text-base text-white hover:bg-black ease-in duration-200 flex items-center justify-between'
                  >
                    Find out more
                    <img className='w-2 ml-2' src='images/angle-arrow.webp' alt='' />
                  </a>
                  <a
                    href='#'
                    className='bg-black px-5 py-4 md:px-5 lg:px-6 lg:px-9 md:py-3 font-bold text-base text-white hover:bg-primary ease-in duration-200 flex items-center justify-between'
                  >
                    Shop
                    <img className='w-2 ml-2' src='images/angle-arrow.webp' alt='' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
