import React from 'react'
import classes from './FaqSimple.module.css'
import { Down } from '@icon-park/react'
import { Accordion } from '@mantine/core'

const placeholder =
  'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.'

export default function FAQ(props: any) {
  // console.log(Data)
  return (
    <>
      <section>
        <div className='px-4 sm:container'>
          <div className=' flex justify-center items-center flex-col my-16 '>
            <div className='text-center flex flex-col gap-3 w-[80%] text-black mb-5'>
              {/* <p className='text-3xl'>Solid wood</p> */}
              <p className='text-base text-black'>
                for Spray Coating Services: Use our spray-painting service to its full potential!
              </p>
              <h4 className='md:text-5xl text-4xl font-semibold mb-7'>FAQs:</h4>

              <Accordion variant='separated' className='w-full flex flex-col gap-5 ddddd'>
                <Accordion.Item value='1' className='bg-slate-100 text-left p-4 rounded-md shadow-md'>
                  <Accordion.Control>How long is the lead time?</Accordion.Control>
                  <Accordion.Panel>Content</Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value='1' className='bg-slate-100 text-left p-4 rounded-md shadow-md'>
                  <Accordion.Control>Will my panels work for spraying?</Accordion.Control>
                  <Accordion.Panel>Content</Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value='1' className='bg-slate-100 text-left p-4 rounded-md shadow-md'>
                  <Accordion.Control>Will you spray the panel's edges completely?</Accordion.Control>
                  <Accordion.Panel>Content</Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value='1' className='bg-slate-100 text-left p-4 rounded-md shadow-md'>
                  <Accordion.Control>Can panels with spray paint be labelled?</Accordion.Control>
                  <Accordion.Panel>Content</Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value='1' className='bg-slate-100 text-left p-4 rounded-md shadow-md'>
                  <Accordion.Control>Can you spray panels with grooves or profiles?</Accordion.Control>
                  <Accordion.Panel>Content</Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value='1' className='bg-slate-100 text-left p-4 rounded-md shadow-md'>
                  <Accordion.Control>What is your method for spraying?</Accordion.Control>
                  <Accordion.Panel>Content</Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
