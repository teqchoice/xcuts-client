import React from 'react'

export default function ABSEdgebandSection(data, props: any) {
  // console.log(Data)
  return (
    <>
      <section>
        <div className='px-4 pt-5 sm:container'>
          {/* <div className='text-center text-black mb-11 mt-20'>
            <p className='text-3xl'>Decorated Panels</p>
            <h4 className='md:text-[40px] text-2xl font-semibold mb-7'>Let Your Imagination Run Wild!</h4>
            <p className='text-base text-black'>
              Routing out a decorative pattern, often in an MDF panel, is a frequent usage of our CNC service. With this
              style of fretwork panelling, you can express your personality via your designs and give your house or
              place of business true individuality. Here are a few instances of how and where ornamental panels may be
              used.
            </p>
          </div> */}
          <div className='bg-neutral-100 md:flex mb-6'>
            <div className='basis-[52.12%] order-1'>
              <div className='relative overflow-hidden w-full bg-neutral-100 before:absolute before:content-normal before:bottom-0 before:w-1/2 before:bg-inherit before:right-1/2 before:skew-x-[40deg] before:pb-7 before:origin-[100%_100%] after:absolute after:content-normal after:bottom-0 after:w-1/2 after:bg-inherit after:left-1/2 after:-skew-x-[40deg] after:pb-7 after:origin-[100%_100%] md:before:w-10 md:before:h-1/2 md:before:top-0 md:before:bottom-auto md:before:right-auto md:before:skew-x-[0deg] md:before:-skew-y-[40deg] md:after:w-10 md:after:h-1/2 md:after:bottom-0 md:after:right-auto md:after:left-0 md:after:skew-x-[0deg] md:after:skew-y-[40deg] md:before:origin-[0%_0%] md:after:origin-[0%_0%]'>
                <img
                  className='h-[380px] md:h-[460px] lg:h-[455px] w-full object-cover object-center'
                  src='../images/alldecor.jpeg'
                  alt=''
                />
              </div>
            </div>
            <div className='basis-[47.88%] flex items-center'>
              <div className='flex flex-col md:justify-center md:ml-auto pb-16 py-8 px-8 md:max-w-[410px] lg:max-w-[567px]'>
                <p className='text-xl md:text-3xl text-black'>
                  {/* Blumotion */}
                  {data?.data?.paragraphs_items[5]?.top_title}
                </p>
                <h2 className='text-2xl md:text-3xl text-black font-bold mb-6'>
                  {/* Clip top */}
                  {data?.data?.paragraphs_items[5]?.title}
                </h2>
                <p
                  className='text-lg pb-3'
                  dangerouslySetInnerHTML={{ __html: data?.data?.paragraphs_items[5]?.content }}
                >
                  {/* Cabinet doors may close smoothly and easily thanks to an inventive technique called integrated
                  soft-close. */}
                </p>
                <a href={data?.data?.paragraphs_items[5]?.btn_url} className=' text-black font-extrabold'>
                  {/* Extra details > */}
                  {data?.data?.paragraphs_items[5]?.btn_name}
                </a>
              </div>
            </div>
          </div>
          <div className='bg-neutral-100 md:flex mb-6'>
            <div className='basis-[52.12%]'>
              <div>
                <div className='relative overflow-hidden w-full bg-neutral-100 before:absolute before:content-normal before:bottom-0 before:w-1/2 before:bg-inherit before:right-1/2 before:skew-x-[40deg] before:pb-7 before:origin-[100%_100%] after:absolute after:content-normal after:bottom-0 after:w-1/2 after:bg-inherit after:left-1/2 after:-skew-x-[40deg] after:pb-7 after:origin-[100%_100%] md:before:w-10 md:before:h-1/2 md:before:top-0 md:before:bottom-auto md:before:right-0 md:before:skew-x-[0deg] md:before:skew-y-[40deg] md:after:w-10 md:after:h-1/2 md:after:bottom-0 md:after:right-0 md:after:left-auto md:after:skew-x-[0deg] md:after:-skew-y-[40deg]'>
                  <img
                    className='h-[380px] md:h-[460px] lg:h-[455px] w-full object-cover object-center'
                    src='../images/alldecor.jpeg'
                    alt=''
                  />
                </div>
              </div>
            </div>
            <div className='basis-[47.88%] flex items-center'>
              <div className='flex flex-col md:justify-center md:mr-auto pb-16 py-8 px-8 md:max-w-[410px] lg:max-w-[567px]'>
                <p className='text-xl md:text-3xl text-black'>
                  {/* Insertion */}
                  {data?.data?.paragraphs_items[6]?.top_title}
                </p>
                <h2 className='text-2xl md:text-3xl text-black font-bold mb-6'>
                  {/* Clip Top */}
                  {data?.data?.paragraphs_items[5]?.title}
                </h2>
                <p
                  className='text-lg pb-3'
                  dangerouslySetInnerHTML={{ __html: data?.data?.paragraphs_items[6]?.content }}
                >
                  {/* With Clip Top hinges, installing the hinge on a door is simple and requires no tools. It can have an integrated Blumotion as wsell. */}
                </p>
                <a href={data?.data?.paragraphs_items[6]?.btn_url} className=' text-black font-extrabold'>
                  {/* Extra details >  */}
                  {data?.data?.paragraphs_items[6]?.btn_name}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
