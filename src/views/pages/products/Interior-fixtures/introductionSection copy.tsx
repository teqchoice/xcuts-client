import React from 'react'

export default function IntroductionSection(data, props: any) {
  // console.log(Data)
  return (
    <>
      <section className='section-one-stop py-10 md:py-20'>
        <div className='px-4 sm:container'>
          <div className='text-center px-1 overflow-hidden'>
            <div className='text-2xl md:text-3xl mb-2'>
              {/* Elements for your Projects */}
              {data?.data?.intro_top_title}
            </div>
            <div className='bg-black mx-6 md:mx-28 skew-y-[0] skew-x-[35deg] relative'>
              <div className='w-3 md:w-20 h-11 bg-primary absolute left-0 md:-left-24 bottom-0'></div>
              <div className='w-3 md:w-20 h-11 bg-primary absolute right-0 md:-right-24 top-0'></div>
              <h1 className='text-white text-xl/6 md:text-4xl font-bold -skew-x-[35deg] py-2 px-4'>
                {/* Fast, handy, and reasonably priced! */}
                {data?.data?.intro_title}
              </h1>
            </div>
            <div className='flex flex-col gap-y-3 text-black-1d mt-10'>
              {/* <p>Why not order everything from us rather than sourcing components from several vendors?</p> */}
              <p dangerouslySetInnerHTML={{ __html: data?.data?.intro_content }}>
                {/* With the intention of serving both DIY enthusiasts and professionals such as carpenters, cabinetmakers,
                builders, and similar tradespeople, Xcuts was founded. We now offer Blum furniture fittings, a brand
                renowned for its high standards of quality, dependability, and product innovation. Each product includes
                links to the product page on the manufacturer's website as well as technical and installation drawings.
                Furniture fittings may be ordered over the phone or online. */}
              </p>
              {/* <p>With time, we'll broaden our customers selection by incorporating additional fittings and brands.</p> */}
            </div>
            {/* <div className='flex justify-center gap-4 mt-10'>
              <a
                href='#'
                className='bg-black px-5 py-4 md:px-5 lg:px-6 lg:px-9 md:py-4 font-medium text-xl text-white hover:bg-primary ease-in duration-200 flex items-center justify-between'
              >
                See our Décor Selections <i className='ri-arrow-right-s-line text-xl'></i>
              </a>
            </div> */}
          </div>
        </div>
      </section>
    </>
  )
}
