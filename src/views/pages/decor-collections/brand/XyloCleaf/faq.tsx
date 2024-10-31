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
              {/* <p className='text-base text-black'>Get the greatest results from our cutting service!</p> */}
              <h4 className='md:text-5xl text-4xl font-semibold mb-7'>FAQs:</h4>

              <Accordion variant='separated' className='w-full flex flex-col gap-5 ddddd'>
                <Accordion.Item value='1' className='bg-slate-100 text-left p-4 rounded-md shadow-md'>
                  <Accordion.Control>What types of boards you cut?</Accordion.Control>
                  <Accordion.Panel>We cut a wide range of MDF, MFC, and other decorative boards.</Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value='1' className='bg-slate-100 text-left p-4 rounded-md shadow-md'>
                  <Accordion.Control>What's the smallest panel you can cut?</Accordion.Control>
                  <Accordion.Panel>
                    The smallest panel we can cut depends on your specific needs and board type.
                  </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value='1' className='bg-slate-100 text-left p-4 rounded-md shadow-md'>
                  <Accordion.Control>What is the largest board and thickness you can cut?</Accordion.Control>
                  <Accordion.Panel>
                    We can cut boards up to 50mm thick, and our full-size sheets can be cut to various lengths and
                    widths based on the material.
                  </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value='1' className='bg-slate-100 text-left p-4 rounded-md shadow-md'>
                  <Accordion.Control>How precise is the cutting service you offer?</Accordion.Control>
                  <Accordion.Panel>We offer precision cutting with 0.1mm accuracy.</Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value='1' className='bg-slate-100 text-left p-4 rounded-md shadow-md'>
                  <Accordion.Control>What happens if a panel is cut to the incorrect size?</Accordion.Control>
                  <Accordion.Panel>
                    If an error occurs, we will rectify it promptly to ensure you receive the correct sizes.
                  </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value='1' className='bg-slate-100 text-left p-4 rounded-md shadow-md'>
                  <Accordion.Control>Can you cut angles and geometrical shapes?</Accordion.Control>
                  <Accordion.Panel>
                    Yes, we can cut boards into a variety of shapes and angles based on your specifications.
                  </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value='1' className='bg-slate-100 text-left p-4 rounded-md shadow-md'>
                  <Accordion.Control>Can I keep the scraps?</Accordion.Control>
                  <Accordion.Panel>
                    Yes, customers can request to keep the leftover scraps from the cutting process.
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
