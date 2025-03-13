import React from 'react'
import { Accordion } from '@mantine/core'

export default function FAQ({ data }: any) {
  if (!data?.length) return null

  return (
    <>
      <section>
        <div className='px-4 sm:container'>
          <div className='flex justify-center items-center flex-col my-16 '>
            <div className='text-center flex flex-col gap-3 md:w-[80%] w-full text-black mb-5'>
              <p className='text-base text-black'>
                for Spray Coating Services: Use our spray-painting service to its full potential!
              </p>
              <h4 className='md:text-[40px] text-2xl font-semibold mb-7'>FAQs:</h4>

              <Accordion variant='separated' className='w-full flex flex-col gap-5 ddddd'>
                {data?.map((item: any, index: number) => (
                  <Accordion.Item
                    value={(index + 1).toString()}
                    className='bg-slate-100 text-left p-4 rounded-md shadow-md'
                  >
                    <Accordion.Control className='text-left'>{item.question}</Accordion.Control>
                    <Accordion.Panel>{item.answer}</Accordion.Panel>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
