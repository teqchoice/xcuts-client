import React from 'react'
import MiddleRedTitle from '@/views/pages/components/middleRedTitle'
import { select } from 'radash'

export default function ServicesSection({ data }: any) {
  // console.log(data)

  const t = select(
    data,
    item => item[0],
    item => item[0]?.id === '52'
  )[0]
  const s1 = select(
    data,
    item => item,
    item => item[0]?.id === '53'
  )[0]
  const s2 = select(
    data,
    item => item,
    item => item[0]?.id === '58'
  )[0]
  const s3 = select(
    data,
    item => item,
    item => item[0]?.id === '59'
  )[0]
  const s4 = select(
    data,
    item => item,
    item => item[0]?.id === '60'
  )[0]
  // console.log(s4)
  return (
    <section>
      <MiddleRedTitle title={t.value} />

      <div className='bg-neutral-100'>
        <div className=''>
          <div className='md:flex'>
            <div className='basis-[52.12%] md:basis-[55%] lg:basis-[54%] xl:basis-[53%] 2xl:basis-[53%]'>
              <div>
                <div className='relative overflow-hidden w-full bg-neutral-100 before:absolute before:content-normal before:-bottom-[1px] before:w-1/2 before:bg-inherit before:right-1/2 before:skew-x-[40deg] before:pb-7 before:origin-[100%_100%] after:absolute after:content-normal after:bottom-0 after:w-1/2 after:bg-inherit after:left-1/2 after:-skew-x-[40deg] after:pb-7 after:origin-[100%_100%] md:before:w-10 md:before:h-1/2 md:before:top-0 md:before:bottom-auto md:before:right-0 md:before:skew-x-[0deg] md:before:skew-y-[40deg] md:after:w-10 md:after:h-1/2 md:after:bottom-0 md:after:right-0 md:after:left-auto md:after:skew-x-[0deg] md:after:-skew-y-[40deg]'>
                  <img
                    className='md:h-[460px] lg:h-[596px] w-full object-cover object-center'
                    src={process.env.NEXT_PUBLIC_API_URL + s1[4]?.filec}
                    alt=''
                  />
                </div>
              </div>
            </div>
            <div className='basis-[47.88%] md:basis-[45%] lg:basis-[46%] xl:basis-[47%] 2xl:basis-[47%] flex items-center'>
              <div className='flex flex-col md:justify-center gap-6 pb-16 py-8 px-4 md:max-w-[410px] lg:max-w-[567px] lg:pl-16'>
                <h2
                  className='text-3xl md:text-4xl lg:text-5xl text-black font-bold'
                  dangerouslySetInnerHTML={{
                    __html: s1[0]?.value
                  }}
                ></h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: s1[1]?.value
                  }}
                ></div>
                <div className='flex gap-4'>
                  <a
                    href={s1[2]?.link}
                    className='bg-black px-5 py-4 md:px-3 lg:px-5 md:py-4 font-bold text-base text-white hover:bg-primary ease-in duration-200 flex items-center justify-between'
                  >
                    <span
                      dangerouslySetInnerHTML={{
                        __html: s1[2]?.value
                      }}
                    ></span>
                    <img className='w-6 h-3 ml-3' src='images/btn-arrow.webp' alt='' />
                  </a>
                  <a
                    href={s1[3]?.link}
                    className='bg-primary px-5 py-4 md:px-3 lg:px-5 md:py-3 font-bold text-base text-white hover:bg-black ease-in duration-200 flex items-center justify-between'
                  >
                    <span
                      dangerouslySetInnerHTML={{
                        __html: s1[3]?.value
                      }}
                    ></span>
                    <img className='w-6 h-3 ml-3' src='images/btn-arrow.webp' alt='' />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='md:flex'>
            <div className='basis-[55%] lg:basis-[54%] xl:basis-[53%] 2xl:basis-[52%] order-1'>
              <div className='relative overflow-hidden w-full bg-neutral-100 before:absolute before:content-normal before:bottom-0 before:w-1/2 before:bg-inherit before:right-1/2 before:skew-x-[40deg] before:pb-7 before:origin-[100%_100%] after:absolute after:content-normal after:bottom-0 after:w-1/2 after:bg-inherit after:left-1/2 after:-skew-x-[40deg] after:pb-7 after:origin-[100%_100%] md:before:w-10 md:before:h-1/2 md:before:top-0 md:before:bottom-auto md:before:right-auto md:before:skew-x-[0deg] md:before:-skew-y-[40deg] md:after:w-10 md:after:h-1/2 md:after:bottom-0 md:after:right-auto md:after:left-0 md:after:skew-x-[0deg] md:after:skew-y-[40deg] md:before:origin-[0%_0%] md:after:origin-[0%_0%]'>
                <img
                  className='h-[380px] md:h-[460px] lg:h-[596px] w-full object-cover object-center'
                  src={process.env.NEXT_PUBLIC_API_URL + s2[4]?.filec}
                  alt=''
                />
              </div>
            </div>
            <div className='basis-[45%] lg:basis-[46%] xl:basis-[47%] 2xl:basis-[48%] flex items-center'>
              <div className='flex flex-col md:justify-center md:ml-auto gap-6 pb-16 py-8 px-4 md:max-w-[410px] lg:max-w-[567px] lg:pr-16'>
                <h2
                  className='text-3xl md:text-4xl lg:text-5xl text-black font-bold'
                  dangerouslySetInnerHTML={{
                    __html: s2[0]?.value
                  }}
                ></h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: s2[1]?.value
                  }}
                ></div>
                <div className='flex gap-4'>
                  <a
                    href={s2[2]?.link}
                    className='bg-black px-5 py-4 md:px-3  lg:px-9 md:py-4 font-bold text-base text-white hover:bg-primary ease-in duration-200 flex items-center justify-between'
                  >
                    <span
                      dangerouslySetInnerHTML={{
                        __html: s2[2]?.value
                      }}
                    ></span>
                    <img className='w-6 h-3 ml-3' src='images/btn-arrow.webp' alt='' />
                  </a>
                  <a
                    href={s2[3]?.link}
                    className='bg-primary px-5 py-4 md:px-3  lg:px-9 md:py-3 font-bold text-base text-white hover:bg-black ease-in duration-200 flex items-center justify-between'
                  >
                    <span
                      dangerouslySetInnerHTML={{
                        __html: s2[3]?.value
                      }}
                    ></span>
                    <img className='w-6 h-3 ml-3' src='images/btn-arrow.webp' alt='' />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='md:flex'>
            <div className='basis-[52.12%] md:basis-[55%] lg:basis-[54%] xl:basis-[53%] 2xl:basis-[53%]'>
              <div>
                <div className='relative overflow-hidden w-full bg-neutral-100 before:absolute before:content-normal before:bottom-0 before:w-1/2 before:bg-inherit before:right-1/2 before:skew-x-[40deg] before:pb-7 before:origin-[100%_100%] after:absolute after:content-normal after:bottom-0 after:w-1/2 after:bg-inherit after:left-1/2 after:-skew-x-[40deg] after:pb-7 after:origin-[100%_100%] md:before:w-10 md:before:h-1/2 md:before:top-0 md:before:bottom-auto md:before:right-0 md:before:skew-x-[0deg] md:before:skew-y-[40deg] md:after:w-10 md:after:h-1/2 md:after:bottom-0 md:after:right-0 md:after:left-auto md:after:skew-x-[0deg] md:after:-skew-y-[40deg]'>
                  <img
                    className='h-[380px] md:h-[460px] lg:h-[596px] w-full object-cover object-center'
                    src={process.env.NEXT_PUBLIC_API_URL + s3[4]?.filec}
                    alt=''
                  />
                </div>
              </div>
            </div>
            <div className='basis-[47.88%]  md:basis-[45%] lg:basis-[46%] xl:basis-[47%] 2xl:basis-[47%] flex items-center'>
              <div className='flex flex-col md:justify-center gap-6 pb-16 py-8 px-4 md:max-w-[410px] lg:max-w-[567px] lg:pl-16'>
                <h2
                  className='text-3xl md:text-4xl lg:text-5xl text-black font-bold'
                  dangerouslySetInnerHTML={{
                    __html: s3[0]?.value
                  }}
                ></h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: s3[1]?.value
                  }}
                ></div>
                <div className='flex gap-4'>
                  <a
                    href={s3[2]?.link}
                    className='bg-black px-5 py-4 md:px-3 lg:px-9 md:py-4 font-bold text-base text-white hover:bg-primary ease-in duration-200 flex items-center justify-between'
                  >
                    <span
                      dangerouslySetInnerHTML={{
                        __html: s3[2]?.value
                      }}
                    ></span>
                    <img className='w-6 h-3 ml-3' src='images/btn-arrow.webp' alt='' />
                  </a>
                  <a
                    href={s3[3]?.link}
                    className='bg-primary px-5 py-4 md:px-3 lg:px-9 md:py-3 font-bold text-base text-white hover:bg-black ease-in duration-200 flex items-center justify-between'
                  >
                    <span
                      dangerouslySetInnerHTML={{
                        __html: s3[3]?.value
                      }}
                    ></span>
                    <img className='w-6 h-3 ml-3' src='images/btn-arrow.webp' alt='' />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='md:flex'>
            <div className='basis-[52.12%] md:basis-[55%] lg:basis-[54%] xl:basis-[53%] 2xl:basis-[52%] order-1'>
              <div className='relative overflow-hidden w-full bg-neutral-100 before:absolute before:content-normal before:bottom-0 before:w-1/2 before:bg-inherit before:right-1/2 before:skew-x-[40deg] before:pb-7 before:origin-[100%_100%] after:absolute after:content-normal after:bottom-0 after:w-1/2 after:bg-inherit after:left-1/2 after:-skew-x-[40deg] after:pb-7 after:origin-[100%_100%] md:before:w-10 md:before:h-1/2 md:before:top-0 md:before:bottom-auto md:before:right-auto md:before:skew-x-[0deg] md:before:-skew-y-[40deg] md:after:w-10 md:after:h-1/2 md:after:bottom-0 md:after:right-auto md:after:left-0 md:after:skew-x-[0deg] md:after:skew-y-[40deg] md:before:origin-[0%_0%] md:after:origin-[0%_0%]'>
                <img
                  className='h-[380px] md:h-[460px] lg:h-[596px] w-full object-cover object-center'
                  src={process.env.NEXT_PUBLIC_API_URL + s4[4]?.filec}
                  alt=''
                />
              </div>
            </div>
            <div className='basis-[47.88%] md:basis-[45%] lg:basis-[46%] xl:basis-[47%] 2xl:basis-[48%] flex items-center'>
              <div className='flex flex-col md:justify-center md:ml-auto gap-6 pb-16 py-8 px-4 md:max-w-[410px] lg:max-w-[567px] lg:pr-16'>
                <h2
                  className='text-3xl md:text-4xl lg:text-5xl text-black font-bold'
                  dangerouslySetInnerHTML={{
                    __html: s4[0]?.value
                  }}
                ></h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: s4[1]?.value
                  }}
                ></div>
                <div className='flex gap-4'>
                  <a
                    href={s4[2]?.link}
                    className='bg-black px-5 py-4 md:px-3 lg:px-9 md:py-4 font-bold text-base text-white hover:bg-primary ease-in duration-200 flex items-center justify-between'
                  >
                    <span
                      dangerouslySetInnerHTML={{
                        __html: s4[2]?.value
                      }}
                    ></span>
                    <img className='w-6 h-3 ml-3' src='images/btn-arrow.webp' alt='' />
                  </a>
                  <a
                    href={s4[3]?.link}
                    className='bg-primary px-5 py-4 md:px-3 lg:px-9 md:py-3 font-bold text-base text-white hover:bg-black ease-in duration-200 flex items-center justify-between'
                  >
                    <span
                      dangerouslySetInnerHTML={{
                        __html: s4[3]?.value
                      }}
                    ></span>
                    <img className='w-6 h-3 ml-3' src='images/btn-arrow.webp' alt='' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
