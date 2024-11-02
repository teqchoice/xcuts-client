import React from 'react'

export default function IntroductionSection(props: any) {
  // console.log(Data)
  return (
    <>
      <section className='section-one-stop py-10 md:py-20'>
        <div className='px-4 sm:container'>
          <div className='text-center px-1 overflow-hidden'>
            <div className='text-2xl md:text-3xl mb-2'>LUXURY WITH A SUSTAINABLE EDGE!</div>
            <div className='bg-black mx-6 md:mx-28 skew-y-[0] skew-x-[35deg] relative'>
              <div className='w-3 md:w-20 h-11 bg-primary absolute left-0 md:-left-24 bottom-0'></div>
              <div className='w-3 md:w-20 h-11 bg-primary absolute right-0 md:-right-24 top-0'></div>
              <h1 className='text-white text-xl/6 md:text-4xl font-bold -skew-x-[35deg] py-2 px-4'>
                SERICA UK DÉCOR COLLECTION
              </h1>
            </div>
            <div className='flex flex-col gap-y-3 text-black-1d mt-10'>
              <p>
                Serica, now available in the UK, offers a collection of premium super-matt decorative panels that bring
                modern elegance to any interior. These panels, produced using advanced thermoplastic technology, stand
                out due to their luxurious velvety feel and anti-scratch, anti-fingerprint properties.
              </p>
              <p>
                Perfect for those seeking style and durability, Serica's innovative foils are made from 100% recycled
                materials, contributing to eco-friendly, sustainable decor solutions. With a wide range of colours and
                finishes, Serica is the ultimate choice for eco-conscious designers and homeowners.
              </p>
            </div>
            <div className='flex justify-center gap-4 mt-10'>
              <a
                href='#'
                className='bg-black px-5 py-4 md:px-5 lg:px-6 lg:px-9 md:py-4 font-medium text-xl text-white hover:bg-primary ease-in duration-200 flex items-center justify-between'
              >
                BROWSE AND BUY
              </a>
            </div>
          </div>
          <div className='text-center px-1 overflow-hidden mt-5'>
            <div className='text-2xl md:text-3xl mb-2'>GRACEFUL AND MINIMALISTIC</div>
            <div className='bg-black mx-6 md:mx-28 skew-y-[0] skew-x-[35deg] relative'>
              <div className='w-3 md:w-20 h-11 bg-primary absolute left-0 md:-left-24 bottom-0'></div>
              <div className='w-3 md:w-20 h-11 bg-primary absolute right-0 md:-right-24 top-0'></div>
              <h1 className='text-white text-xl/6 md:text-4xl font-bold -skew-x-[35deg] py-2 px-4'>
                SERICA UK DÉCOR COLLECTION
              </h1>
            </div>
            <div className='flex flex-col gap-y-3 text-black-1d mt-10'>
              <p>
                Serica’s UK collection includes twelve elegant super-matt décor options, laminated on both sides of MDF
                core boards, offering unmatched quality. This carefully curated neutral palette complements a wide range
                of applications, from sleek kitchen cabinetry to minimalist living room furnishings, blending
                effortlessly with any interior style.
              </p>
              <p>Alfatherm’s Serica range stands out due to its unique combination of features, including:</p>
              <p className='text-left lg:ml-10'>
              •	Super-Matt Finish: Provides a velvety, low-light reflective surface.<br/>
              •	Durability: Resistant to scratches, fingerprints, and stains.<br/>
              •	Dual-Sided Lamination: Ensures both sides of the board maintain the same premium quality.

              </p>
            </div>
            <div className='flex justify-center gap-4 mt-10'>
              <a
                href='#'
                className='bg-black px-5 py-4 md:px-5 lg:px-6 lg:px-9 md:py-4 font-medium text-xl text-white hover:bg-primary ease-in duration-200 flex items-center justify-between'
              >
                BROWSE AND BUY
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
