import Image from 'next/image'
import React from 'react'

const GrainBox = () => {
  return (
    <div className='absolute top-2.5 left-2.5 flex flex-col'>
      <span className='text-[13px]'>Grain direction</span>
      <Image src={'/images/machining/grain.svg'} alt='' width={90} height={90} />
    </div>
  )
}

export default GrainBox
