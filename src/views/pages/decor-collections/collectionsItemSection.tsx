import Link from 'next/link'
import React from 'react'

export default function CollectionsItemSection({ Data, Brand }: any) {
  // console.log(Brand)
  function CollectionItem() {
    return Brand.map((item: any, index: number) => {
      console.log(item)
      return (
        <div className='col-span-1 flex flex-col'>
          <div className='flex sm:flex-row flex-col sm:items-end'>
            <div className='sm:w-[60%]'>
              <img src={`https://api.xcuts.co.uk${item.main_image}`} alt='' className='w-full' />
            </div>
            <div className='relative py-5 pl-5 pr-10 before:border-solid before:border-t-[bg-transparent] before:border-r-[#fff] before:border-b-[#f82f45] before:border-l-[bg-transparent] before:border-t-0 sm:before:border-r-[40px] before:border-b-[72px] before:border-l-0 before:absolute before:w-full before:h-full before:-top-2 before:md:top-0 before:left-0 before:-z-10 sm:w-[40%] lg:bottom-10 bottom-0'>
              <h5 className='lg:text-xl text-base pr-8 font-semibold text-white whitespace-nowrap'>{item.name}</h5>
            </div>
          </div>
          <div className='xl:ml-16 lg:ml-12 ml:ml-8 ml-0 relative lg:-mt-10 h-full'>
            <div className='bg-white p-7 shadow-[0_10px_30px_0px_rgba(0,0,0,0.15)] h-full flex flex-col'>
              <p className='text-base text-[#5f5f5f] leading-7 mb-10'>{item.short_des}</p>
              <div className='flex sm:flex-row flex-col gap-y-4 sm:gap-y-0 sm:gap-x-4 mt-auto'>
                <Link
                  href={'/all-decors/' + item.slug}
                  className='text-base font-semibold text-black border border-primary lg:py-4 lg:px-6 md:py-4 md:px-3 py-4 px-6 block text-center hover:bg-primary hover:text-white transition-all'
                >
                  View More
                </Link>
                <Link
                  href={'/all-decors/' + item.slug}
                  className='text-base font-semibold text-black border border-black lg:py-4 lg:px-6 md:py-4 md:px-3 py-4 px-6 block text-center bg-black hover:text-black text-white hover:bg-white transition-all'
                >
                  Order Sample
                </Link>
              </div>
            </div>
          </div>
        </div>
      )
    })
  }
  function ProductItem() {
    // console.log(Brand)
    return Data.map((item: any, index: number) => {
      // console.log(item)
      return (
        <div className='col-span-1 flex flex-col'>
          <div className='flex sm:flex-row flex-col sm:items-end'>
            <div className='sm:w-[60%]'>
              <img src={`https://api.xcuts.co.uk${item.Texture?.image}`} alt='' className='w-full' />
            </div>
            <div className='relative py-5 pl-5 pr-10 before:border-solid before:border-t-[bg-transparent] before:border-r-[#fff] before:border-b-[#f82f45] before:border-l-[bg-transparent] before:border-t-0 sm:before:border-r-[40px] before:border-b-[72px] before:border-l-0 before:absolute before:w-full before:h-full before:-top-2 before:md:top-0 before:left-0 before:-z-10 sm:w-[40%] lg:bottom-10 bottom-0'>
              <h5 className='lg:text-xl text-base pr-8 font-semibold text-white'>{item.Brand}</h5>
            </div>
          </div>
          <div className='xl:ml-16 lg:ml-12 ml:ml-8 ml-0 relative lg:-mt-10 h-full'>
            <div className='bg-white p-7 shadow-[0_10px_30px_0px_rgba(0,0,0,0.15)] h-full flex flex-col'>
              <p className='text-base text-[#5f5f5f] leading-7 mb-10'>{item.B_side_description}</p>
              <div className='flex sm:flex-row flex-col gap-y-4 sm:gap-y-0 sm:gap-x-4 mt-auto'>
                <Link
                  href={'/all-decors/' + item.Brand}
                  className='text-base font-semibold text-black border border-primary lg:py-4 lg:px-6 md:py-4 md:px-3 py-4 px-6 block text-center hover:bg-primary hover:text-white transition-all'
                >
                  View More
                </Link>
                <Link
                  href={'/all-decors/' + item.Brand}
                  className='text-base font-semibold text-black border border-black lg:py-4 lg:px-6 md:py-4 md:px-3 py-4 px-6 block text-center bg-black hover:text-black text-white hover:bg-white transition-all'
                >
                  Order Sample
                </Link>
              </div>
            </div>
          </div>
        </div>
      )
    })
  }

  return (
    <>
      <div className='grid md:grid-cols-2 gap-x-10 gap-y-10 pb-20'>
        {/* <CollectionItem /> */}
        <ProductItem />
      </div>
    </>
  )
}
