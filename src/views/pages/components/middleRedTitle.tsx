import React from 'react'

export default function MiddleRedTitle({ title }: any) {
  return (
    <section className='bg-primary py-11'>
      <div className=' sm:container flex justify-center'>
        <div className='text-center skew-y-0 skew-x-[35deg] relative'>
          <div className='w-10 h-9 md:w-14 bg-white absolute -left-14 md:-left-24 bottom-0'></div>
          <div className='w-10 h-9 md:w-14 bg-white absolute -right-14 md:-right-24 top-0'></div>
          <h2 className='text-2xl md:text-4xl text-white -skew-x-[35deg]'>{title}</h2>
        </div>
      </div>
    </section>
  )
}
