import React from 'react'

export default function IntroductionSection(props: any) {
  // console.log(Data)
  return (
    <>
      <section className='section-one-stop py-10 md:py-20'>
        <div className='px-4 sm:container'>
          <div className='text-center px-1 overflow-hidden'>
            <div className='text-2xl md:text-3xl mb-2'>Panel Lacquering and Spray Painting</div>
            <div className='bg-black mx-6 md:mx-28 skew-y-[0] skew-x-[35deg] relative'>
              <div className='w-3 md:w-20 h-11 bg-primary absolute left-0 md:-left-24 bottom-0'></div>
              <div className='w-3 md:w-20 h-11 bg-primary absolute right-0 md:-right-24 top-0'></div>
              <h1 className='text-white text-xl/6 md:text-4xl font-bold -skew-x-[35deg] py-2 px-4'>
                A perfect finish for your furniture panels
              </h1>
            </div>
            <div className='flex flex-col gap-y-3 text-black-1d mt-10'>
              <p>
                After cutting, edging, and drilling your panels, consider enhancing them with a professional spray
                finish. Through us, you can select from three spray coating options: white primer, clear lacquer, or any
                custom colour. Easily specify whether you want one side, two sides, or just a return sprayed for any
                panel in your cutting list with real-time pricing, allowing for quick decisions before ordering.
              </p>
              <p>
                Our spray finishing process includes meticulous hand application in a pressurised spray booth or
                automated spray-coating line, ensuring a flawless result. Panels are sanded between coats and
                individually wrapped in craft paper for protection during transportation.
              </p>
              <p>
                We use PU paints and lacquers, offering colour-matching to any RAL colour or major paint brands like
                Farrow & Ball and Dulex. Per your preference, panels can be finished to a matte or satin sheen level.{' '}
              </p>
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
