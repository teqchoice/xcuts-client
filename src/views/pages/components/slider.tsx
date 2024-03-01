// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// import { Pagination, Navigation } from 'swiper'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const Slider = ({ children, slidesPerView, spaceBetween, className }: any) => {
  // console.log(children)
  return (
    <Swiper
      className='mySwiper'
      dir='rtl'
      slidesPerView={slidesPerView || 'auto'}
      loop={true}
      spaceBetween={spaceBetween || 10}
      // pagination={{
      //     clickable: true,
      // }}
      // navigation={true}
      // modules={[Pagination, Navigation]}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={swiper => console.log(swiper)}
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
    </Swiper>
  )
}

export default Slider
