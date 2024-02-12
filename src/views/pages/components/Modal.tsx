import { Close } from '@icon-park/react'
import { useClickOutside } from '@mantine/hooks'
import React, { useState } from 'react'
import PanelContent from '../edit/PanelContent'

export default function Modal({ modal, setModal, data }: any) {
  const ref = useClickOutside(() => setModal(false))
  return (
    modal && (
      <div className='overflow-hidden flex items-center justify-center h-screen w-screen bg-black/50 fixed top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 z-50'>
        <div
          ref={ref}
          className='container max-h-[90vh] overflow-y-auto flex flex-col items-center justify-center gap-3 rounded-md shadow-[0_3px_15px_rgb(0,0,0,0.4)] bg-white md:p-3'
        >
          {data?.map((item: any, i: number) => {
            return <PanelContent key={i} Data={item} />
          })}
          <button className='bg-red-500 py-2 px-10' onClick={() => setModal(false)}>
            <Close className='cursor-pointer' theme='outline' strokeWidth={2} size='25' fill='#fff' />
          </button>
        </div>
      </div>
    )
  )
}
