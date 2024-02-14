import Modal from '@/views/pages/components/Modal'
import { Pencil } from '@icon-park/react'
import { select } from 'radash'
import React, { useState } from 'react'

export default function TopMneu({ data }: any) {
  const [modal1, setModal1] = useState(false)
  const [modal2, setModal2] = useState(false)
  const [modal3, setModal3] = useState(false)
  console.log(data)
  // console.log(data.find(arr => arr.some(obj => obj.title === 'Contact Details')))
  const datafilter = data?.find(
    arr =>
      select(
        arr,
        item => item,
        item => item.title === 'Contact Details'
      )[0]
  )
  // console.log(
  //   select(
  //     datafilter,
  //     item => item,
  //     item => item.title === 'Contact Details'
  //   )[0]?.value
  // )
  return (
    <div className='ftr__title__grid relative pt-20 pb-10'>
      <h4 className='text-2xl font-semibold text-white mb-8'>
        {
          select(
            datafilter,
            item => item,
            item => item.title === 'Contact Details'
          )[0]?.value
        }
      </h4>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8'>
        <div className='relative bg-neutral-400 text-center px-3 lg:p-5 flex flex-col justify-center align-middle min-h-[213px]'>
          <img className='w-[39px] h-[49px] ml-auto mr-auto mb-6' src='images/map-icon.webp' alt='' />
          <p className='text-white xxl:px-16'>
            {
              select(
                datafilter,
                item => item,
                item => item.title === 'address'
              )[0]?.value
            }
          </p>
          <div className='cursor-pointer flex items-center justify-center bg-primary border border-white p-4 w-fit absolute left-0 top-0'>
            <Pencil theme='outline' size='10' fill='#fff' className='cursor-pointer' onClick={() => setModal1(true)} />
          </div>
          <Modal
            modal={modal1}
            setModal={setModal1}
            data={select(
              datafilter,
              item => item,
              item => item.title === 'address'
            )}
          />
        </div>
        <div className='relative bg-neutral-400 text-center lg:p-5 flex flex-col justify-center align-middle min-h-[213px]'>
          <img className='w-[57px] h-[41px] ml-auto mr-auto mb-6' src='images/envelop-icon.webp' alt='' />
          <a href='mailto:hello@xcuts.co.uk' className='text-white xxl:px-16'>
            {
              select(
                datafilter,
                item => item,
                item => item.title === 'email'
              )[0]?.value
            }
          </a>
          <div className='cursor-pointer flex items-center justify-center bg-primary border border-white p-4 w-fit absolute left-0 top-0'>
            <Pencil theme='outline' size='10' fill='#fff' className='cursor-pointer' onClick={() => setModal2(true)} />
          </div>
          <Modal
            modal={modal2}
            setModal={setModal2}
            data={select(
              datafilter,
              item => item,
              item => item.title === 'email'
            )}
          />
        </div>
        <div className='relative bg-neutral-400 col-span-2 md:col-span-1 text-center lg:p-5 flex flex-col justify-center align-middle min-h-[213px]'>
          <img className='w-[43px] h-[43px] ml-auto mr-auto mb-6' src='images/phone-ftr-icon.webp' alt='' />
          <a href='tel:+44(0)1707907000' className='text-white xxl:px-16'>
            {
              select(
                datafilter,
                item => item,
                item => item.title === 'phone'
              )[0]?.value
            }
          </a>
          <div className='cursor-pointer flex items-center justify-center bg-primary border border-white p-4 w-fit absolute left-0 top-0'>
            <Pencil theme='outline' size='10' fill='#fff' className='cursor-pointer' onClick={() => setModal3(true)} />
          </div>
          <Modal
            modal={modal3}
            setModal={setModal3}
            data={select(
              datafilter,
              item => item,
              item => item.title === 'phone'
            )}
          />
        </div>
      </div>
    </div>
  )
}
