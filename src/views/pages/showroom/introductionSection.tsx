import React from 'react'

export default function IntroductionSection() {
  return (
    <section className='section-one-stop py-10 md:py-20'>
      <div className='px-4 sm:container'>
        <div className='text-center px-1 overflow-hidden'>
          <div className='text-2xl md:text-4xl mb-2'>WELCOME TO OUR XCUTS SHOWROOM!</div>
          <div className='bg-black mx-6 md:mx-28 skew-y-[0] skew-x-[35deg] relative'>
            <div className='w-3 md:w-20 h-11 bg-primary absolute left-0 md:-left-24 bottom-0'></div>
            <div className='w-3 md:w-20 h-11 bg-primary absolute right-0 md:-right-24 top-0'></div>
            <h1 className='text-white text-xl/6 md:text-5xl font-bold -skew-x-[35deg] py-2 uppercase px-4'>
              Visit Our Showroom in Hatfield
            </h1>
          </div>
          <div className='flex flex-col max-w-5xl mx-auto gap-y-3 text-black-1d mt-10'>
            <p>
              Our Hatfield showroom is the largest among our competitors, featuring the complete collection of our
              decors. Experience the full range of colors, textures, and finishes firsthand to better visualize your
              projects. We warmly welcome all tradespeople, including DIY enthusiasts, interior designers, furniture
              manufacturers, and carpenters. Come and explore the possibilities with us
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
