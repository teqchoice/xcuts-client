import React from 'react'

export default function IntroductionSection(props: any) {
  // console.log(Data)
  return (
    <>
      <section className='section-one-stop py-10 md:py-20'>
        <div className='px-4 sm:container'>
          <div className='text-center px-1 overflow-hidden'>
            <div className='text-2xl md:text-3xl mb-2'>Cut to Size Boards</div>
            <div className='bg-black mx-6 md:mx-28 skew-y-[0] skew-x-[35deg] relative'>
              <div className='w-3 md:w-20 h-11 bg-primary absolute left-0 md:-left-24 bottom-0'></div>
              <div className='w-3 md:w-20 h-11 bg-primary absolute right-0 md:-right-24 top-0'></div>
              <h1 className='text-white text-xl/6 md:text-4xl font-bold -skew-x-[35deg] py-2 px-4'>
                You can rely on our cutting service.
              </h1>
            </div>
            <div className='flex flex-col gap-y-3 text-black-1d mt-10'>
              <p>
                Xcuts supplies and sizes a wide variety of plain and ornamental boards to satisfy the rising demand from
                the building, furniture manufacturing and interior design sectors. The most recent global design trends
                are represented in our board selections. We often cut to size a variety of materials on site, including
                MDF, veneered, and melamine-faced chipboard (MFC).
              </p>
              <p>
                We can assist you whether you are an expert looking for cut-to-size panels for a custom project or a DIY
                enthusiast looking for a single shelf. Full-size MDF and MFC boards can be difficult to handle, and
                accurate cutting of them is impossible without the use of industrial-grade machinery. No matter the
                sheet size, we clip boards on all four sides to produce a clean working edge with our cutting service,
                and all subsequent cuts are accurate and nearly chip-free.
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
