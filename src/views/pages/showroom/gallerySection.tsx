import Image from 'next/image'
import React, { Fragment, useEffect } from 'react'
import Slider from './slider'
import PhotoSwipeLightbox from 'photoswipe/lightbox'

import 'photoswipe/style.css'

const images = [
  {
    largeURL: 'images/showroom-1.jpeg'
  },
  {
    largeURL: 'images/banner-1-showroom.jpeg'
  },
  {
    largeURL: 'images/showroom-1.jpeg'
  },
  {
    largeURL: 'images/banner-1-showroom.jpeg'
  },
  {
    largeURL: 'images/showroom-1.jpeg'
  }
]

export default function GallerySection() {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#' + 'my-test-gallery',
      children: 'a',
      pswpModule: () => import('photoswipe')
    })
    lightbox.init()

    return () => {
      lightbox.destroy()
      lightbox = null
    }
  }, [])

  function SlideMap() {
    return (
      <Slider slidesPerView={4} className={'w-full overflow-hidden'}>
        {images.map((image, index) => (
          <Fragment key={index}>
            <a
              href={image.largeURL}
              // data-pswp-width={600}
              // data-pswp-height={600}
              key={'my-test-gallery' + '-' + index}
              target='_blank'
              rel='noreferrer'
              className='relative group'
            >
              <img src={image.largeURL} alt='' className='min-h-[20rem]' />
              <div className='absolute inset-0 bg-primary bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition delay-300 cursor-pointer'>
                <img
                  src='/images/hover-eye-icon.webp'
                  data-te-img='images/srm-glry-thumb-01.webp'
                  alt=''
                  className='!w-10 !h-10 m-auto cursor-zoom-in '
                />
              </div>
            </a>
          </Fragment>
        ))}
      </Slider>
    )
  }

  return (
    <section className='py-20'>
      <div className='md:container px-4'>
        <div className='glryHdr bg-black text-center min-h-[120px] flex justify-center items-center mb-11'>
          <h3 className='text-white text-2xl md:text-3xl lg:text-5xl'>Showroom gallery</h3>
        </div>
        <div className='pswp-gallery' id={'my-test-gallery'}>
          <SlideMap />
        </div>
        {/* <div className='swiper LightBoxSwiper'>
          <div data-te-lightbox-init className='swiper-wrapper'>
            <div className='swiper-slide relative group'>
              <img src='/images/srm-glry-thumb-01.webp' />
              <div className='absolute inset-0 bg-primary bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition delay-300 cursor-pointer'>
                <img
                  src='/images/hover-eye-icon.webp'
                  data-te-img='images/srm-glry-thumb-01.webp'
                  alt=''
                  className='w-[38px] cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto'
                />
              </div>
            </div>
            <div className='swiper-slide relative group'>
              <img src='/images/srm-glry-thumb-02.webp' />
              <div className='absolute inset-0 bg-primary bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition delay-300 cursor-pointer'>
                <img
                  src='/images/hover-eye-icon.webp'
                  data-te-img='images/srm-glry-thumb-02.webp'
                  alt=''
                  className='w-[38px] cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto'
                />
              </div>
            </div>
            <div className='swiper-slide relative group'>
              <img src='/images/srm-glry-thumb-03.webp' />
              <div className='absolute inset-0 bg-primary bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition delay-300 cursor-pointer'>
                <img
                  src='/images/hover-eye-icon.webp'
                  data-te-img='images/srm-glry-thumb-03.webp'
                  alt=''
                  className='w-[38px] cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto'
                />
              </div>
            </div>
            <div className='swiper-slide relative group'>
              <img src='/images/srm-glry-thumb-04.webp' />
              <div className='absolute inset-0 bg-primary bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition delay-300 cursor-pointer'>
                <img
                  src='/images/hover-eye-icon.webp'
                  data-te-img='images/srm-glry-thumb-04.webp'
                  alt=''
                  className='w-[38px] cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto'
                />
              </div>
            </div>
            <div className='swiper-slide relative group'>
              <img src='/images/srm-glry-thumb-03.webp' />
              <div className='absolute inset-0 bg-primary bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition delay-300 cursor-pointer'>
                <img
                  src='/images/hover-eye-icon.webp'
                  data-te-img='images/srm-glry-thumb-03.webp'
                  alt=''
                  className='w-[38px] cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto'
                />
              </div>
            </div>
          </div>
          <div className="swiper-button-next after:text-black after:bg-white after:rounded-sm after:px-2 after:py-2 after:text-xl after:font-bold after:content-['next']"></div>
          <div className="swiper-button-prev after:text-black after:bg-white after:rounded-sm after:px-2 after:py-2 after:text-xl after:font-bold after:content-['prev']"></div>
        </div> */}
      </div>
    </section>
  )
}
