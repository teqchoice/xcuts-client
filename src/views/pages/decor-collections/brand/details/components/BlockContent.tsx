import React from 'react'

export default function BlockContent({ data }: any) {
  // console.log(data)
  return (
    <section className={data?.red_background ? `bg-primary py-16 text-white` : `py-16`}>
      <div className='px-4 sm:container'>
        <div className=' flex justify-center items-center flex-col'>
          <div className='text-center max-w-6xl'>
            <p className='text-3xl'>{data?.top_title}</p>
            <h4 className='md:text-4xl text-3xl font-semibold my-3'>{data?.title}</h4>
            <p className='text-2xl mb-3'>{data?.sub_title}</p>
            <div
              dangerouslySetInnerHTML={{
                __html: data?.content
              }}
            />
          </div>
          {data?.button && <Button elements={data?.button} />}
        </div>
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
