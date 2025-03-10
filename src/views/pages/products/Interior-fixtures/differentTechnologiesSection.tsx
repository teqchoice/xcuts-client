import React from 'react'

export default function DifferentTechnologiesSection(data, props: any) {
  // console.log(Data)
  return (
    <>
      <section>
        <div className='text-center text-black mb-11 md:mt-20 mt-5'>
          {/* <p className='md:text-3xl text-xl'>The Key Features:</p> */}
          <h4 className='lg:text-5xl md:text-3xl text-3xl font-semibold'>
            {/* System Runners: */}
            {data?.data?.paragraphs_items[0]?.top_title}
          </h4>
        </div>

        <div className='px-4 sm:container'>
          <div className='relative mb-6'>
            <img src='/images/interior-fixtures/02-blum-runner-system-movento.jpg' alt='' className='w-full' />
            <div className='px-5 py-6 md:px-10 md:py-9 bg-[#f3f3f3] md:absolute md:bottom-0 md:w-[600px] lg:w-[503px]'>
              <p className='text-xl md:text-3xl text-black'>
                {/* Blum Runner System. */}
                {data?.data?.paragraphs_items[0]?.title}
              </p>
              <h4 className='text-2xl md:text-4xl text-black font-bold mb-3'>
                {/* Movento */}
                {data?.data?.paragraphs_items[0]?.sub_title}
              </h4>
              <div
                className='text-xl text-black mb-3'
                dangerouslySetInnerHTML={{ __html: data?.data?.paragraphs_items[0]?.content }}
              />

              <a href={data?.data?.paragraphs_items[0]?.btn_url} className=' text-black font-extrabold'>
                {data?.data?.paragraphs_items[0]?.btn_name}{' '}
              </a>
            </div>
          </div>
        </div>

        <div className='bg-neutral-100 md:flex'>
          <div className='basis-[52.12%] order-1'>
            <div className='relative overflow-hidden w-full bg-neutral-100 before:absolute before:content-normal before:bottom-0 before:w-1/2 before:bg-inherit before:right-1/2 before:skew-x-[40deg] before:pb-7 before:origin-[100%_100%] after:absolute after:content-normal after:bottom-0 after:w-1/2 after:bg-inherit after:left-1/2 after:-skew-x-[40deg] after:pb-7 after:origin-[100%_100%] md:before:w-10 md:before:h-1/2 md:before:top-0 md:before:bottom-auto md:before:right-auto md:before:skew-x-[0deg] md:before:-skew-y-[40deg] md:after:w-10 md:after:h-1/2 md:after:bottom-0 md:after:right-auto md:after:left-0 md:after:skew-x-[0deg] md:after:skew-y-[40deg] md:before:origin-[0%_0%] md:after:origin-[0%_0%]'>
              <img
                className='h-[380px] md:h-[460px] lg:h-[596px] w-full object-cover object-center'
                src='/images/interior-fixtures/03-light-glide-coordinated.jpg'
                alt=''
              />
            </div>
          </div>
          <div className='basis-[47.88%] flex md:flex-row flex-col items-center'>
            <div className='flex flex-col md:justify-center md:ml-auto pb-16 py-8 px-4 md:max-w-[410px] lg:max-w-[567px] lg:pr-16'>
              <p className='text-xl md:text-3xl text-black'>
                {/* Light glide */}
                {data?.data?.paragraphs_items[1]?.top_title}
              </p>
              <h2 className='text-2xl md:text-3xl text-black font-bold mb-6'>
                {/* coordinated */}
                {data?.data?.paragraphs_items[1]?.title}
              </h2>
              <div
                className='text-lg mb-3'
                dangerouslySetInnerHTML={{ __html: data?.data?.paragraphs_items[1]?.content }}
              />
              <a href={data?.data?.paragraphs_items[1]?.btn_url} className=' text-black font-extrabold'>
                {/* Watch this clip >  */}
                {data?.data?.paragraphs_items[1]?.btn_name}
              </a>
            </div>
          </div>
        </div>
        <div className='bg-neutral-100 md:flex'>
          <div className='basis-[52.12%]'>
            <div>
              <div className='relative overflow-hidden w-full bg-neutral-100 before:absolute before:content-normal before:bottom-0 before:w-1/2 before:bg-inherit before:right-1/2 before:skew-x-[40deg] before:pb-7 before:origin-[100%_100%] after:absolute after:content-normal after:bottom-0 after:w-1/2 after:bg-inherit after:left-1/2 after:-skew-x-[40deg] after:pb-7 after:origin-[100%_100%] md:before:w-10 md:before:h-1/2 md:before:top-0 md:before:bottom-auto md:before:right-0 md:before:skew-x-[0deg] md:before:skew-y-[40deg] md:after:w-10 md:after:h-1/2 md:after:bottom-0 md:after:right-0 md:after:left-auto md:after:skew-x-[0deg] md:after:-skew-y-[40deg]'>
                <img
                  className='h-[380px] md:h-[460px] lg:h-[596px] w-full object-cover object-center'
                  src='/images/interior-fixtures/04-four-dimensional-Utilising-Lasers.jpg'
                  alt=''
                />
              </div>
            </div>
          </div>
          <div className='basis-[47.88%] flex items-center'>
            <div className='flex flex-col md:justify-center md:mr-auto pb-16 py-8 px-4 md:max-w-[410px] lg:max-w-[567px] lg:pl-16'>
              <p className='text-xl md:text-3xl text-black'>
                {/* four dimensional */}
                {data?.data?.paragraphs_items[2]?.top_title}
              </p>
              <h2 className='text-2xl md:text-3xl text-black font-bold mb-6'>
                {/* Utilising Lasers */}
                {data?.data?.paragraphs_items[2]?.title}
              </h2>
              <div className='text-lg' dangerouslySetInnerHTML={{ __html: data?.data?.paragraphs_items[2]?.content }} />
            </div>
          </div>
        </div>
        <div className='bg-neutral-100 md:flex'>
          <div className='basis-[52.12%] order-1'>
            <div className='relative overflow-hidden w-full bg-neutral-100 before:absolute before:content-normal before:bottom-0 before:w-1/2 before:bg-inherit before:right-1/2 before:skew-x-[40deg] before:pb-7 before:origin-[100%_100%] after:absolute after:content-normal after:bottom-0 after:w-1/2 after:bg-inherit after:left-1/2 after:-skew-x-[40deg] after:pb-7 after:origin-[100%_100%] md:before:w-10 md:before:h-1/2 md:before:top-0 md:before:bottom-auto md:before:right-auto md:before:skew-x-[0deg] md:before:-skew-y-[40deg] md:after:w-10 md:after:h-1/2 md:after:bottom-0 md:after:right-auto md:after:left-0 md:after:skew-x-[0deg] md:after:skew-y-[40deg] md:before:origin-[0%_0%] md:after:origin-[0%_0%]'>
              <img
                className='h-[380px] md:h-[460px] lg:h-[596px] w-full object-cover object-center'
                src='/images/interior-fixtures/05-Tip-on-Blumotion-dual-system.png'
                alt=''
              />
            </div>
          </div>
          <div className='basis-[47.88%] flex items-center'>
            <div className='flex flex-col md:justify-center md:ml-auto pb-16 py-8 px-4 md:max-w-[410px] lg:max-w-[567px] lg:pr-16'>
              <p className='text-xl md:text-3xl text-black'>
                {/* Tip-on Blumotion */}
                {data?.data?.paragraphs_items[3]?.top_title}
              </p>
              <h2 className='text-2xl md:text-3xl text-black font-bold mb-6'>
                {/* a dual system */}
                {data?.data?.paragraphs_items[3]?.title}
              </h2>
              <div
                className='text-lg mb-3'
                dangerouslySetInnerHTML={{ __html: data?.data?.paragraphs_items[3]?.content }}
              />
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
