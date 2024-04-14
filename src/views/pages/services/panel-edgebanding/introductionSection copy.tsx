import React from 'react'

export default function IntroductionSection(props: any) {
  // console.log(Data)
  return (
    <>
      <section className='section-one-stop py-10 md:py-20'>
        <div className='px-4 sm:container'>
          <div className='text-center px-1 overflow-hidden'>
            <div className='text-2xl md:text-3xl mb-2'>Expertly Edged Panels</div>
            <div className='bg-black mx-6 md:mx-28 skew-y-[0] skew-x-[35deg] relative'>
              <div className='w-3 md:w-20 h-11 bg-primary absolute left-0 md:-left-24 bottom-0'></div>
              <div className='w-3 md:w-20 h-11 bg-primary absolute right-0 md:-right-24 top-0'></div>
              <h1 className='text-white text-xl/6 md:text-4xl font-bold -skew-x-[35deg] py-2 px-4'>
                Excellent adherence and flawless finish.
              </h1>
            </div>
            <div className='flex flex-col gap-y-3 text-black-1d mt-10'>
              <p>
                Our edge banding equipment uses PUR glue, which seals the edge and offers great tape-to-panel adhesion
                while preventing water infiltration. The machines also contain a near-infrared laser gluing station that
                enables the application of special edging tape that conceals any apparent joint lines.
              </p>
              <p>
                Straight panels with an edge band can be as short as 30mm in length and as narrow as 20mm in width. Edge
                band panels with an angled cut are also an option. 60mm in height is the thickest panel that we can use
                edge tape on.
              </p>
              <p>
                In each of the aforementioned situations, we will adjust the machine to the décor board so that the edge
                tape exactly matches the panel.
              </p>
            </div>
            <div className='flex justify-center gap-4 mt-10'>
              <a
                href='#'
                className='bg-black px-5 py-4 md:px-5 lg:px-6 lg:px-9 md:py-4 font-medium text-xl text-white hover:bg-primary ease-in duration-200 flex items-center justify-between'
              >
                Explore Our Edge Banding Service in More Detail <i className='ri-arrow-right-s-line text-xl'></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
