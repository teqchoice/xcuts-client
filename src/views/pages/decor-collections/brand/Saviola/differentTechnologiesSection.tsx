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
      q: 'What happens when Xcuts gets it wrong?',
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

export default function DifferentTechnologiesSection(props: any) {
  const Data: TOurGuarantee = {
    ...defaultTOurGuarantee,
    ...props.Data
  }
  // console.log(Data)
  return (
    <>
      <section>
        <div className='text-center text-black mb-11 mt-20'>
          {/* <p className='md:text-3xl text-xl'>The Key Features:</p> */}
          <h4 className='lg:text-5xl md:text-3xl text-3xl font-semibold'>The Key Features:</h4>
        </div>
        <div className='bg-neutral-100 md:flex'>
          <div className='basis-[52.12%] order-1'>
            <div className='relative overflow-hidden w-full bg-neutral-100 before:absolute before:content-normal before:bottom-0 before:w-1/2 before:bg-inherit before:right-1/2 before:skew-x-[40deg] before:pb-7 before:origin-[100%_100%] after:absolute after:content-normal after:bottom-0 after:w-1/2 after:bg-inherit after:left-1/2 after:-skew-x-[40deg] after:pb-7 after:origin-[100%_100%] md:before:w-10 md:before:h-1/2 md:before:top-0 md:before:bottom-auto md:before:right-auto md:before:skew-x-[0deg] md:before:-skew-y-[40deg] md:after:w-10 md:after:h-1/2 md:after:bottom-0 md:after:right-auto md:after:left-0 md:after:skew-x-[0deg] md:after:skew-y-[40deg] md:before:origin-[0%_0%] md:after:origin-[0%_0%]'>
              <img
                className='h-[380px] md:h-[460px] lg:h-[596px] w-full object-cover object-center'
                src='/images/alldecor.jpeg'
                alt=''
              />
            </div>
          </div>
          <div className='basis-[47.88%] flex items-center'>
            <div className='flex flex-col md:justify-center md:ml-auto pb-16 py-8 px-4 md:max-w-[410px] lg:max-w-[567px] lg:pr-16'>
              <h2 className='text-2xl md:text-3xl text-black font-bold mb-6'>Computerised Cutting:</h2>
              <p className='text-lg'>
                Traditional hot melts, used in budget situations, Edge Banders are considerably different from PUR Glue,
                Polyurethane Reactive Hot Melt Glue. When used, it creates a strong connection and immediately achieves
                Edge Band adhesion. Additionally, the bond has great flexibility, and can sustain a wider range of
                temperatures, also being impervious to water. This glue choice is excellent for applications that must
                withstand a variety of climatic conditions. Additionally, it takes half as much glue application as
                standard hot melt adhesives, resulting in a thinner glue line and a better-looking finish.{' '}
              </p>
            </div>
          </div>
        </div>
        <div className='bg-neutral-100 md:flex'>
          <div className='basis-[52.12%]'>
            <div>
              <div className='relative overflow-hidden w-full bg-neutral-100 before:absolute before:content-normal before:bottom-0 before:w-1/2 before:bg-inherit before:right-1/2 before:skew-x-[40deg] before:pb-7 before:origin-[100%_100%] after:absolute after:content-normal after:bottom-0 after:w-1/2 after:bg-inherit after:left-1/2 after:-skew-x-[40deg] after:pb-7 after:origin-[100%_100%] md:before:w-10 md:before:h-1/2 md:before:top-0 md:before:bottom-auto md:before:right-0 md:before:skew-x-[0deg] md:before:skew-y-[40deg] md:after:w-10 md:after:h-1/2 md:after:bottom-0 md:after:right-0 md:after:left-auto md:after:skew-x-[0deg] md:after:-skew-y-[40deg]'>
                <img
                  className='h-[380px] md:h-[460px] lg:h-[596px] w-full object-cover object-center'
                  src='/images/alldecor.jpeg'
                  alt=''
                />
              </div>
            </div>
          </div>
          <div className='basis-[47.88%] flex items-center'>
            <div className='flex flex-col md:justify-center md:mr-auto pb-16 py-8 px-4 md:max-w-[410px] lg:max-w-[567px] lg:pl-16'>
              <h2 className='text-2xl md:text-3xl text-black font-bold mb-6'>Utilising Lasers</h2>
              <p className='text-lg'>
                The Edge Band and board may be firmly joined without glue and with no discernible connection line thanks
                to cutting-edge laser bonding technology. The standard gluing component of the Edge Banding machine has
                been replaced by a very effective near-infrared laser. The board's ornamental layer melts to the bottom
                of the bands unique design, permanently joining the parts. It makes it possible to form an undetectable
                bond without using any glue at all. The bond is not as strong as PUR glue, unfortunately.
              </p>
            </div>
          </div>
        </div>
        <div className='bg-primary text-center py-11'>
          <h4 className='lg:text-5xl text-3xl text-white'>Edgebanding tape finishing options</h4>
        </div>
      </section>
    </>
  )
}
