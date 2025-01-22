import React, { useState } from 'react'
import MiddleRedTitle from '@/views/pages/components/middleRedTitle'
import { select } from 'radash'
import Modal from '../components/Modal'
import { Pencil } from '@icon-park/react'
import { user_info } from '@/extensions/redux/api/auth'
import Link from 'next/link'

export default function ServicesSection({ data }: any) {
  // console.log(data)
  const [modal1, setModal1] = useState(false)
  const [modal2, setModal2] = useState(false)
  const [modal3, setModal3] = useState(false)
  const [modal4, setModal4] = useState(false)

  // const t = select(
  //   data,
  //   item => item[0],
  //   item => item[0]?.title === 'Our Services'
  // )[0]
  // const s1 = select(
  //   data,
  //   item => item,
  //   item => item[0]?.value === 'Panel edgebanding'
  // )[0]
  // const s2 = select(
  //   data,
  //   item => item,
  //   item => item[0]?.value === 'CNC cutting'
  // )[0]
  // const s3 = select(
  //   data,
  //   item => item,
  //   item => item[0]?.value == 'Panels cut to size'
  // )[0]
  // const s4 = select(
  //   data,
  //   item => item,
  //   item => item[0]?.value === 'Spray painting'
  // )[0]
  // console.log(s3)

  console.log(data)

  return (
    <section className='relative'>
      <MiddleRedTitle title='Our Services' />

      <div className='bg-neutral-100'>
        <div className=''>
          <div className='relative md:flex'>
            <div className='basis-[52.12%] md:basis-[55%] lg:basis-[54%] xl:basis-[53%] 2xl:basis-[52.2%]'>
              <div>
                <div className='relative overflow-hidden w-full bg-neutral-100 before:absolute before:content-normal before:-bottom-[1px] before:w-1/2 before:bg-inherit before:right-1/2 before:skew-x-[40deg] before:pb-7 before:origin-[100%_100%] after:absolute after:content-normal after:bottom-0 after:w-1/2 after:bg-inherit after:left-1/2 after:-skew-x-[40deg] after:pb-7 after:origin-[100%_100%] md:before:w-10 md:before:h-1/2 md:before:top-0 md:before:bottom-auto md:before:right-0 md:before:skew-x-[0deg] md:before:skew-y-[40deg] md:after:w-10 md:after:h-1/2 md:after:bottom-0 md:after:right-0 md:after:left-auto md:after:skew-x-[0deg] md:after:-skew-y-[40deg]'>
                  {/* <img
                    className='md:h-[460px] lg:h-[596px] w-full object-cover object-center'
                    src={'images/img-1.jpeg'}
                    alt=''
                  /> */}
                  <video
                    className='h-[380px] md:h-[460px] lg:h-[596px] w-full object-cover object-center'
                    src={`${process.env.NEXT_PUBLIC_API__URL_images}/${data?.s_poster1?.id}/${data?.s_poster1?.filename_download}`}
                    width='100%'
                    height='auto'
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
                    playsInline
                    autoPlay
                    muted
                    preload='auto'
                  ></video>
                </div>
              </div>
            </div>
            <div className='basis-[47.88%]  md:basis-[45%] lg:basis-[46%] xl:basis-[47%] 2xl:basis-[48%] flex items-center'>
              <div className='flex flex-col md:justify-center gap-6 pb-16 py-8 px-4 md:max-w-[410px] lg:max-w-[567px] lg:pl-16'>
                <h2
                  className='text-3xl md:text-4xl lg:text-5xl text-black font-bold'
                  dangerouslySetInnerHTML={{
                    __html: data?.s_name1
                  }}
                ></h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data?.s_content1
                  }}
                >
                  {/* Select any decor boards from highly-regarded panel board brands, and we’ll cut them to size to your
                  exact specifications. */}
                </div>
                <div className='flex gap-4'>
                  <Link
                    href={data?.bt_find2}
                    className='bg-black px-5 py-4 md:px-3 lg:px-5 md:py-4 font-bold text-base text-white hover:bg-primary ease-in duration-200 flex items-center justify-between'
                  >
                    <span>Find out more</span>
                    <img className='w-6 h-3 ml-3' src='../images/btn-arrow.webp' alt='' />
                  </Link>
                  <Link
                    href={data?.bt_shop1}
                    className='bg-primary px-5 py-4 md:px-3 lg:px-5 md:py-3 font-bold text-base text-white hover:bg-black ease-in duration-200 flex items-center justify-between'
                  >
                    <span>Shop</span>
                    <img className='w-6 h-3 ml-3' src='../images/btn-arrow.webp' alt='' />
                  </Link>
                </div>
              </div>
            </div>
            {user_info?.role === 'admin' && process.env.NEXT_PUBLIC_ADMIN_SHOW === 'true' && (
              <div className='cursor-pointer flex items-center justify-center bg-primary border border-white p-4 w-fit absolute left-0 top-0'>
                <Pencil
                  theme='outline'
                  size='27'
                  fill='#fff'
                  className='cursor-pointer'
                  onClick={() => setModal1(true)}
                />
              </div>
            )}
            <Modal
              modal={modal1}
              setModal={setModal1}
              // data={s1}
            />
          </div>

          <div className='relative md:flex'>
            <div className='basis-[52.12%] md:basis-[55%] lg:basis-[54%] xl:basis-[53%] 2xl:basis-[52.2%] order-1'>
              <div className='relative overflow-hidden w-full bg-neutral-100 before:absolute before:content-normal before:bottom-0 before:w-1/2 before:bg-inherit before:right-1/2 before:skew-x-[40deg] before:pb-7 before:origin-[100%_100%] after:absolute after:content-normal after:bottom-0 after:w-1/2 after:bg-inherit after:left-1/2 after:-skew-x-[40deg] after:pb-7 after:origin-[100%_100%] md:before:w-10 md:before:h-1/2 md:before:top-0 md:before:bottom-auto md:before:right-auto md:before:skew-x-[0deg] md:before:-skew-y-[40deg] md:after:w-10 md:after:h-1/2 md:after:bottom-0 md:after:right-auto md:after:left-0 md:after:skew-x-[0deg] md:after:skew-y-[40deg] md:before:origin-[0%_0%] md:after:origin-[0%_0%]'>
                {/* <img
                  className='h-[380px] md:h-[460px] lg:h-[596px] w-full object-cover object-center'
                  src={'images/img-4.webp'}
                  alt=''
                /> */}
                <video
                  className='h-[380px] md:h-[460px] lg:h-[596px] w-full object-cover object-center'
                  src={`${process.env.NEXT_PUBLIC_API__URL_images}/${data?.s_poster2?.id}/${data?.s_poster2?.filename_download}`}
                  width='100%'
                  height='auto'
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
                  playsInline
                  autoPlay
                  muted
                  preload='auto'
                ></video>
              </div>
            </div>
            <div className='basis-[47.88%]  md:basis-[45%] lg:basis-[46%] xl:basis-[47%] 2xl:basis-[48%] flex items-center'>
              <div className='flex flex-col md:justify-center md:ml-auto gap-6 pb-16 py-8 px-4 md:max-w-[410px] lg:max-w-[567px] lg:pr-16'>
                <h2 className='text-3xl md:text-4xl lg:text-5xl text-black font-bold'>{data?.s_name2}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data?.s_content2
                  }}
                >
                  {/* Easily select which panel needs to be edged; we can use the latest machinery and PUR glue to confirm
                  the cleanest edge for your furniture panels. */}
                </div>
                <div className='flex gap-4'>
                  <a
                    href={data?.bt_find1}
                    className='bg-black px-5 py-4 md:px-3 lg:px-5 md:py-4 font-bold text-base text-white hover:bg-primary ease-in duration-200 flex items-center justify-between'
                  >
                    <span>Find out more</span>
                    <img className='w-6 h-3 ml-3' src='../images/btn-arrow.webp' alt='' />
                  </a>
                  <a
                    href={data?.bt_shop2}
                    className='bg-primary px-5 py-4 md:px-3 lg:px-5 md:py-3 font-bold text-base text-white hover:bg-black ease-in duration-200 flex items-center justify-between'
                  >
                    <span>Shop</span>
                    <img className='w-6 h-3 ml-3' src='../images/btn-arrow.webp' alt='' />
                  </a>
                </div>
              </div>
            </div>
            {user_info?.role === 'admin' && process.env.NEXT_PUBLIC_ADMIN_SHOW === 'true' && (
              <div className='cursor-pointer flex items-center justify-center bg-primary border border-white p-4 w-fit absolute left-0 top-0'>
                <Pencil
                  theme='outline'
                  size='27'
                  fill='#fff'
                  className='cursor-pointer'
                  onClick={() => setModal2(true)}
                />
              </div>
            )}
            <Modal
              modal={modal2}
              setModal={setModal2}
              // data={s2}
            />
          </div>

          <div className='relative md:flex'>
            <div className='basis-[52.12%] md:basis-[55%] lg:basis-[54%] xl:basis-[53%] 2xl:basis-[52.2%]'>
              <div>
                <div className='relative overflow-hidden w-full bg-neutral-100 before:absolute before:content-normal before:bottom-0 before:w-1/2 before:bg-inherit before:right-1/2 before:skew-x-[40deg] before:pb-7 before:origin-[100%_100%] after:absolute after:content-normal after:bottom-0 after:w-1/2 after:bg-inherit after:left-1/2 after:-skew-x-[40deg] after:pb-7 after:origin-[100%_100%] md:before:w-10 md:before:h-1/2 md:before:top-0 md:before:bottom-auto md:before:right-0 md:before:skew-x-[0deg] md:before:skew-y-[40deg] md:after:w-10 md:after:h-1/2 md:after:bottom-0 md:after:right-0 md:after:left-auto md:after:skew-x-[0deg] md:after:-skew-y-[40deg]'>
                  {/* <img
                    className='h-[380px] md:h-[460px] lg:h-[596px] w-full object-cover object-center'
                    src={'images/img-2.jpeg'}
                    alt=''
                  /> */}
                  <video
                    className='h-[380px] md:h-[460px] lg:h-[596px] w-full object-cover object-center'
                    src={`${process.env.NEXT_PUBLIC_API__URL_images}/${data?.s_poster3?.id}/${data?.s_poster3?.filename_download}`}
                    width='100%'
                    height='auto'
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
                    playsInline
                    autoPlay
                    muted
                    preload='auto'
                  ></video>
                </div>
              </div>
            </div>
            <div className='basis-[47.88%]  md:basis-[45%] lg:basis-[46%] xl:basis-[47%] 2xl:basis-[48%] flex items-center'>
              <div className='flex flex-col md:justify-center gap-6 pb-16 py-8 px-4 md:max-w-[410px] lg:max-w-[567px] lg:pl-16'>
                <h2 className='text-3xl md:text-4xl lg:text-5xl text-black font-bold'>{data?.s_name3}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data?.s_content3
                  }}
                >
                  {/* You can save time by using our CNC service hinge holes, shelf holes, panel grooving, and decorative
                  patterns on your furniture boards. */}
                </div>
                <div className='flex gap-4'>
                  <a
                    href={data?.bt_find3}
                    className='bg-black px-5 py-4 md:px-3 lg:px-5 md:py-4 font-bold text-base text-white hover:bg-primary ease-in duration-200 flex items-center justify-between'
                  >
                    <span>Find out more</span>
                    <img className='w-6 h-3 ml-3' src='../images/btn-arrow.webp' alt='' />
                  </a>
                  <a
                    href={data?.bt_shop3}
                    className='bg-primary px-5 py-4 md:px-3 lg:px-5 md:py-3 font-bold text-base text-white hover:bg-black ease-in duration-200 flex items-center justify-between'
                  >
                    <span>Shop</span>
                    <img className='w-6 h-3 ml-3' src='../images/btn-arrow.webp' alt='' />
                  </a>
                </div>
              </div>
            </div>
            {user_info?.role === 'admin' && process.env.NEXT_PUBLIC_ADMIN_SHOW === 'true' && (
              <div className='cursor-pointer flex items-center justify-center bg-primary border border-white p-4 w-fit absolute left-0 top-0'>
                <Pencil
                  theme='outline'
                  size='27'
                  fill='#fff'
                  className='cursor-pointer'
                  onClick={() => setModal3(true)}
                />
              </div>
            )}
            <Modal
              modal={modal3}
              setModal={setModal3}
              //  data={s3}
            />
          </div>

          <div className='relative md:flex'>
            <div className='basis-[53.12%] md:basis-[55%] lg:basis-[54%] xl:basis-[53%] 2xl:basis-[52.2%] order-1'>
              <div className='relative overflow-hidden w-full bg-neutral-100 before:absolute before:content-normal before:bottom-0 before:w-1/2 before:bg-inherit before:right-1/2 before:skew-x-[40deg] before:pb-7 before:origin-[100%_100%] after:absolute after:content-normal after:bottom-0 after:w-1/2 after:bg-inherit after:left-1/2 after:-skew-x-[40deg] after:pb-7 after:origin-[100%_100%] md:before:w-10 md:before:h-1/2 md:before:top-0 md:before:bottom-auto md:before:right-auto md:before:skew-x-[0deg] md:before:-skew-y-[40deg] md:after:w-10 md:after:h-1/2 md:after:bottom-0 md:after:right-auto md:after:left-0 md:after:skew-x-[0deg] md:after:skew-y-[40deg] md:before:origin-[0%_0%] md:after:origin-[0%_0%]'>
                {/* <img
                  className='h-[380px] md:h-[460px] lg:h-[596px] w-full object-cover object-center'
                  src={'images/spray-painting.webp'}
                  alt=''
                /> */}
                <video
                  className='h-[380px] md:h-[460px] lg:h-[596px] w-full object-cover object-center'
                  src={`${process.env.NEXT_PUBLIC_API__URL_images}/${data?.s_poster4?.id}/${data?.s_poster4?.filename_download}`}
                  width='100%'
                  height='auto'
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
                  playsInline
                  autoPlay
                  muted
                  preload='auto'
                ></video>
              </div>
            </div>
            <div className='basis-[47.88%] md:basis-[45%] lg:basis-[46%] xl:basis-[47%] 2xl:basis-[48%] flex items-center'>
              <div className='flex flex-col md:justify-center md:ml-auto gap-6 pb-16 py-8 px-4 md:max-w-[410px] lg:max-w-[567px] lg:pr-16'>
                <h2 className='text-3xl md:text-4xl lg:text-5xl text-black font-bold'>{data?.s_name4}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data?.s_content4
                  }}
                >
                  {/* Personalise your MDF, plywood and veneer furniture boards further by spray coating with MDF primer,
                  coloured paint, or clear lacquer. */}
                </div>
                <div className='flex gap-4'>
                  <a
                    href={data?.bt_find4}
                    className='bg-black px-5 py-4 md:px-3 lg:px-5 md:py-4 font-bold text-base text-white hover:bg-primary ease-in duration-200 flex items-center justify-between'
                  >
                    <span>Find out more</span>
                    <img className='w-6 h-3 ml-3' src='../images/btn-arrow.webp' alt='' />
                  </a>
                  <a
                    href={data?.bt_shop4}
                    className='bg-primary px-5 py-4 md:px-3 lg:px-5 md:py-3 font-bold text-base text-white hover:bg-black ease-in duration-200 flex items-center justify-between'
                  >
                    <span>Shop</span>
                    <img className='w-6 h-3 ml-3' src='../images/btn-arrow.webp' alt='' />
                  </a>
                </div>
              </div>
            </div>
            {user_info?.role === 'admin' && process.env.NEXT_PUBLIC_ADMIN_SHOW === 'true' && (
              <div className='cursor-pointer flex items-center justify-center bg-primary border border-white p-4 w-fit absolute left-0 top-0'>
                <Pencil
                  theme='outline'
                  size='27'
                  fill='#fff'
                  className='cursor-pointer'
                  onClick={() => setModal4(true)}
                />
              </div>
            )}
            <Modal
              modal={modal4}
              setModal={setModal4}
              //  data={s4}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
