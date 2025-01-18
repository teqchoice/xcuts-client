import Image from 'next/image'
import React from 'react'

type TPageIntroduction = {
  title: string
  baner: string
}

const defaultPageIntroduction: Partial<TPageIntroduction> = {
  title: 'Page Name',
  baner: '/images/sliding-doors-banner.webp'
}

export default function PageIntroduction(data: any, props: any) {
  const Data = { title: 'Wardrobe Sliding Doors', baner: '/images/sliding-doors-banner.webp' }

  return (
    <section
      className={
        Data?.baner ?? null
          ? 'relative'
          : 'relative text-center bg-[#eaeaea] h-[200px] flex items-center justify-center'
      }
    >
      {Data?.baner && (
        <Image
          src={Data?.baner}
          alt='baner'
          className='max-h-[460px] w-full md:h-auto h-[200px] object-cover'
          width={2000}
          height={460}
        />
      )}

      <div className='absolute top-1/2 w-full -translate-y-1/2 text-center grid'>
        {Data?.baner ?? null ? (
          <>
            <h4 className='font-semibold text-white text-2xl md:text-4xl lg:text-6xl uppercase'>{data?.data?.title}</h4>
          </>
        ) : (
          <h4 className='font-semibold text-2xl md:text-4xl lg:text-6xl uppercase'>{Data?.title}</h4>
        )}
      </div>
    </section>
  )
}
