import { select } from 'radash'
import AboutSection from './aboutSection'
import HeroSection from './heroSection'
import ProductSection from './productSection'
import ServicesSection from './servicesSection'

export default function HomePage({ data }: any) {
  // console.log(data)
  return (
    <>
      <HeroSection
        data={data.data}
        // data={select(
        //   data,
        //   item => item?.contents,
        //   item => item?.name?.includes('Top_Slider')
        // )}
      />

      <AboutSection
        data={data.data}
        // data={select(
        //   data,
        //   item => item?.contents,
        //   item => item?.name?.includes('Section1_Xcut')
        // )}
      />

      <ServicesSection
        data={data.data}
        // data={select(
        //   data,
        //   item => item?.contents,
        //   item => item?.name?.includes('Section2')
        // )}
      />

      <ProductSection
        data={data.data}
        // data={select(
        //   data,
        //   item => item?.contents,
        //   item => item?.name?.includes('Section3')
        // )}
      />
    </>
  )
}
