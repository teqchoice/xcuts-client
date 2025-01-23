import { Pencil } from '@icon-park/react'
import { select } from 'radash'
import React, { useState } from 'react'
import Modal from '../components/Modal'
import { user_info } from '@/extensions/redux/api/auth'
import Link from 'next/link'

export default function ProductSection({ data }: any) {
  // console.log(data)
  const [modal1, setModal1] = useState(false)
  const [modal2, setModal2] = useState(false)
  const [modal3, setModal3] = useState(false)

  // const t = select(
  //   data,
  //   item => item[0],
  //   item => item[0]?.title === 'Our Products'
  // )[0]
  // const s1 = data.find(arr => arr.some(obj => obj.title === 'Sliding Doors1'))
  // const s2 = data.find(arr => arr.some(obj => obj.title === 'Sliding Doors2'))
  // const s3 = data.find(arr => arr.some(obj => obj.title === 'Sliding Doors3'))
  // // const s3 = select(
  //   data,
  //   item => item,
  //   item => item[0]?.value === 'Sliding Doors3'
  // )[0]
  // console.log(s3)
  return (
    <section className='py-20'>
      <div className='px-4 lg:container max-w-full md:px-4 xl:px-16 xxl:px-32'>
        <div className='text-center'>
          <h2 className='font-normal text-5xl mb-14'>Our Products</h2>
        </div>

        <div className='flex md:flex-row flex-col space-y-4 md:space-y-0 md:space-x-2'>
          <div className='relative basis-[100%] md:basis-[33.333%] xl:basis-[33.333%]'>
            <div className='our__prdts__item relative overflow-hidden'>
              <img
                className='w-full h-96 md:h-[400px] xl:h-[709px] object-cover'
                src={`${process.env.NEXT_PUBLIC_API__URL_images}/${data?.pr1_poster?.id}/${data?.pr1_poster?.filename_download}`}
                alt=''
              />
              <div className='pr-11'>
                <div className='prdts__itembox bg-neutral-200 pb-16 absolute -bottom-full transition-all duration-1000'>
                  <div className='pt-8 px-7'>
                    <h4
                      className='text-black font-bold text-2xl mb-6'
                      dangerouslySetInnerHTML={{
                        __html: data?.pr_content1
                      }}
                    ></h4>
                    <div
                    // dangerouslySetInnerHTML={{
                    //   __html: select(
                    //     s1,
                    //     item => item?.value,
                    //     item => item?.title == 'content'
                    //   )[0]
                    // }}
                    ></div>
                  </div>
                </div>
                <div className='flex gap-0 justify-end absolute bottom-0 right-0 pr-1 lg:pr-11'>
                  <Link
                    href={data?.pr_bt_red1}
                    className='bg-primary px-3 py-4 md:px-3 md:py-4 font-bold text-base text-white hover:bg-black ease-in duration-200 flex items-center justify-between'
                  >
                    Shop
                    <img className='w-2 ml-2' src='../images/angle-arrow.webp' alt='' />
                  </Link>
                  <Link
                    href={data?.pr_bt_black1}
                    className='bg-black px-3 py-4 md:px-3 md:py-4 font-bold text-base text-white hover:bg-primary ease-in duration-200 flex items-center justify-between'
                  >
                    Find out more
                    <img className='w-2 ml-2' src='../images/angle-arrow.webp' alt='' />
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
              //  data={s1}
            />
          </div>

          <div className='relative basis-[100%] md:basis-[33.333%] xl:basis-[33.333%]'>
            <div className='our__prdts__item relative overflow-hidden'>
              <img
                className='w-full h-96 md:h-[400px] xl:h-[709px] object-cover'
                src={`${process.env.NEXT_PUBLIC_API__URL_images}/${data?.pr2_poster?.id}/${data?.pr2_poster?.filename_download}`}
                alt=''
              />
              <div className='pr-11'>
                <div className='prdts__itembox bg-neutral-200 pb-16 absolute -bottom-full transition-all duration-1000'>
                  <div className='pt-8 px-7'>
                    <h4
                      className='text-black font-bold text-2xl mb-6'
                      dangerouslySetInnerHTML={{
                        __html: data?.pr_content2
                      }}
                    ></h4>
                    <div
                    // dangerouslySetInnerHTML={{
                    //   __html: select(
                    //     s2,
                    //     item => item?.value,
                    //     item => item?.title == 'content'
                    //   )[0]
                    // }}
                    ></div>
                  </div>
                </div>
                <div className='flex gap-0 justify-end absolute bottom-0 right-0 pr-1 lg:pr-11'>
                  <Link
                    href={data?.pr_bt_red2}
                    className='bg-primary px-3 py-4 md:px-3 md:py-4 font-bold text-base text-white hover:bg-black ease-in duration-200 flex items-center justify-between'
                  >
                    Shop
                    <img className='w-2 ml-2' src='../images/angle-arrow.webp' alt='' />
                  </Link>
                  <Link
                    href={data?.pr_bt_black2}
                    className='bg-black px-3 py-4 md:px-3 md:py-4 font-bold text-base text-white hover:bg-primary ease-in duration-200 flex items-center justify-between'
                  >
                    Find out more
                    <img className='w-2 ml-2' src='../images/angle-arrow.webp' alt='' />
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

          <div className='relative basis-[100%] md:basis-[33.333%] xl:basis-[33.333%]'>
            <div className='our__prdts__item relative overflow-hidden'>
              <img
                className='w-full h-96 md:h-[400px] xl:h-[709px] object-cover'
                src={`${process.env.NEXT_PUBLIC_API__URL_images}/${data?.pr3_poster?.id}/${data?.pr3_poster?.filename_download}`}
                alt=''
              />
              <div className='pr-11'>
                <div className='prdts__itembox bg-neutral-200 pb-16 absolute -bottom-full transition-all duration-1000'>
                  <div className='pt-8 px-7'>
                    <h4
                      className='text-black font-bold text-2xl mb-6'
                      dangerouslySetInnerHTML={{
                        __html: data?.pr_content3
                      }}
                    ></h4>
                    <div
                    // dangerouslySetInnerHTML={{
                    //   __html: select(
                    //     s3,
                    //     item => item?.value,
                    //     item => item?.title == 'content'
                    //   )[0]
                    // }}
                    ></div>
                  </div>
                </div>
                <div className='flex gap-0 justify-end absolute bottom-0 right-0 pr-1 lg:pr-11'>
                  <Link
                    href={data?.pr_bt_red3}
                    className='bg-primary px-3 py-4 md:px-3 md:py-4 font-bold text-base text-white hover:bg-black ease-in duration-200 flex items-center justify-between'
                  >
                    Shop
                    <img className='w-2 ml-2' src='../images/angle-arrow.webp' alt='' />
                  </Link>
                  <Link
                    href={data?.pr_bt_black3}
                    className='bg-black px-3 py-4 md:px-3 md:py-4 font-bold text-base text-white hover:bg-primary ease-in duration-200 flex items-center justify-between'
                  >
                    Find out more
                    <img className='w-2 ml-2' src='../images/angle-arrow.webp' alt='' />
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
        </div>
      </div>
    </section>
  )
}
