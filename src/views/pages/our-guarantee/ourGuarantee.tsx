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

export default function OurGuarantee(props: any) {
  const Data: TOurGuarantee = {
    ...defaultTOurGuarantee,
    ...props.Data
  }
  // console.log(Data)
  return (
    <>
      <section
        className='pt-24 pb-20 bg-no-repeat bg-[left_top_1rem]'
        style={{ backgroundImage: "url('images/x-icon.webp')" }}
      >
        <div className='px-4 sm:container'>
          <div className='p-5 md:p-8 lg:p-12 text-center border-2 border-primary border-dashed bg-white'>
            <p className='text-[22px] md:text-[26px] lg:text-[36px]'>
              We will <span className='text-primary'> cut and edge panels to your exact specification</span>, or we'll
              send a replacement to you free of charge in 24hrs.
            </p>
            <img src='../images/wwcaep-panels.webp' alt='' className='mx-auto border-[10px] border-[#c4c4c4] my-9' />
            <p className='text-xl leading-8'>
              Here at <span className='text-primary'>X</span>cuts, we understand that humans (and machines) can
              sometimes make mistakes and things don't entirely turn out the way you want them. We don't like the idea
              of our customers being stuck on the job. That is why we will provide you with a replacement panel within
              24 hours in the unlikely event we didn't get it right from the get-go.
            </p>
          </div>
        </div>
      </section>
      <section className='pb-16 bg-no-repeat bg-[right_top_0]' style={{ backgroundImage: "url('images/x-icon.webp')" }}>
        <div className='px-4 sm:container'>
          <div className='bg-primary text-center py-9 px-5 mb-9'>
            <h4 className='text-2xl lg:text-4xl text-white'>How does it work?</h4>
          </div>
          {Data.questions.map(question => {
            return (
              <div className='py-8 md:py-11 px-6 md:px-10 border border-black border-dashed bg-[#f4f4f4] mb-5'>
                <h3 className='text-xl md:text-3xl text-black font-semibold mb-6'>{question?.q}</h3>
                <p className='text-base md:text-xl text-black'>{question?.a}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
