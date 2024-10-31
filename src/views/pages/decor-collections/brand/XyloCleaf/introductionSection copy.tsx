import React from 'react'

export default function IntroductionSection(props: any) {
  // console.log(Data)
  return (
    <>
      <section className='section-one-stop py-10 md:py-20'>
        <div className='px-4 sm:container'>
          <div className='text-center px-1 overflow-hidden'>
            <div className='text-2xl md:text-3xl mb-2'>XYLOLEAF</div>
            <div className='bg-black mx-6 md:mx-28 skew-y-[0] skew-x-[35deg] relative'>
              <div className='w-3 md:w-20 h-11 bg-primary absolute left-0 md:-left-24 bottom-0'></div>
              <div className='w-3 md:w-20 h-11 bg-primary absolute right-0 md:-right-24 top-0'></div>
              <h1 className='text-white text-xl/6 md:text-4xl font-bold -skew-x-[35deg] py-2 px-4'>INSPIRATION HUB</h1>
            </div>
            <div className='flex flex-col gap-y-3 text-black-1d mt-10'>
              <p>
                In 2012, the Italian company Cleaf partnered with XyloFlooring, launching XyloCleaf as a premier
                decorative board brand in the UK market. With roots established in the 1970s, Cleaf is renowned in the
                global interior design industry, operating four production lines in Brianza, Italy—a district famous for
                its furniture design and production.
              </p>
              <p>
                In keeping with global trends, Egger constantly creates new surfaces and decors, advances technological
                advancements, and continuously enhances goods while streamlining workflows.
              </p>
              <p>
                Egger is a well-known brand in the UK for its decorative surface products, particularly for providing
                the furniture and interior design industries with premium melamine faced board materials.
              </p>
            </div>
            {/* <div className='flex justify-center gap-4 mt-10'>
              <a
                href='#'
                className='bg-black px-5 py-4 md:px-5 lg:px-6 lg:px-9 md:py-4 font-medium text-xl text-white hover:bg-primary ease-in duration-200 flex items-center justify-between'
              >
                See our Décor Selections<i className='ri-arrow-right-s-line text-xl'></i>
              </a>
            </div> */}
          </div>
        </div>
      </section>
    </>
  )
}
