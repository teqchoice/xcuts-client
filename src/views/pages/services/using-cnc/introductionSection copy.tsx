import React from 'react'

export default function IntroductionSection(props: any) {
  // console.log(Data)
  return (
    <>
      <section className='section-one-stop py-10 md:py-20'>
        <div className='px-4 sm:container'>
          <div className='text-center px-1 overflow-hidden'>
            <div className='text-2xl md:text-3xl mb-2'>Service for CNC Cutting</div>
            <div className='bg-black mx-6 md:mx-28 skew-y-[0] skew-x-[35deg] relative'>
              <div className='w-3 md:w-20 h-11 bg-primary absolute left-0 md:-left-24 bottom-0'></div>
              <div className='w-3 md:w-20 h-11 bg-primary absolute right-0 md:-right-24 top-0'></div>
              <h1 className='text-white text-xl/6 md:text-4xl font-bold -skew-x-[35deg] py-2 px-4'>
                Among other things we drill, shape, and groove!
              </h1>
            </div>
            <div className='flex flex-col gap-y-3 text-black-1d mt-10'>
              <p>
                We are one of the few businesses in the London region that offer customised CNC services, and at Xcuts
                our design team and CNC operators are all skilled professionals.
              </p>
              <p>
                Our CNC machine can cut components with odd shapes that would be nearly impossible to make without them.
                We can build single and numerous pieces with accuracy and precision thanks to a completely computerised
                interface.
              </p>
              <p>
                On the face of a panel, we can also drill holes and create grooves of any size. You may quickly and
                easily define the position for drilling hinge holes, library shelf holes, and other machining operations
                using our machining selection interface.
              </p>
              <p>
                Many of our clients utilise CNC routing to cut grooves into their panels, either to aid with joinery or
                as a creative way to mount LED strip lighting. When you have a more complicated work to accomplish, you
                can give us a drawing explaining your needs. We can convert a straightforward hand drawing into a
                CAD-based schematic that our machine can interpret. We deal with typical CAD files like.dwg,.dfx,
                and.dxf.
              </p>
              <p>For CNC projects, our lead times range from 5 to 6 working days.</p>
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
