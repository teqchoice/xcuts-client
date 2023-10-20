import React from 'react'

export default function HeroSection() {
  return (
    <section className='swiper mySwiper'>
      <div className='swiper-wrapper'>
        <div className='swiper-slide after:absolute after:content-normal after:bottom-0 after:w-[200px] after:bg-inherit after:right-0 after:skew-y-[144deg] after:pb-36 after:origin-[100%_100%]'>
          <img src='images/slide-01.webp' alt='' className='h-[365px] object-cover' />
        </div>
      </div>
    </section>
  )
}
