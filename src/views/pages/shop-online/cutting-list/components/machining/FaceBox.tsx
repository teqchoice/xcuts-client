import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { useMachiningStore } from '../store/machiningOptionsStore'
const FaceBox = () => {
  const { currentMachiningOption } = useMachiningStore()

  const isBack = currentMachiningOption?.type === 'angled-cut' ? currentMachiningOption?.options.view === 'back' : false

  return (
    <div className='flex flex-col'>
      <span className='absolute bottom-[110px] left-2.5 text-[13px]'>Panel shows</span>
      <div className='relative'>
        <Image
          src={'/images/machining/front-face.svg'}
          width={90}
          height={90}
          alt=''
          className={`${!isBack ? 'opacity-100' : 'opacity-0'} absolute bottom-4 left-2.5 transition-all duration-500`}
          style={{
            transform: isBack ? 'rotateX(180deg)' : '',
            transformOrigin: 'center center'
          }}
        />
        <Image
          src={'/images/machining/back-face.svg'}
          width={90}
          height={90}
          alt=''
          className={`${isBack ? 'opacity-100' : 'opacity-0'} absolute bottom-4 left-2.5 transition-all duration-500`}
          style={{
            transform: !isBack ? 'rotateX(180deg)' : '',
            transformOrigin: 'center center'
          }}
        />
      </div>
    </div>
  )
}

export default FaceBox
