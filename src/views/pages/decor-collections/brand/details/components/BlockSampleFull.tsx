import React from 'react'

export default function BlockSampleFull({ data }: any) {
  // console.log(data)
  return (
    <section>
      <div className='bg-neutral-100 md:flex'>
        <RenderImage data={data} />
        <div className='basis-[47.88%] flex items-center'>
          <div className={`flex flex-col md:justify-center pb-16 py-8 px-8 md:w-[410px] lg:w-[567px] ${data?.right_side && 'ml-auto'}`}>
            {data?.top_title && <p className=' text-black'>{data?.top_title}</p>}
            {data?.title && (
              <h2 className='text-2xl md:text-4xl lg:text-5xl text-black font-bold mb-3'>{data?.title}</h2>
            )}
            {data?.sub_title && <p className=' text-black mb-6'>{data?.sub_title}</p>}
            {data?.content && (
              <div
                className='text-lg md:text-2xl lg:text-3xl'
                dangerouslySetInnerHTML={{
                  __html: data?.content
                }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function RenderImage({ data }: any) {
  if (data?.right_side) {
    return (
      <div className='basis-[52.12%] order-1'>
        <div className='relative overflow-hidden w-full bg-neutral-100 before:absolute before:content-normal before:bottom-0 before:w-1/2 before:bg-inherit before:right-1/2 before:skew-x-[40deg] before:pb-7 before:origin-[100%_100%] after:absolute after:content-normal after:bottom-0 after:w-1/2 after:bg-inherit after:left-1/2 after:-skew-x-[40deg] after:pb-7 after:origin-[100%_100%] md:before:w-10 md:before:h-1/2 md:before:top-0 md:before:bottom-auto md:before:right-auto md:before:skew-x-[0deg] md:before:-skew-y-[40deg] md:after:w-10 md:after:h-1/2 md:after:bottom-0 md:after:right-auto md:after:left-0 md:after:skew-x-[0deg] md:after:skew-y-[40deg] md:before:origin-[0%_0%] md:after:origin-[0%_0%]'>
          <img
            className='h-[380px] md:h-[460px] lg:h-[596px] w-full object-cover object-center'
            src={`${process.env.NEXT_PUBLIC_API__URL_images}/${data?.poster?.id}/${data?.poster?.filename_download}`}
            alt=''
          />
        </div>
      </div>
    )
  }
  return (
    <div className='basis-[52.12%]'>
      <div className='relative overflow-hidden w-full bg-neutral-100 before:absolute before:content-normal before:bottom-0 before:w-1/2 before:bg-inherit before:right-1/2 before:skew-x-[40deg] before:pb-7 before:origin-[100%_100%] after:absolute after:content-normal after:bottom-0 after:w-1/2 after:bg-inherit after:left-1/2 after:-skew-x-[40deg] after:pb-7 after:origin-[100%_100%] md:before:w-10 md:before:h-1/2 md:before:top-0 md:before:bottom-auto md:before:right-0 md:before:skew-x-[0deg] md:before:skew-y-[40deg] md:after:w-10 md:after:h-1/2 md:after:bottom-0 md:after:right-0 md:after:left-auto md:after:skew-x-[0deg] md:after:-skew-y-[40deg]'>
        <img
          className='h-[380px] md:h-[460px] lg:h-[596px] w-full object-cover object-center'
          src={`${process.env.NEXT_PUBLIC_API__URL_images}/${data?.poster?.id}/${data?.poster?.filename_download}`}
          alt=''
        />
      </div>
    </div>
  )
}
