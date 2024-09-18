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

export default function Grooving(props: any) {
  const Data: TOurGuarantee = {
    ...defaultTOurGuarantee,
    ...props.Data
  }
  // console.log(Data)
  return (
    <>
      <section>
        <div className='px-4 sm:container'>
          <div className=' flex justify-center items-center flex-col mt-20'>
            <div className='text-center flex flex-col gap-3 max-w-[80%] text-black mb-5'>
              <p className='text-3xl'>Decorative CNC Panels</p>
              <h4 className='md:text-5xl text-4xl font-semibold mb-7'>Bring your imaginative designs to life.</h4>
              <p className='text-base text-black'>
                Our CNC service can route decorative patterns, typically in MDF panels. This type of fretwork panelling
                allows you to infuse your designs with personality, adding a unique touch to your home or office.
                Decorative panels effectively uplift interiors, creating eye-catching focal points and enhancing the
                overall aesthetic. Below are some examples of how decorative panels can transform your space.
              </p>

              <div className='flex gap-5 my-5 lg:my-10'>
                <div className='flex flex-col items-center gap-3'>
                  <img className=' w-full object-cover object-center' src='../images/alldecor.jpeg' alt='' />
                  <h4 className='font-bold text-lg'>LED Lighting</h4>
                  <p>To cover up your LED strip and cables invisibly, have a recess carved into your panel.</p>
                </div>
                <div className='flex flex-col items-center gap-3'>
                  <img className=' w-full object-cover object-center' src='../images/alldecor.jpeg' alt='' />
                  <h4 className='font-bold text-lg'>Back Panel</h4>
                  <p>To make it simple to slot in your base, grooves can be carved into the drawer sides.</p>
                </div>
                <div className='flex flex-col items-center gap-3'>
                  <img className=' w-full object-cover object-center' src='../images/alldecor.jpeg' alt='' />
                  <h4 className='font-bold text-lg'>Ornamental</h4>
                  <p>By using ornamental grooves, you may give your MDF or plywood a more upscale appearance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
