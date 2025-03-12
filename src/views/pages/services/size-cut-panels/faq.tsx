import React from 'react'
import classes from './FaqSimple.module.css'
import { Down } from '@icon-park/react'
import { Accordion } from '@mantine/core'

const placeholder =
  'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.'

export default function FAQ({ data }: any) {
  if (!data?.length) return null

  return (
    <>
      <section>
        <div className='px-4 sm:container'>
          <div className=' flex justify-center items-center flex-col my-16 '>
            <div className='text-center flex flex-col gap-3 md:w-[80%] w-full text-black mb-5'>
              {/* <p className='text-3xl'>Solid wood</p> */}
              <p className='text-base text-black'>Get the greatest results from our cutting service!</p>
              <h4 className='md:text-[40px] text-2xl font-semibold mb-7'>FAQs:</h4>

              <Accordion variant='separated' className='w-full flex flex-col gap-5 ddddd'>
                {data?.map((item: any, index: number) => (
                  <Accordion.Item
                    value={(index + 1).toString()}
                    className='bg-slate-100 text-left p-4 rounded-md shadow-md'
                  >
                    <Accordion.Control className='text-left'>{item.faq_question}</Accordion.Control>
                    <Accordion.Panel>{item.faq_answer}</Accordion.Panel>
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
