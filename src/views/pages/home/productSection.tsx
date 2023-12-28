import { select } from 'radash'
import React from 'react'

export default function ProductSection({ data }: any) {
  // console.log(data)

  const t = select(
    data,
    item => item[0],
    item => item[0]?.id === '73'
  )[0]
  const s1 = select(
    data,
    item => item,
    item => item[0]?.id === '74'
  )[0]
  const s2 = select(
    data,
    item => item,
    item => item[0]?.id === '75'
  )[0]
  const s3 = select(
    data,
    item => item,
    item => item[0]?.id === '76'
  )[0]
  // console.log(s1)
  return (
    <section className='py-20'>
      <div className='px-4 lg:container max-w-full md:px-4 xl:px-16 xxl:px-32'>
        <div className='text-center'>
          <h2 className='font-normal text-5xl mb-14'>{t.value}</h2>
        </div>

        <div className='flex md:flex-row flex-col space-y-4 md:space-y-0 md:space-x-2'>
          <div className='basis-[100%] md:basis-[33.333%] xl:basis-[33.333%]'>
            <div className='our__prdts__item relative overflow-hidden'>
              <img
                className='w-full h-96 md:h-[400px] xl:h-[709px] object-cover'
                src={process.env.NEXT_PUBLIC_API_URL + s1[4]?.filec}
                alt=''
              />
              <div className='pr-11'>
                <div className='prdts__itembox bg-neutral-200 pb-16 absolute -bottom-full transition-all duration-1000'>
                  <div className='pt-8 px-7'>
                    <h4
                      className='text-black font-bold text-2xl mb-6'
                      dangerouslySetInnerHTML={{
                        __html: s1[0]?.value
                      }}
                    ></h4>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: s1[1]?.value
                      }}
                    ></div>
                  </div>
                </div>
                <div className='flex gap-0 justify-end absolute bottom-0 right-0 pr-1 lg:pr-11'>
                  <a
                    href={s1[2]?.link}
                    className='bg-primary px-3 py-4 md:px-3 md:py-4 font-bold text-base text-white hover:bg-black ease-in duration-200 flex items-center justify-between'
                  >
                    <span
                      dangerouslySetInnerHTML={{
                        __html: s1[2]?.value
                      }}
                    ></span>
                    <img className='w-2 ml-2' src='images/angle-arrow.webp' alt='' />
                  </a>
                  <a
                    href={s1[3]?.link}
                    className='bg-black px-3 py-4 md:px-3 md:py-4 font-bold text-base text-white hover:bg-primary ease-in duration-200 flex items-center justify-between'
                  >
                    <span
                      dangerouslySetInnerHTML={{
                        __html: s1[3]?.value
                      }}
                    ></span>
                    <img className='w-2 ml-2' src='images/angle-arrow.webp' alt='' />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='basis-[100%] md:basis-[33.333%] xl:basis-[33.333%]'>
            <div className='our__prdts__item relative overflow-hidden'>
              <img
                className='w-full h-96 md:h-[400px] xl:h-[709px] object-cover'
                src={process.env.NEXT_PUBLIC_API_URL + s2[4]?.filec}
                alt=''
              />
              <div className='pr-11'>
                <div className='prdts__itembox bg-neutral-200 pb-16 absolute -bottom-full transition-all duration-1000'>
                  <div className='pt-8 px-7'>
                    <h4
                      className='text-black font-bold text-2xl mb-6'
                      dangerouslySetInnerHTML={{
                        __html: s2[0]?.value
                      }}
                    ></h4>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: s2[1]?.value
                      }}
                    ></div>
                  </div>
                </div>
                <div className='flex gap-0 justify-end absolute bottom-0 right-0 pr-1 lg:pr-11'>
                  <a
                    href={s2[2]?.link}
                    className='bg-primary px-3 py-4 md:px-3 md:py-4 font-bold text-base text-white hover:bg-black ease-in duration-200 flex items-center justify-between'
                  >
                    <span
                      dangerouslySetInnerHTML={{
                        __html: s2[2]?.value
                      }}
                    ></span>
                    <img className='w-2 ml-2' src='images/angle-arrow.webp' alt='' />
                  </a>
                  <a
                    href={s2[3]?.link}
                    className='bg-black px-3 py-4 md:px-3 md:py-4 font-bold text-base text-white hover:bg-primary ease-in duration-200 flex items-center justify-between'
                  >
                    <span
                      dangerouslySetInnerHTML={{
                        __html: s2[3]?.value
                      }}
                    ></span>
                    <img className='w-2 ml-2' src='images/angle-arrow.webp' alt='' />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='basis-[100%] md:basis-[33.333%] xl:basis-[33.333%]'>
            <div className='our__prdts__item relative overflow-hidden'>
              <img
                className='w-full h-96 md:h-[400px] xl:h-[709px] object-cover'
                src={process.env.NEXT_PUBLIC_API_URL + s3[4]?.filec}
                alt=''
              />
              <div className='pr-11'>
                <div className='prdts__itembox bg-neutral-200 pb-16 absolute -bottom-full transition-all duration-1000'>
                  <div className='pt-8 px-7'>
                    <h4
                      className='text-black font-bold text-2xl mb-6'
                      dangerouslySetInnerHTML={{
                        __html: s3[0]?.value
                      }}
                    ></h4>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: s3[1]?.value
                      }}
                    ></div>
                  </div>
                </div>
                <div className='flex gap-0 justify-end absolute bottom-0 right-0 pr-1 lg:pr-11'>
                  <a
                    href={s3[2]?.link}
                    className='bg-primary px-3 py-4 md:px-3 md:py-4 font-bold text-base text-white hover:bg-black ease-in duration-200 flex items-center justify-between'
                  >
                    <span
                      dangerouslySetInnerHTML={{
                        __html: s3[2]?.value
                      }}
                    ></span>
                    <img className='w-2 ml-2' src='images/angle-arrow.webp' alt='' />
                  </a>
                  <a
                    href={s3[3]?.link}
                    className='bg-black px-3 py-4 md:px-3 md:py-4 font-bold text-base text-white hover:bg-primary ease-in duration-200 flex items-center justify-between'
                  >
                    <span
                      dangerouslySetInnerHTML={{
                        __html: s3[3]?.value
                      }}
                    ></span>
                    <img className='w-2 ml-2' src='images/angle-arrow.webp' alt='' />
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
