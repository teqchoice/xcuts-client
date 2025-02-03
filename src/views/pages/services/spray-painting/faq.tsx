import React from 'react'
import { Accordion } from '@mantine/core'

export default function FAQ() {
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
                <Accordion.Item value='1' className='bg-slate-100 text-left p-4 rounded-md shadow-md'>
                  <Accordion.Control className='text-left'>How long is the lead time?</Accordion.Control>
                  <Accordion.Panel>Content</Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value='1' className='bg-slate-100 text-left p-4 rounded-md shadow-md'>
                  <Accordion.Control className='text-left'>Will my panels work for spraying?</Accordion.Control>
                  <Accordion.Panel>Content</Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value='1' className='bg-slate-100 text-left p-4 rounded-md shadow-md'>
                  <Accordion.Control className='text-left'>
                    Will you spray the panel's edges completely?
                  </Accordion.Control>
                  <Accordion.Panel>Content</Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value='1' className='bg-slate-100 text-left p-4 rounded-md shadow-md'>
                  <Accordion.Control className='text-left'>Can panels with spray paint be labelled?</Accordion.Control>
                  <Accordion.Panel>Content</Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value='1' className='bg-slate-100 text-left p-4 rounded-md shadow-md'>
                  <Accordion.Control className='text-left'>
                    Can you spray panels with grooves or profiles?
                  </Accordion.Control>
                  <Accordion.Panel>Content</Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value='1' className='bg-slate-100 text-left p-4 rounded-md shadow-md'>
                  <Accordion.Control className='text-left'>What is your method for spraying?</Accordion.Control>
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
