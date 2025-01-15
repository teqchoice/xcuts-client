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
            <div className='text-center flex flex-col gap-3 md:w-[80%] w-full text-black mb-5'>
              {/* <p className='text-3xl'>Solid wood</p> */}
              <p className='text-base text-black'>Get the greatest results from our cutting service!</p>
              <h4 className='md:text-5xl text-4xl font-semibold mb-7'>FAQs:</h4>

              <Accordion variant='separated' className='w-full flex flex-col gap-5 ddddd'>
                <Accordion.Item value='1' className='bg-slate-100 text-left p-4 rounded-md shadow-md'>
                  <Accordion.Control className='text-left'>What types of boards you cut?</Accordion.Control>
                  <Accordion.Panel>Content</Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value='1' className='bg-slate-100 text-left p-4 rounded-md shadow-md'>
                  <Accordion.Control className='text-left'>
                    What's the most compact panel you can cut?
                  </Accordion.Control>
                  <Accordion.Panel>Content</Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value='1' className='bg-slate-100 text-left p-4 rounded-md shadow-md'>
                  <Accordion.Control className='text-left'>
                    What is the largest board and thickness you can cut?
                  </Accordion.Control>
                  <Accordion.Panel>Content</Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value='1' className='bg-slate-100 text-left p-4 rounded-md shadow-md'>
                  <Accordion.Control className='text-left'>
                    How precise is the cutting service you offer?
                  </Accordion.Control>
                  <Accordion.Panel>Content</Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value='1' className='bg-slate-100 text-left p-4 rounded-md shadow-md'>
                  <Accordion.Control className='text-left'>
                    What happens if a panel is cut to the incorrect size?
                  </Accordion.Control>
                  <Accordion.Panel>Content</Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value='1' className='bg-slate-100 text-left p-4 rounded-md shadow-md'>
                  <Accordion.Control className='text-left'>
                    Can you cut angles and geometrical shapes?
                  </Accordion.Control>
                  <Accordion.Panel>Content</Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value='1' className='bg-slate-100 text-left p-4 rounded-md shadow-md'>
                  <Accordion.Control className='text-left'>Can I keep the scraps?</Accordion.Control>
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
