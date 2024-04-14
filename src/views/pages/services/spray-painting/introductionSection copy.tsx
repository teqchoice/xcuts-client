import React from 'react'

export default function IntroductionSection(props: any) {
  // console.log(Data)
  return (
    <>
      <section className='section-one-stop py-10 md:py-20'>
        <div className='px-4 sm:container'>
          <div className='text-center px-1 overflow-hidden'>
            <div className='text-2xl md:text-3xl mb-2'>Lacquering and Spray Painting</div>
            <div className='bg-black mx-6 md:mx-28 skew-y-[0] skew-x-[35deg] relative'>
              <div className='w-3 md:w-20 h-11 bg-primary absolute left-0 md:-left-24 bottom-0'></div>
              <div className='w-3 md:w-20 h-11 bg-primary absolute right-0 md:-right-24 top-0'></div>
              <h1 className='text-white text-xl/6 md:text-4xl font-bold -skew-x-[35deg] py-2 px-4'>
                Excellent quality and unbeatably practical!
              </h1>
            </div>
            <div className='flex flex-col gap-y-3 text-black-1d mt-10'>
              <p>
                Why not apply a factory spray finish to your panels after we have cut, edged, and drilled them? Three
                alternative spray coating options are available using our online system at Xcuts: white primer, clear
                lacquer, and any shade of paint. Any panel in the cutting list can have one side, two sides, or just a
                return sprayed on it by clicking a button. Real-time price calculation enables you to decide quickly
                before placing an order. We manually spray in a pressurised spray booth or employ an automated
                spray-coating system, which enables us to consistently provide a flawless finish.
              </p>
              <p>
                According to your request, we may spray the panels to a matt or satin degree of sheen. We deal with PU
                paint and lacquers and can colour-match to any RAL hue or colours of any illustrious paint companies,
                such as Farrow & Ball, Zoffany, and others.
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
