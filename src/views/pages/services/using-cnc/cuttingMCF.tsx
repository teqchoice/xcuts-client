import Image from 'next/image'
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
            <div className='text-center flex flex-col gap-3 md:max-w-[80%] max-w-full text-black mb-5'>
              <p className='text-3xl'>Handles Made With CNC</p>
              <h4 className='md:text-[40px] text-2xl font-semibold mb-7'>
                A sleek but functional look to drawers and doors.
              </h4>
              <p className='text-base text-black'>
                The CNC machine can add intricate details to your panels, enhancing both style and functionality.
                Additionally, handleless doors and drawers offer a sleek, modern look and are easier to clean and
                maintain. If you have a handle design in mind, get in touch to see how we can help.
              </p>
              <p className='text-base text-black'>
                Below are some of our customers' favourite handles crafted with our CNC cutting service.
              </p>

              <div className='flex md:flex-row flex-col gap-5 my-5 lg:my-10'>
                <div className='flex flex-col w-full items-center gap-3'>
                  <Image
                    className='w-full object-cover h-[192px]'
                    src={props?.Data?.image1 ?? '/images/alldecor.jpeg'}
                    alt=''
                    height={285}
                    width={190}
                  />
                  <h4 className='font-bold text-lg'>Cutout</h4>
                </div>
                <div className='flex flex-col w-full items-center gap-3'>
                  <Image
                    className='w-full object-cover h-[192px]'
                    src={props?.Data?.image2 ?? '/images/alldecor.jpeg'}
                    alt=''
                    height={285}
                    width={190}
                  />
                  <h4 className='font-bold text-lg'>Insert</h4>
                </div>
                <div className='flex flex-col w-full items-center gap-3'>
                  <Image
                    className='w-full object-cover h-[192px]'
                    src={props?.Data?.image3 ?? '/images/alldecor.jpeg'}
                    alt=''
                    height={285}
                    width={190}
                  />
                  <h4 className='font-bold text-lg'>J Profile</h4>
                </div>
                <div className='flex flex-col w-full items-center gap-3'>
                  <Image
                    className='w-full object-cover h-[192px]'
                    src={props?.Data?.image4 ?? '/images/alldecor.jpeg'}
                    alt=''
                    height={285}
                    width={190}
                  />
                  <h4 className='font-bold text-lg'>Bevel</h4>
                </div>
              </div>

              <p className='text-base text-black'>
                Hole Drilling
                <br />
                Save time, effort and mistakes with our panel hole drilling service.
                <br />
                For your convenience, we can drill hinge and shelf holes into your panels, which demands precision and
                attention to detail. Our CNC machine can drill 100 chip-free shelf holes in a few minutes. Using our
                easy-to-use online tool, you can easily specify hole size, depth, and locations. Utilising a CNC machine
                ensures greater accuracy and flexibility in hole placements, allowing for perfect alignment and
                customisation to suit your specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
