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

export default function MarketingTeamSection(props: any) {
  const Data: TOurGuarantee = {
    ...defaultTOurGuarantee,
    ...props.Data
  }
  // console.log(Data)
  return (
    <>
      <section className='lg:py-24 md:py-10 pt-8 pb-16'>
        <div className='px sm:container'>
          <div className='text-center'>
            <h4 className='md:text-5xl text-3xl mb-8'>Marketing Team</h4>
          </div>
          <div className='grid md:grid-cols-3 md:gap-x-6 gap-y-5'>
            <div className='border border-[#c1c1c1]'>
              <img src='/images/avatar-img.webp' alt='' className='w-full' />
              <div className='text-center px-6 py-10'>
                <h5>Marketing manager</h5>
              </div>
            </div>
            <div className='border border-[#c1c1c1]'>
              <img src='/images/avatar-img.webp' alt='' className='w-full' />
              <div className='text-center px-6 py-10'>
                <h5>Social media officer</h5>
              </div>
            </div>
            <div className='border border-[#c1c1c1]'>
              <img src='/images/avatar-img.webp' alt='' className='w-full' />
              <div className='text-center px-6 py-10'>
                <h5>Creative design officer</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
