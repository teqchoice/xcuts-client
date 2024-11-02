import React from 'react'

export default function VideoSection(props: any) {
  // console.log(Data)
  return (
    <section className='py-20 relative bg-primary rounded-xl'>
      <div className='px-4 sm:container'>
        <div className='text-center text-white relative'>
          <p className='lg:text-3xl text-2l'>RICH COLOURS JUST FOR YOUR FURNITURE!</p>
          <h4 className='lg:text-5xl md:text-3xl text-2xl font-semibold'>SENOPLAST UK DÉCOR COLLECTION </h4>
          <p className='mt-5'>
            Senoplast offers 26 stunning decors that are available across the UK, making it a top choice for high-end
            interior design projects. Known for its expertise in plastic technology, Senoplast specializes in producing
            high gloss panels in rich colour palettes, perfect for maintaining a modern and sophisticated look in your
            interiors. For those who prefer a softer, more subtle appearance, Senoplast also offers a super matt range.
          </p>
          <p className='mt-5'>
            Whether you opt for the high gloss or matt finishes, Senoplast’s premium panels are designed to elevate any
            interior furniture piece with both style and durability. See and feel the quality for yourself!
          </p>
        </div>
        <div className='flex justify-center gap-4 mt-10'>
          <a
            href='#'
            className='bg-black px-5 py-4 md:px-5 lg:px-6 lg:px-9 md:py-4 font-medium text-xl text-white hover:bg-primary ease-in duration-200 flex items-center justify-between'
          >
            BROWSE AND BUY{' '}
          </a>
        </div>
      </div>
    </section>
  )
}
