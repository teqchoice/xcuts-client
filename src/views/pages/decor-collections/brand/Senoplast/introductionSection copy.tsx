import React from 'react'

export default function IntroductionSection(props: any) {
  // console.log(Data)
  return (
    <>
      <section className='section-one-stop py-10 md:py-20'>
        <div className='px-4 sm:container'>
          <div className='text-center px-1 overflow-hidden'>
            <div className='text-2xl md:text-3xl mb-2'>SENOPLAST</div>
            <div className='bg-black mx-6 md:mx-28 skew-y-[0] skew-x-[35deg] relative'>
              <div className='w-3 md:w-20 h-11 bg-primary absolute left-0 md:-left-24 bottom-0'></div>
              <div className='w-3 md:w-20 h-11 bg-primary absolute right-0 md:-right-24 top-0'></div>
              <h1 className='text-white text-xl/6 md:text-4xl font-bold -skew-x-[35deg] py-2 px-4'>INSPIRATION HUB</h1>
            </div>
            <div className='flex flex-col gap-y-3 text-black-1d mt-10'>
              <p>
                Founded by Wilhelm Klepsch in 1958, Senoplast revolutionized the use of plastics in the furniture
                industry by developing a method to recycle plastics into high-quality furniture parts and decorative
                boards. As one of the first companies to produce co-extruded sheets, Senoplast has made significant
                strides as a green manufacturer, paving the way for sustainable, high-end decor panels.
              </p>
              <p>
                With production plants in Austria, Mexico (serving the NAFTA region), and China (serving the Asian
                market), Senoplast continues its mission to be the global leader in co-extruded plastic sheets and films
                for premium applications.
              </p>
              <p>Browse the range today to find eco-friendly and sophisticated décor solutions for your projects!</p>
            </div>
            <div className='flex justify-center gap-4 mt-10'>
              <a
                href='#'
                className='bg-black px-5 py-4 md:px-5 lg:px-6 lg:px-9 md:py-4 font-medium text-xl text-white hover:bg-primary ease-in duration-200 flex items-center justify-between'
              >
                See our Décor Selections<i className='ri-arrow-right-s-line text-xl'></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
