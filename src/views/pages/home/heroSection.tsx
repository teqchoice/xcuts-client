import React, { Fragment } from 'react'
import Slider from '../components/slider'
import Image from 'next/image'

export default function HeroSection({ data }: any) {
  // console.log(data)

  function SlideMap() {
    return (
      <Slider slidesPerView={1} className={'w-full overflow-hidden  object-cover !h-auto'}>
        {data[0]?.map((slide: any, i: number) => {
          // console.log(slide)
          return (
            <Fragment key={i}>
              <Image
                src={process.env.NEXT_PUBLIC_API_URL + slide.filec}
                alt='baner'
                width={100}
                height={100}
                unoptimized
                className='w-full aspect-video md:aspect-auto object-cover md:max-h-[370px] lg:max-h-[450px] xl:max-h-[560px] 2xl::max-h-[650px]'
              />
            </Fragment>
          )
        })}
      </Slider>
    )
  }

  return (
    <section className='relative overflow-hidden'>
      {/* <section className='swiper mySwiper'>
        <div className='swiper-wrapper'>
          <div className='swiper-slide after:absolute after:content-normal after:bottom-0 after:w-[200px] after:bg-inherit after:right-0 after:skew-y-[144deg] after:pb-36 after:origin-[100%_100%]'>
            <img src='images/slide-01.webp' alt='' className='h-[365px] object-cover' />
          </div>
        </div>
      </section> */}
{/* md:origin-[100%_100%] md:w-[200px] */}
      <SlideMap />
      <div className='absolute bottom-0 right-0 z-10 w-[150px] bg-white pb-36 skew-y-[144deg] origin-[160%_100%] '></div>
    </section>
  )
}
