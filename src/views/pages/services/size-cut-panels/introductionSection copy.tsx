import React from 'react'

export default function IntroductionSection(props: any) {
  // console.log(Data)
  return (
    <>
      <section className='section-one-stop py-10 md:py-20'>
        <div className='px-4 sm:container'>
          <div className='text-center px-1 overflow-hidden'>
            <div className='text-2xl md:text-3xl mb-2'>Boards Cut to Size</div>
            <div className='bg-black mx-6 md:mx-28 skew-y-[0] skew-x-[35deg] relative'>
              <div className='w-3 md:w-20 h-11 bg-primary absolute left-0 md:-left-24 bottom-0'></div>
              <div className='w-3 md:w-20 h-11 bg-primary absolute right-0 md:-right-24 top-0'></div>
              <h1 className='text-white text-xl/6 md:text-4xl font-bold -skew-x-[35deg] py-2 px-4'>
                Get the best in board cutting service from us.
              </h1>
            </div>
            <div className='flex flex-col gap-y-3 text-black-1d mt-10'>
              <p>
                XCuts supplies a massive variety of boards from trusted brands, including MDF and veneered boards from
                Medite and Finsa, MFC boards from Egger and Kronospan, and Plywood boards from [brand name]. We ensure
                that all boards that come into our workshop are thoroughly checked to verify that they are up to our
                high standards and ready to cut to your specifications.
              </p>
              <p>
                We have the experience and capabilities to provide you with a second-to-none board cut-to-size service
                that consistently produces accurate panels, a clean edge, and a quick turnaround time.
              </p>
              <p>
                Our board-cutting service is available to all— furniture makers, interior designers, builders, or even
                DIYers looking to do their projects at home.
              </p>
            </div>
            <div className='flex justify-center gap-4 mt-10'>
              <a
                href='#'
                className='bg-black px-5 py-4 md:px-5 lg:px-6 lg:px-9 md:py-4 font-medium text-xl text-white hover:bg-primary ease-in duration-200 flex items-center justify-between'
              >
                See our Décor Selections <i className='ri-arrow-right-s-line text-xl'></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
