import React from 'react'

export default function BlockIntro({ data }: any) {
  // console.log(data)
  return (
    <section className='section-one-stop py-10 md:py-20'>
      <div className='px-4 sm:container'>
        <div className='text-center px-1 overflow-hidden'>
          <div className='text-2xl md:text-3xl mb-2'>{data?.top_title}</div>
          <div className='bg-black mx-6 md:mx-28 skew-y-[0] skew-x-[35deg] relative'>
            <div className='w-3 md:w-20 h-11 bg-primary absolute left-0 md:-left-24 bottom-0'></div>
            <div className='w-3 md:w-20 h-11 bg-primary absolute right-0 md:-right-24 top-0'></div>
            <h1 className='text-white text-xl/6 md:text-4xl font-bold -skew-x-[35deg] py-2 px-4'>{data?.title}</h1>
          </div>
          <div className='text-2xl md:text-3xl mb-2'>{data?.sub_title}</div>
          <div
            className='mt-10 max-w-6xl mx-auto'
            dangerouslySetInnerHTML={{
              __html: data?.paragraph
            }}
          />
        </div>
        {data?.button && <Button elements={data?.button} />}
      </div>
    </section>
  )
}

function Button({ elements }: any) {
  return (
    <div className='flex gap-4 justify-center mt-5'>
      {elements.map((element: any, i: number) => {
        if (element.red_color) {
          return (
            <a
              key={i}
              href={element.link}
              className='min-w-[6rem] text-center bg-primary px-5 py-4 md:px-3 lg:px-5 md:py-3 font-bold text-base text-white hover:bg-black ease-in duration-200 flex items-center justify-center'
            >
              <span>{element.name}</span>
            </a>
          )
        }
        return (
          <a
            key={i}
            href={element.link}
            className='min-w-[6rem] text-center bg-black px-5 py-4 md:px-3 lg:px-5 md:py-4 font-bold text-base text-white hover:bg-primary ease-in duration-200 flex items-center justify-center'
          >
            <span>{element.name}</span>
          </a>
        )
      })}
    </div>
  )
}
