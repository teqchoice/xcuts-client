import React from 'react'

type TOurGuarantee = {
  text1: string
  image: string
  text2: string
  questions: TQuestion[]
}

type TQuestion = {
  q: string
  a: string
}

const defaultTOurGuarantee: Partial<TOurGuarantee> = {
  text1:
    "We will cut and edge panels to your exact specification, or we'll send a replacement to you free of charge in 24hrs.",
  image: 'images/wwcaep-panels.webp',
  text2:
    "Here at Xcuts, we understand that humans (and machines) can sometimes make mistakes and things don't entirely turn out the way you want them. We don't like the idea of our customers being stuck on the job. That is why we will provide you with a replacement panel within 24 hours in the unlikely event we didn't get it right from the get-go.",
  questions: [
    {
      q: 'What happens when Cworkshop gets it wrong?',
      a: 'Simple. As soon as you notice an issue with your cut and edged panel, get in touch with us by twelve noon and we will send you a free replacement before midday on the next working day.'
    },
    {
      q: 'What about CNC and Spray coating?',
      a: "These services are very involved and time-consuming therefore we can't always guarantee that you will get it within 24 hours, but we will do our best. After all, good things are worth the wait."
    },
    {
      q: 'What if the manufacturer gets it wrong?',
      a: "Occasionally boards have a manufacturing fault, and if we don't spot it on time before it makes its way to you, we will aim to rectify this as soon as possible. Doing so might sometimes take longer than 24 hours but don't worry, we are here to help."
    },
    {
      q: 'Delivery or Collection?',
      a: "We're easy. Should you happen to be around the corner and would prefer to pick up your replacement panel and save even more time that's fine with us. Otherwise, we'll deliver it to you."
    }
  ]
}

export default function OurStorySection(props: any) {
  const Data: TOurGuarantee = {
    ...defaultTOurGuarantee,
    ...props.Data
  }
  // console.log(Data)
  return (
    <>
      <section className='bg-no-repeat bg-[right_73px_top] mt-6 sm:mt-0 md:pb-12 pb-14'>
        <div className='px-4 sm:container'>
          <div className='grid grid-flow-row md:grid-cols-3 gap-y-6 md:gap-3 lg:gap-6 sm:pt-20 md:pt-24 lg:pt-40'>
            <div className=''>
              <img src='../images/our-story-thumb-01.webp' alt='' className='w-full' />
              <div className='bg-white text-center pt-5 pb-7 px-3 shadow-2xl'>
                <h3 className='text-primary text-3xl font-semibold mb-3'>2022</h3>
                <p>
                  XCUTS was founded by two cabinet-makers, Felix and Antony, as a way to create a benchmark in the panel
                  cutting and edging industry that lacked quality service.
                </p>
              </div>
            </div>
            <div className='mt-0 md:-mt-12 lg:-mt-24'>
              <p className='lg:text-3xl text-xl text-center'>From where we began, to where we are.</p>
              <h4 className='xl:text-6xl lg:text-4xl text-3xl text-primary uppercase font-semibold text-center mb-7'>
                Our story so far
              </h4>
              <div className=''>
                <img src='../images/our-story-thumb-02.webp' alt='' className='w-full' />
                <div className='bg-white text-center pt-5 pb-7 px-3 shadow-2xl'>
                  <h3 className='text-primary text-3xl font-semibold mb-3'>2023</h3>
                  <p>
                    We increased our floorspace five times and moved into a newly-built industrial unit in the north
                    part of London. Having more space enabled us to add new products and services and ramp up our
                    production speed.
                  </p>
                </div>
              </div>
            </div>
            <div className=''>
              <img src='../images/our-story-thumb-03.webp' alt='' className='w-full' />
              <div className='bg-white text-center pt-5 pb-7 px-3 shadow-2xl'>
                <h3 className='text-primary text-3xl font-semibold mb-3'>2023</h3>
                <p>
                  After a few years of preparation and development, we switched to a new online ordering platform,
                  allowing customers to submit their cutting list online and receive a quotation within seconds.
                </p>
              </div>
            </div>
          </div>
          <div className='text-center pt-24'>
            <p className='text-xl md:text-3xl mb-2'>
              The driving force behind <span className='text-primary font-semibold'>X</span>CUTS
            </p>
            <h4 className='text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-black font-semibold'>
              Meet the team
            </h4>
          </div>
        </div>
      </section>
    </>
  )
}
