import React from 'react'
import MiddleRedTitle from '@/views/pages/components/middleRedTitle'

export default function SecoundPortfolio() {
  return (
    <section className='overflow-hidden mb-10'>
      <MiddleRedTitle title={'Shaker-style door examples include:'} />
      <div className='px-4 sm:container'>
        <div className='relative mb-6'>
          <img src='../images/alldecor.jpeg' alt='' className='w-full' />
          <div className='px-5 py-6 md:px-10 md:py-9 bg-[#f3f3f3] md:absolute md:bottom-0 md:w-[600px] lg:w-[503px]'>
            <p className='text-xl md:text-3xl text-black'>Colour mixtures can be used to</p>
            <h4 className='text-2xl md:text-4xl text-black font-bold mb-3'>create depth+ a two-tone appearance!</h4>
            {/* <p className='text-base md:text-lg text-black'>Profile: Supreme</p> */}
            {/* <p className='text-base md:text-lg text-black'>Profile colour: Satin Silver</p> */}
            {/* <p className='text-base md:text-lg text-black'>Panels: Aubergine glass & Pure White glass</p> */}
          </div>
        </div>
        <div className='relative mb-6'>
          <img src='../images/alldecor.jpeg' alt='' className='w-full' />
          <div className='px-5 py-6 md:px-10 md:py-9 bg-[#f3f3f3] md:absolute md:right-0 md:bottom-0 md:w-[600px] lg:w-[503px]'>
            <p className='text-xl md:text-3xl text-black'>A fresh touch on a vintage style.</p>
            <h4 className='text-2xl md:text-4xl text-black font-bold mb-3'>Lavish Living Lifestyle!</h4>
            {/* <p className='text-base md:text-lg text-black'>Profile: Supreme</p> */}
            {/* <p className='text-base md:text-lg text-black'>Profile colour: Champagne</p> */}
            {/* <p className='text-base md:text-lg text-black'>Panels: Egger H3082 ST22 Amazonas decor & Grey mirror</p> */}
          </div>
        </div>
        <div className='relative mb-6'>
          <img src='../images/alldecor.jpeg' alt='' className='w-full' />
          <div className='px-5 py-6 md:px-10 md:py-9 bg-[#f3f3f3] md:absolute md:bottom-0 md:w-[600px] lg:w-[503px]'>
            <p className='text-xl md:text-3xl text-black'>Select hues that command attention.</p>
            <h4 className='text-2xl md:text-4xl text-black font-bold mb-3'>Shake things up!</h4>
            {/* <p className='text-base md:text-lg text-black'>Profile: Supreme</p> */}
            {/* <p className='text-base md:text-lg text-black'>Profile colour: Satin Silver</p> */}
            {/* <p className='text-base md:text-lg text-black'>Panels: Silver mirror</p> */}
          </div>
        </div>
        <div className='text-center mb-7 mt-2'>
          <button className='text-2xl md:text-4xl'>And some more...</button>
        </div>
      </div>
    </section>
  )
}
