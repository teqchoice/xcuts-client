import React, { Fragment } from 'react'
import Slider from '../components/slider'
import Image from 'next/image'
import HeroItem from './HeroItem'
import { SwiperSlide } from 'swiper/react'

export default function HeroSection({ data }: any) {
  // console.log(process?.env.NEXT_PUBLIC_API__URL_images + `/${data?.s1_image?.id}/${data?.s1_image?.filename_download}`)
  // console.log(data)
  const defaultSlide = [
    {
      id: '47',
      title: 's1',
      value: '',
      link: '/',
      filec: `${process.env.NEXT_PUBLIC_API__URL_images}/${data?.s1_image?.id}/${data?.s1_image?.filename_download}`
    },
    {
      id: '48',
      title: 's2',
      value: '',
      link: '/',
      filec: `${process.env.NEXT_PUBLIC_API__URL_images}/${data?.s2_image?.id}/${data?.s2_image?.filename_download}`
    },
    {
      id: '49',
      title: 's2',
      value: '',
      link: '/',
      filec: `${process.env.NEXT_PUBLIC_API__URL_images}/${data?.s3_image?.id}/${data?.s3_image?.filename_download}`
    }
  ]

  function SlideMap() {
    return (
      <Slider slidesPerView={1} className={'w-full overflow-hidden  object-cover !h-auto'}>
        <SwiperSlide key={defaultSlide?.[0]?.id} className={`overflow-hidden w-full`}>
          <Fragment>
            {/* <Image
                src={slide.filec}
                // src={process.env.NEXT_PUBLIC_API_URL + slide.filec}
                alt='baner'
                width={100}
                height={100}
                unoptimized
                className='w-full aspect-video md:aspect-auto object-cover md:max-h-[370px] lg:max-h-[450px] xl:max-h-[39rem] 2xl::max-h-[650px]'
              /> */}
            <video
              src={defaultSlide?.[0]?.filec}
              width='100%'
              height='auto'
              playsInline
              autoPlay
              muted
              loop
              preload='auto'
              className='w-full aspect-video md:aspect-auto object-cover md:max-h-[370px] lg:max-h-[450px] xl:max-h-[45rem] 2xl::max-h-[650px]'
              onMouseEnter={e => {
                const video = e.currentTarget
                if (video.paused !== false) {
                  video.play()
                }
              }}
              onMouseLeave={e => {
                const video = e.currentTarget
                if (video.paused === false) {
                  video.pause()
                }
              }}
            ></video>
            {/* <video ref="vidRef" src="/images/Home-Banner.mp4" typeof="video/mp4"></video> */}
          </Fragment>
        </SwiperSlide>
        <SwiperSlide className={`overflow-hidden w-full`}>
          <HeroItem
            image={`/images/main-slider/1.jpg`}
            hoverImage={`/images/main-slider/1-hover.jpg`}
            link={'/services/size-cut-panels'}
          />
        </SwiperSlide>
        <SwiperSlide className={`overflow-hidden w-full`}>
          <HeroItem
            image={`/images/main-slider/2.jpg`}
            hoverImage={`/images/main-slider/2-hover.jpg`}
            link={'/services/panel-edgebanding'}
          />
        </SwiperSlide>
        <SwiperSlide className={`overflow-hidden w-full`}>
          <HeroItem
            image={`/images/main-slider/3.jpg`}
            hoverImage={`/images/main-slider/3-hover.jpg`}
            link={'/services/using-cnc'}
          />
        </SwiperSlide>
      </Slider>
    )
  }

  return (
    <section className='relative overflow-hidden'>
      {/* <section className='swiper mySwiper'>
        <div className='swiper-wrapper'>
          <div className='swiper-slide after:absolute after:content-normal after:bottom-0 after:w-[200px] after:bg-inherit after:right-0 after:skew-y-[144deg] after:pb-36 after:origin-[100%_100%]'>
            <img src='/images/slide-01.webp' alt='' className='h-[365px] object-cover' />
          </div>
        </div>
      </section> */}
      {/* md:origin-[100%_100%] md:w-[200px] */}
      <SlideMap />
    </section>
  )
}
