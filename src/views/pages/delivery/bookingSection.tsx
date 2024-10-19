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

export default function BookingSection(props: any) {
  const Data: TOurGuarantee = {
    ...defaultTOurGuarantee,
    ...props.Data
  }
  // console.log(Data)
  return (
    <>
      <section className='relative z-20 before:bg-neutral-200 before:content-normal before:lg:h-[583px] before:md:h-[583px] before:sm:h-[583px] before:h-[603px] before:block before:w-full before:absolute before:top-0 mb-24 '>
        <div
          className='pt-20 bg-no-repeat bg-[left_40px_top] relative z-20'
          style={{ backgroundImage: "url('images/x-icon-02.webp');" }}
        >
          <div className='px-4 sm:container'>
            <div className='text-center text-black mb-11 relative'>
              <p className='text-3xl'>In a Hurry?</p>
              <h4 className='lg:text-5xl md:text-4xl text-3xl font-semibold mb-7'>Reserve our service for tomorrow</h4>
              <p>If you need the project on spot please contact our team and we will help you like your team members</p>
            </div>
            <div className='bg-black text-center relative flex flex-col items-center justify-center h-[363px] md:h-[463px] px-6'>
              <p className='text-xl md:text-3xl mb-2 text-white'>When there is a short turnaround time</p>
              <h4 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white uppercase'>
                BOOK OUR FAST FLOW SERVICE
              </h4>
              <div className='flex justify-center gap-4 mt-10'>
                <a
                  href='#'
                  className='bg-primary px-5 py-4 md:px-5 lg:px-6 lg:px-9 md:py-4 font-medium text-base sm:text-xl text-white hover:bg-white ease-in duration-200 flex items-center justify-between hover:text-black uppercase'
                >
                  Create your cut list right away
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
