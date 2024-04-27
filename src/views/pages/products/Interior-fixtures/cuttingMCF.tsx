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

export default function CuttingMCF(props: any) {
  const Data: TOurGuarantee = {
    ...defaultTOurGuarantee,
    ...props.Data
  }
  // console.log(Data)
  return (
    <>
      <section>
        <div className='px-4 sm:container'>
          <div className=' flex justify-center items-center flex-col mt-10'>
            <div className='text-center flex flex-col gap-3 max-w-[80%] text-black mb-5'>
              <p className='text-3xl'>Forming of Handles</p>
              <h4 className='md:text-5xl text-4xl font-semibold mb-7'>Maximum effectiveness in a simple design.</h4>
              <p className='text-base text-black'>
                Your panels might benefit from adding subtle elements that the CNC machine can provide for both
                aesthetic appeal and practicality. A few of our customers' favourite handles created using our CNC
                service are shown here; however, if you have a handle design in mind, get in contact to learn how we can
                support you.
              </p>

              <div className='flex gap-5 my-5 lg:my-10'>
                <div className='flex flex-col items-center gap-3'>
                  <img className=' w-full object-cover object-center' src='../images/alldecor.jpeg' alt='' />
                  <h4 className='font-bold text-lg'>Cutout</h4>
                </div>
                <div className='flex flex-col items-center gap-3'>
                  <img className=' w-full object-cover object-center' src='../images/alldecor.jpeg' alt='' />
                  <h4 className='font-bold text-lg'>Insert</h4>
                </div>
                <div className='flex flex-col items-center gap-3'>
                  <img className=' w-full object-cover object-center' src='../images/alldecor.jpeg' alt='' />
                  <h4 className='font-bold text-lg'>J Profile</h4>
                </div>
                <div className='flex flex-col items-center gap-3'>
                  <img className=' w-full object-cover object-center' src='../images/alldecor.jpeg' alt='' />
                  <h4 className='font-bold text-lg'>Bevel</h4>
                </div>
              </div>

              <p className='text-base text-black'>
                Drilling Holes- Precise and Efficient.
                <br />
                We may drill hinges and shelf slots into your panels for your convenience, which can be a tedious
                operation requiring accuracy and close attention to detail. For instance, our CNC machine can chip-free
                drill 100 shelf holes in 15 minutes. Using our user-friendly online tool, you can quickly define the
                size, depth, and positions of the holes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
