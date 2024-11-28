import { Close, Pencil } from '@icon-park/react'
import { useClickOutside } from '@mantine/hooks'
import { select } from 'radash'
import React, { useState } from 'react'
import Modal from '../components/Modal'
import { user_info } from '@/extensions/redux/api/auth'

export default function AboutSection({ data }: any) {
  const [modal, setModal] = useState(false)
  // console.log(data)
  // console.log(
  //   select(
  //     data[0],
  //     item => item?.value,
  //     item => item?.title == 'XCUTS'
  //   )[0]
  // )

  return (
    <section className='relative py-10 md:pb-20 md:pt-6'>
      {user_info?.role === 'admin' && process.env.NEXT_PUBLIC_ADMIN_SHOW === 'true' && (
        <div className='cursor-pointer flex items-center justify-center bg-primary border border-white p-4 w-fit absolute left-0 top-0'>
          <Pencil theme='outline' size='27' fill='#fff' className='cursor-pointer' onClick={() => setModal(true)} />
        </div>
      )}
      <div className='px-4 sm:container'>
        <div className='text-center px-1 overflow-hidden'>
          {/* <div
            className='text-2xl md:text-4xl'
            dangerouslySetInnerHTML={{
              __html: select(
                data[0],
                item => item?.value,
                item => item?.title == 'XCUTS'
              )[0]
            }}
          ></div> */}
          <div className='text-3xl md:text-5xl font-medium text-black'>
            {/* <span className='text-primary'>X</span>CUTS */}
            {/* Furniture Boards Cut and Edged */}
            {data?.top_title}
          </div>
          <div className='bg-black mx-6 md:mx-28 skew-y-[0] skew-x-[35deg] relative'>
            <div className='w-3 md:w-20 h-11 bg-primary absolute left-0 md:-left-24 bottom-0'></div>
            <div className='w-3 md:w-20 h-11 bg-primary absolute right-0 md:-right-24 top-0'></div>
            <h1
              className='text-white text-lg md:text-xl lg:text-3xl xl:text-5xl font-semibold -skew-x-[35deg] py-3 uppercase px-5'
              // dangerouslySetInnerHTML={{
              //   __html: select(
              //     data[0],
              //     item => item?.value,
              //     item => item?.title == 'ONE-STOP'
              //   )[0]
              // }}
            >
              {/* XCuts: Trustworthy, Efficient & Fast. */}
              {data?.title}
            </h1>
          </div>
          {/* <div className='flex flex-col gap-y-1 mt-10 text-lg'> */}
          {/* Xcuts offers a wide range of services and products to meet the needs of bespoke carpenters, interior
            designers, general builders, and DIYers. We are purveyors of the highest-quality furniture boards available
            and are committed to providing the best solutions for furniture panel cut-to-size, edgebanding, spray
            painting, and CNC milling. */}
          {/* </div> */}
          <div className='flex flex-col gap-y-1 mt-10 text-lg' dangerouslySetInnerHTML={{ __html: data?.content }} />
          {/* <div className='flex flex-col gap-y-1 mt-3 text-lg'>Get in touch today to learn more about us.</div> */}

          <div className='mt-5 text-center flex justify-center'>
            <a
              href='#'
              className='bg-black  px-3 py-4 md:px-5  lg:px-9 md:py-4 font-medium text-lg md:text-2xl text-white hover:bg-primary ease-in duration-200 flex items-center justify-between'
            >
              {data?.button}
            </a>
          </div>
        </div>
      </div>
      <Modal
        modal={modal}
        setModal={setModal}
        // data={data[0]}
      />
    </section>
  )
}
