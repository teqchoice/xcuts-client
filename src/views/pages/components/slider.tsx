// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { Swiper as SwiperType } from 'swiper/types'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { useRef } from 'react'
import { Left, Pencil, Right } from '@icon-park/react'

const Slider = ({ children, slidesPerView, spaceBetween, className }: any) => {
  const swiperRef = useRef<SwiperType>()
  return (
    <Swiper
      className='mySwiper'
      dir='rtl'
      slidesPerView={slidesPerView || 'auto'}
      loop={true}
      spaceBetween={spaceBetween || 10}
      onBeforeInit={swiper => {
        swiperRef.current = swiper
      }}
      modules={[Navigation]}
    >
      {Array.isArray(children) ? (
        children.map((item, index) => {
          return (
            <SwiperSlide key={index} className={`${className} overflow-hidden w-full`}>
              {item.props.children}
            </SwiperSlide>
          )
        })
      ) : (
        <SwiperSlide>{children.props.children}</SwiperSlide>
      )}
      <div className='absolute bottom-0 right-0 z-10 lg:w-[300px] md:w-[250px] w-[200px] bg-white lg:pb-64 md:pb-52 pb-40 lg:skew-y-[144deg] md:skew-y-[139deg] skew-y-[136deg] lg:origin-[110%_100%] md:origin-[90%_100%] origin-[90%_100%]'></div>
      <div className='flex gap-3 relative md:-top-14 -top-10 px-5'>
        <button onClick={() => swiperRef.current?.slidePrev()} className=' text-black z-50 relative'>
          <Right
            theme='outline'
            size='28'
            fill='#000'
            className='cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'
          />
          <div className='w-7 md:w-14 h-8 bg-primary  left-0 bottom-0 skew-y-[0] skew-x-[35deg]'></div>
        </button>
        <button onClick={() => swiperRef.current?.slideNext()} className=' text-black z-50 relative'>
          <Left
            theme='outline'
            size='28'
            fill='#000'
            className='cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'
          />
          <div className='w-7 md:w-14 h-8 bg-primary  right-0 top-0 skew-y-[0] skew-x-[35deg]'></div>
        </button>
      </div>
    </Swiper>
  )
}

export default Slider
