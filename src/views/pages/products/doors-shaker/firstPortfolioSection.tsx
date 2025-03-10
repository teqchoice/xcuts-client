import React from 'react'
import MiddleRedTitle from '@/views/pages/components/middleRedTitle'

export default function FirstPortfolio({ data }: any) {
  console.log(data, 'datahast')

  return (
    <section className='overflow-hidden'>
      <MiddleRedTitle title={data?.feature_title} />
      <div className='bg-neutral-100 md:flex'>
        <div className='basis-[52.12%] order-1'>
          <div className='relative overflow-hidden w-full bg-neutral-100 before:absolute before:content-normal before:bottom-0 before:w-1/2 before:bg-inherit before:right-1/2 before:skew-x-[40deg] before:pb-7 before:origin-[100%_100%] after:absolute after:content-normal after:bottom-0 after:w-1/2 after:bg-inherit after:left-1/2 after:-skew-x-[40deg] after:pb-7 after:origin-[100%_100%] md:before:w-10 md:before:h-1/2 md:before:top-0 md:before:bottom-auto md:before:right-auto md:before:skew-x-[0deg] md:before:-skew-y-[40deg] md:after:w-10 md:after:h-1/2 md:after:bottom-0 md:after:right-auto md:after:left-0 md:after:skew-x-[0deg] md:after:skew-y-[40deg] md:before:origin-[0%_0%] md:after:origin-[0%_0%]'>
            <img
              className='h-[380px] md:h-[460px] lg:h-[596px] w-full object-cover object-center'
              src={data?.feature_items[0]?.poster_url}
              alt=''
            />
          </div>
        </div>
        <div className='basis-[47.88%] flex items-center'>
          <div className='flex flex-col md:justify-center md:ml-auto pb-16 py-8 px-8 md:max-w-[410px] lg:max-w-[567px]'>
            <p className='text-xl md:text-3xl'>Any size Shaker Doors</p>
            <h2 className='text-3xl md:text-4xl text-black font-bold mb-6'>
              {/* Custom made to order */}
              {data?.feature_items[0]?.title}
            </h2>
            <p className='text-lg'>
              {data?.feature_items[0]?.content}

              {/* Made perfectly squared and precise for an ideal fit, our shakers have a maximum height of xx and width of
              xx. */}
            </p>
          </div>
        </div>
      </div>
      <div className='bg-neutral-100 md:flex'>
        <div className='basis-[52.12%]'>
          <div>
            <div className='relative overflow-hidden w-full bg-neutral-100 before:absolute before:content-normal before:bottom-0 before:w-1/2 before:bg-inherit before:right-1/2 before:skew-x-[40deg] before:pb-7 before:origin-[100%_100%] after:absolute after:content-normal after:bottom-0 after:w-1/2 after:bg-inherit after:left-1/2 after:-skew-x-[40deg] after:pb-7 after:origin-[100%_100%] md:before:w-10 md:before:h-1/2 md:before:top-0 md:before:bottom-auto md:before:right-0 md:before:skew-x-[0deg] md:before:skew-y-[40deg] md:after:w-10 md:after:h-1/2 md:after:bottom-0 md:after:right-0 md:after:left-auto md:after:skew-x-[0deg] md:after:-skew-y-[40deg]'>
              <img
                className='h-[380px] md:h-[460px] lg:h-[596px] w-full object-cover object-center'
                src={data?.feature_items[1]?.poster_url}
                alt=''
              />
            </div>
          </div>
        </div>
        <div className='basis-[47.88%] flex items-center'>
          <div className='flex flex-col md:justify-center md:mr-auto pb-16 py-8 px-8 md:max-w-[410px] lg:max-w-[567px]'>
            <p className='text-xl md:text-3xl'> Multiple door partitions.</p>
            <h2 className='text-3xl md:text-4xl text-black font-bold mb-6'>
              {/* Get up to four partitions on your doors.{' '} */}
              {data?.feature_items[1]?.title}
            </h2>
            <p className='text-lg'>
              {/* Shaker door partitions are a great way to customise your doors further, maintain a traditional look, and
              add further strength to longer doors. */}
              {data?.feature_items[1]?.content}
            </p>
          </div>
        </div>
      </div>
      <div className='bg-neutral-100 md:flex'>
        <div className='basis-[52.12%] order-1'>
          <div className='relative overflow-hidden w-full bg-neutral-100 before:absolute before:content-normal before:bottom-0 before:w-1/2 before:bg-inherit before:right-1/2 before:skew-x-[40deg] before:pb-7 before:origin-[100%_100%] after:absolute after:content-normal after:bottom-0 after:w-1/2 after:bg-inherit after:left-1/2 after:-skew-x-[40deg] after:pb-7 after:origin-[100%_100%] md:before:w-10 md:before:h-1/2 md:before:top-0 md:before:bottom-auto md:before:right-auto md:before:skew-x-[0deg] md:before:-skew-y-[40deg] md:after:w-10 md:after:h-1/2 md:after:bottom-0 md:after:right-auto md:after:left-0 md:after:skew-x-[0deg] md:after:skew-y-[40deg] md:before:origin-[0%_0%] md:after:origin-[0%_0%]'>
            <img
              className='h-[380px] md:h-[460px] lg:h-[596px] w-full object-cover object-center'
              src={data?.feature_items[2]?.poster_url}
              alt=''
            />
          </div>
        </div>
        <div className='basis-[47.88%] flex items-center'>
          <div className='flex flex-col md:justify-center md:ml-auto pb-16 py-8 px-8 md:max-w-[410px] lg:max-w-[567px]'>
            <p className='text-xl md:text-3xl'>Shaker door spray painting</p>
            <h2 className='text-3xl md:text-4xl text-black font-bold mb-6'>
              {/* Choose a colour that matches your style. */}
              {data?.feature_items[2]?.title}
            </h2>
            <p className='text-lg'>
              {/* Adding a splash of colour to your Shaker doors is a perfect way to give them a perfect finish and protect
              your new doors further. */}
              {data?.feature_items[2]?.content}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
