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

export default function ContentSection(props: any) {
  const Data: TOurGuarantee = {
    ...defaultTOurGuarantee,
    ...props.Data
  }
  // console.log(Data)
  return (
    <>
      <section className='md:py-20 py-10 text-[#6d6d6d]'>
        <div className='px-4 sm:container'>
          <div className='mt-5'>
            <h3 className='text-xl font-bold mb-2'>Our Data Protection Principles</h3>
            <p>
              The protection and security of your personal data is of paramount importance to us. The use of your
              personal data is in strict compliance with data protection regulations in order to make you feel secure
              with us in matters of data protection.
            </p>
            <p>
              It is important to us that you are always aware of which personal data is collected during your visit on
              our website and during the use of our services and offers as well as how we use said data afterwards. The
              following notices are intended to provide you with information about this and also to inform you of how we
              protect your personal data from manipulation, loss, destruction or improper use.
            </p>
          </div>
          <div className='mt-5'>
            <h3 className='text-xl font-bold mb-2'>Collection and Use of Personal Data</h3>
            <p>
              Personal data is any data that allow for your personal identification, i.e. your name, address, phone
              number or email address (“Personal Data”). Personal Data is only collected, processed or used by us if
              permitted by law or if you have given your prior consent.
            </p>
          </div>
          <div className='mt-5'>
            <h3 className='text-xl font-bold mb-2'>
              The collection, processing or use of your Personal Data is used in particular for the following purposes:
            </h3>
          </div>
          <div className='mt-5'>
            <h3 className='text-xl font-bold mb-2'>Right to Object to Advertising</h3>
            <p>
              You can object at any time to the use of your Personal Data for advertising or market research purposes.
              You may also withdraw your consent at any time. For this, simply send a short message by email to us.
            </p>
          </div>
          <div className='mt-5'>
            <h3 className='text-xl font-bold mb-2'>Online Applications</h3>
            <p>
              If applicable, when you apply online for a job opening, training opportunity or internship with us, your
              information is used for the sole purpose of processing your application. As soon as your data is no longer
              needed it is deleted or destroyed.
            </p>
          </div>
          <div className='mt-5'>
            <h3 className='text-xl font-bold mb-2'>Data Security</h3>
            <p>
              We and our service providers take technical and organisational security measures to protect stored
              Personal Data against accidental or intentional manipulation, loss, destruction or against access by
              unauthorised persons. Our data processing and security measures are improved continuously to fall in line
              with technological developments.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
