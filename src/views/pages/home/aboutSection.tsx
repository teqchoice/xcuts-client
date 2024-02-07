import { Close, Pencil } from '@icon-park/react'
import { useClickOutside } from '@mantine/hooks'
import { select } from 'radash'
import React, { useState } from 'react'
import Modal from '../components/Modal'

export default function AboutSection({ data }: any) {
  const [modal, setModal] = useState(false)
  console.log(data)
  console.log(
    select(
      data[0],
      item => item?.value,
      item => item?.title == 'XCUTS'
    )[0]
  )

  return (
    <section className='relative py-10 md:py-20'>
      <div className='px-4 sm:container'>
        <div className='text-center px-1 overflow-hidden'>
          <div
            className='text-2xl md:text-4xl'
            dangerouslySetInnerHTML={{
              __html: select(
                data[0],
                item => item?.value,
                item => item?.title == 'XCUTS'
              )[0]
            }}
          ></div>
          <div className='flex items-center justify-center bg-primary border border-white p-4 w-fit absolute left-0 top-0'>
            <Pencil theme='outline' size='27' fill='#fff' className='' onClick={() => setModal(true)} />
          </div>
          <div className='bg-black mx-6 md:mx-28 skew-y-[0] skew-x-[35deg] relative'>
            <div className='w-3 md:w-20 h-11 bg-primary absolute left-0 md:-left-24 bottom-0'></div>
            <div className='w-3 md:w-20 h-11 bg-primary absolute right-0 md:-right-24 top-0'></div>
            <h1
              className='text-white text-lg md:text-xl xl:text-2xl font-bold -skew-x-[35deg] py-3 uppercase px-5'
              dangerouslySetInnerHTML={{
                __html: select(
                  data[0],
                  item => item?.value,
                  item => item?.title == 'ONE-STOP'
                )[0]
              }}
            ></h1>
          </div>
          <div
            className='flex flex-col gap-y-3 text-black-1d mt-10'
            dangerouslySetInnerHTML={{
              __html: data[0][2].value
            }}
          ></div>
        </div>
      </div>
      <Modal modal={modal} setModal={setModal} data={data} />
    </section>
  )
}
