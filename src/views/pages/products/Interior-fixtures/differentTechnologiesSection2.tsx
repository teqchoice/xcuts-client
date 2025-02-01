import React from 'react'

export default function DifferentTechnologiesSection(data, props: any) {
  // console.log(Data)
  return (
    <>
      <section>
        <div className='px-4 sm:container py-5'>
          <div className='relative mb-6'>
            <img src='../images/alldecor.jpeg' alt='' className='w-full' />
            <div className='px-5 py-6 md:px-10 md:py-9 bg-[#f3f3f3] md:absolute md:bottom-0 md:w-[600px] lg:w-[503px]'>
              <p className='text-xl md:text-3xl text-black'>
                {/* Blum box approach. */}
                {data?.data?.paragraphs_items[4]?.top_title}
              </p>
              <h4 className='text-2xl md:text-4xl text-black font-bold mb-3'>
                {/* Legrabox */}
                {data?.data?.paragraphs_items[4]?.title}
              </h4>
              <div
                className='text-xl text-black mb-3'
                dangerouslySetInnerHTML={{ __html: data?.data?.paragraphs_items[4]?.content }}
              />

              <a href={data?.data?.paragraphs_items[4]?.btn_url} className=' text-black font-extrabold'>
                {/* More Details >  */}
                {data?.data?.paragraphs_items[4]?.btn_name}
              </a>
            </div>
          </div>
        </div>

        <div className='px-4 sm:container'>
          <div className=' flex justify-center items-center flex-col'>
            <div className='text-center flex flex-col gap-3  text-black mb-5'>
              <p className='text-3xl'>Legrabox</p>
              <h4 className='md:text-[40px] text-2xl font-semibold mb-7'>The key points</h4>
              <p className='text-base text-black'>
                Legrabox includes several features and characteristics of design that are noteworthy. Blum has worked
                hard to develop a really distinctive product line that is not only exquisite in form but also simple to
                construct and install.
              </p>

              <div className='flex md:flex-row flex-col gap-5 my-5 lg:my-10'>
                <div className='flex flex-col items-center gap-3'>
                  <img className=' w-full object-cover object-center' src='../images/alldecor.jpeg' alt='' />
                  <h4 className='font-bold text-lg'>Streamlined Style</h4>
                  <p>
                    The wonderfully straight and thin (12.8 mm) drawer sides mix in well with all pieces of furniture.
                    The many elements work in harmony with one another thanks to meticulous coordination.
                  </p>
                </div>
                <div className='flex flex-col items-center gap-3'>
                  <img className=' w-full object-cover object-center' src='../images/alldecor.jpeg' alt='' />
                  <h4 className='font-bold text-lg'>Total capacity for Bearing Loads</h4>
                  <p>
                    Legrabox delivers excellent performance even when fully stretched and loaded. Due to its high
                    dynamic carrying capacity of 40 and 70 kg, even very wide and large pull-outs move smoothly.
                  </p>
                </div>
                <div className='flex flex-col items-center gap-3'>
                  <img className=' w-full object-cover object-center' src='../images/alldecor.jpeg' alt='' />
                  <h4 className='font-bold text-lg'>High-front Stability</h4>
                  <p>
                    High fronts have grown into a more and more common design feature. With a new kind of front fixing
                    bracket that ensures optimum stability when shutting and opening drawers and pull-outs, Legrabox
                    responds to this trend.{' '}
                  </p>
                </div>
                <div className='flex flex-col items-center gap-3'>
                  <img className=' w-full object-cover object-center' src='../images/alldecor.jpeg' alt='' />
                  <h4 className='font-bold text-lg'>Tip-on Bluemotion</h4>
                  <p>
                    The benefits of this mechanical opening mechanism are combined with Blumotion's tried-and-true
                    soft-close technology to create Tip-on Bluemotion. To open, you simple touch and effortlessly close
                    with a push. Additionally, it is entirely mechanical in nature.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className='bg-primary text-center py-11'>
          <h4 className='lg:text-5xl text-3xl text-white'>Edgebanding tape finishing options</h4>
        </div> */}
      </section>
    </>
  )
}
