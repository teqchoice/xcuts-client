import React from 'react'

export default function IntroductionSection(props: any) {
  // console.log(Data)
  return (
    <>
      <section className='section-one-stop py-10 md:py-20'>
        <div className='px-4 sm:container'>
          <div className='text-center px-1 overflow-hidden'>
            <div className='text-2xl md:text-3xl mb-2'>SAVIOLA</div>
            <div className='bg-black mx-6 md:mx-28 skew-y-[0] skew-x-[35deg] relative'>
              <div className='w-3 md:w-20 h-11 bg-primary absolute left-0 md:-left-24 bottom-0'></div>
              <div className='w-3 md:w-20 h-11 bg-primary absolute right-0 md:-right-24 top-0'></div>
              <h1 className='text-white text-xl/6 md:text-4xl font-bold -skew-x-[35deg] py-2 px-4'>INSPIRATION HUB</h1>
            </div>
            <div className='flex flex-col gap-y-3 text-black-1d mt-10'>
              <p>
                Founded in 1963, The Saviola Group has become a global leader in the chipboard manufacturing industry.
                In 1981, Saviola revolutionized the world of decorative boards by developing melamine-faced panels,
                providing high-quality substitutes for traditional wood and stone surfaces. This innovation made Saviola
                a pivotal force in the furniture industry, delivering aesthetically pleasing and functional decorative
                solutions.
              </p>
              <p>
                Driven by a commitment to environmental sustainability, Saviola took a groundbreaking step in 1997,
                becoming the first to rely entirely on recycled materials for board production. Through large-scale
                recycling programmes, they now recycle 1.2 million tonnes of post-consumer wood annually, transforming
                waste into 100% recycled wood chipboard.
              </p>
              <p>
                Saviola's commitment to eco-friendly manufacturing continues to drive innovation in sustainable
                decorative boards. Explore their collection and see how Saviola brings together stunning design and
                sustainability.
              </p>
            </div>
            <div className='flex justify-center gap-4 mt-10'>
              <a
                href='#'
                className='bg-black px-5 py-4 md:px-5 lg:px-6 lg:px-9 md:py-4 font-medium text-xl text-white hover:bg-primary ease-in duration-200 flex items-center justify-between'
              >
                See our Décor Selections
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
