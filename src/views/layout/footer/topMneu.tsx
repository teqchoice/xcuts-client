import { user_info } from '@/extensions/redux/api/auth'
import Modal from '@/views/pages/components/Modal'
import { Pencil } from '@icon-park/react'
import Image from 'next/image'
import { select } from 'radash'
import React, { useState } from 'react'

export default function TopMneu({ data }: any) {
  const [modal1, setModal1] = useState(false)
  const [modal2, setModal2] = useState(false)
  const [modal3, setModal3] = useState(false)
  // console.log(user_info?.role === 'admin' && process.env.NEXT_PUBLIC_ADMIN_SHOW === 'true')
  // console.log(data.find(arr => arr.some(obj => obj.title === 'Contact Details')))
  // const datafilter = data?.find(
  //   arr =>
  //     select(
  //       arr,
  //       item => item,
  //       item => item.title === 'Contact Details'
  //     )[0]
  // )
  // console.log(
  //   select(
  //     datafilter,
  //     item => item,
  //     item => item.title === 'Contact Details'
  //   )[0]?.value
  // )
  return (
    <div className='ftr__title__grid relative md:pt-20 pt-7 md:pb-10 pb-4'>
      <div className='w-20 h-[0.35rem] mb-2 bg-primary'></div>
      <h4 className='md:text-2xl text-xl font-semibold text-white md:mb-8 mb-2'>
        {/* {
          select(
            datafilter,
            item => item,
            item => item.title === 'Contact Details'
          )[0]?.value
        } */}
        {/* {Object?.keys(data).find(arr => arr === 'contact_menu')} */}
        Contact Details
      </h4>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8'>
        <div className='relative bg-neutral-400 text-center px-3 lg:p-5 flex flex-col justify-center md:align-middle md:min-h-[213px] min-h-[120px]'>
          <Image
            className='md:w-[39px] md:h-[49px] w-[20px] h-[25px] ml-auto mr-auto md:mb-6 mb-2'
            src='/images/map-icon.webp'
            alt=''
            width={39}
            height={49}
          />
          <p className='text-white xxl:px-16 md:text-base text-[12px]'>
            {/* {
              select(
                datafilter,
                item => item,
                item => item.title === 'address'
              )[0]?.value
            } */}
            {data?.contact_menu[0].link}
          </p>
          {user_info?.role === 'admin' && process.env.NEXT_PUBLIC_ADMIN_SHOW === 'true' && (
            <div className='cursor-pointer flex items-center justify-center bg-primary border border-white p-4 w-fit absolute left-0 top-0'>
              <Pencil
                theme='outline'
                size='10'
                fill='#fff'
                className='cursor-pointer'
                onClick={() => setModal1(true)}
              />
            </div>
          )}

          <Modal
            modal={modal1}
            setModal={setModal1}
            data={data?.contact_menu[0].link}
            // data={select(
            //   datafilter,
            //   item => item,
            //   item => item.title === 'address'
            // )}
          />
        </div>
        <div className='relative bg-neutral-400 text-center lg:p-5 flex flex-col justify-center align-middle md:min-h-[213px] min-h-[120px]'>
          <Image
            className='md:w-[57px] md:h-[41px] w-[30px] h-[20px] ml-auto mr-auto md:mb-6 mb-2'
            src='/images/envelop-icon.webp'
            alt=''
            width={57}
            height={41}
          />

          <a href='mailto:hello@xcuts.co.uk' className='text-white md:text-base text-[12px] xxl:px-16'>
            {/* {
              select(
                datafilter,
                item => item,
                item => item.title === 'email'
              )[0]?.value
            } */}
            {data?.contact_menu[1].link}
          </a>
          {user_info?.role === 'admin' && process.env.NEXT_PUBLIC_ADMIN_SHOW === 'true' && (
            <div className='cursor-pointer flex items-center justify-center bg-primary border border-white p-4 w-fit absolute left-0 top-0'>
              <Pencil
                theme='outline'
                size='10'
                fill='#fff'
                className='cursor-pointer'
                onClick={() => setModal2(true)}
              />
            </div>
          )}

          <Modal
            modal={modal2}
            setModal={setModal2}
            // data={select(
            //   datafilter,
            //   item => item,
            //   item => item.title === 'email'
            // )}
          />
        </div>
        <div className='relative bg-neutral-400 col-span-2 md:col-span-1 text-center lg:p-5 flex flex-col justify-center align-middle md:min-h-[213px] min-h-[80px]'>
          <Image
            className='md:w-[43px] w-[20px] md:h-[43px] h-[20px] ml-auto mr-auto md:mb-6 mb-2'
            src='/images/phone-ftr-icon.webp'
            alt=''
            width={43}
            height={43}
          />
          <a href='tel:+44(0)1707907000' className='text-white md:text-base text-[12px] xxl:px-16'>
            {/* {
              select(
                datafilter,
                item => item,
                item => item.title === 'phone'
              )[0]?.value
            } */}
            {data?.contact_menu[2].link}
          </a>
          {user_info?.role === 'admin' && process.env.NEXT_PUBLIC_ADMIN_SHOW === 'true' && (
            <div className='cursor-pointer flex items-center justify-center bg-primary border border-white p-4 w-fit absolute left-0 top-0'>
              <Pencil
                theme='outline'
                size='10'
                fill='#fff'
                className='cursor-pointer'
                onClick={() => setModal3(true)}
              />
            </div>
          )}
          <Modal
            modal={modal3}
            setModal={setModal3}
            // data={select(
            //   datafilter,
            //   item => item,
            //   item => item.title === 'phone'
            // )}
          />
        </div>
      </div>
    </div>
  )
}
