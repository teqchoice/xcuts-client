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

export default function ABSEdgebandSection(props: any) {
  const Data: TOurGuarantee = {
    ...defaultTOurGuarantee,
    ...props.Data
  }
  // console.log(Data)
  return (
    <>
      <section>
        <div className='px-4 sm:container'>
          <div className='text-center text-black mb-11 mt-10'>
            {/* <p className='text-3xl'>ABS edgeband</p> */}
            {/* <h4 className='md:text-[40px] text-2xl font-semibold mb-7'>The Key Features:</h4> */}
            {/* <p className='text-base text-black'>
              The 1mm ABS Edge Banding tape is almost undetectable and offers a moderately robust edge surface. Square
              and radius milling options are available for the tape.
            </p> */}
          </div>
          <div className='bg-neutral-100 md:flex mb-6'>
            <div className='basis-[52.12%] order-1'>
              <div className='relative overflow-hidden w-full bg-neutral-100 before:absolute before:content-normal before:bottom-0 before:w-1/2 before:bg-inherit before:right-1/2 before:skew-x-[40deg] before:pb-7 before:origin-[100%_100%] after:absolute after:content-normal after:bottom-0 after:w-1/2 after:bg-inherit after:left-1/2 after:-skew-x-[40deg] after:pb-7 after:origin-[100%_100%] md:before:w-10 md:before:h-1/2 md:before:top-0 md:before:bottom-auto md:before:right-auto md:before:skew-x-[0deg] md:before:-skew-y-[40deg] md:after:w-10 md:after:h-1/2 md:after:bottom-0 md:after:right-auto md:after:left-0 md:after:skew-x-[0deg] md:after:skew-y-[40deg] md:before:origin-[0%_0%] md:after:origin-[0%_0%]'>
                <Image
                  className='h-[380px] md:h-[460px] lg:h-[455px] w-full object-cover object-center'
                  src={props?.Data?.image1 ?? '/images/alldecor.jpeg'}
                  alt=''
                  height={455}
                  width={1200}
                />
              </div>
            </div>
            <div className='basis-[47.88%] flex items-center'>
              <div className='flex flex-col md:justify-center md:ml-auto pb-16 py-8 px-8 md:max-w-[410px] lg:max-w-[567px]'>
                <p className='text-2xl'>We colour match.</p>
                <h2 className='text-2xl md:text-3xl text-black font-bold mb-6'>
                  Choose from infinite colour possibilities.
                </h2>
                <p className='text-lg'>
                  We can match colours from popular paint systems and brands such as RAL, NCS, Pantone, Farrow & Ball,
                  Zoffany, Dulux, or any other well-known paint system or brand. Just provide us with the colour name,
                  and we'll ensure a precise match for your project.
                </p>
              </div>
            </div>
          </div>
          <div className='bg-neutral-100 md:flex mb-6'>
            <div className='basis-[52.12%]'>
              <div>
                <div className='relative overflow-hidden w-full bg-neutral-100 before:absolute before:content-normal before:bottom-0 before:w-1/2 before:bg-inherit before:right-1/2 before:skew-x-[40deg] before:pb-7 before:origin-[100%_100%] after:absolute after:content-normal after:bottom-0 after:w-1/2 after:bg-inherit after:left-1/2 after:-skew-x-[40deg] after:pb-7 after:origin-[100%_100%] md:before:w-10 md:before:h-1/2 md:before:top-0 md:before:bottom-auto md:before:right-0 md:before:skew-x-[0deg] md:before:skew-y-[40deg] md:after:w-10 md:after:h-1/2 md:after:bottom-0 md:after:right-0 md:after:left-auto md:after:skew-x-[0deg] md:after:-skew-y-[40deg]'>
                  <Image
                    className='h-[380px] md:h-[460px] lg:h-[455px] w-full object-cover object-center'
                    src={props?.Data?.image2 ?? '/images/alldecor.jpeg'}
                    alt=''
                    height={455}
                    width={1200}
                  />
                </div>
              </div>
            </div>
            <div className='basis-[47.88%] flex items-center'>
              <div className='flex flex-col md:justify-center md:mr-auto pb-16 py-8 px-8 md:max-w-[410px] lg:max-w-[567px]'>
                <p className='text-2xl'>White Primer</p>
                <h2 className='text-2xl md:text-3xl text-black font-bold mb-6'>For hand-painted finish.</h2>
                <p className='text-lg'>
                  You can save time by not having to prime on-site. By letting us handle the priming for you, you can
                  have your panels professionally primed and ready for a finishing coat.
                </p>
              </div>
            </div>
          </div>
          <div className='bg-neutral-100 md:flex mb-6'>
            <div className='basis-[52.12%] order-1'>
              <div className='relative overflow-hidden w-full bg-neutral-100 before:absolute before:content-normal before:bottom-0 before:w-1/2 before:bg-inherit before:right-1/2 before:skew-x-[40deg] before:pb-7 before:origin-[100%_100%] after:absolute after:content-normal after:bottom-0 after:w-1/2 after:bg-inherit after:left-1/2 after:-skew-x-[40deg] after:pb-7 after:origin-[100%_100%] md:before:w-10 md:before:h-1/2 md:before:top-0 md:before:bottom-auto md:before:right-auto md:before:skew-x-[0deg] md:before:-skew-y-[40deg] md:after:w-10 md:after:h-1/2 md:after:bottom-0 md:after:right-auto md:after:left-0 md:after:skew-x-[0deg] md:after:skew-y-[40deg] md:before:origin-[0%_0%] md:after:origin-[0%_0%]'>
                <Image
                  className='h-[380px] md:h-[460px] lg:h-[455px] w-full object-cover object-center'
                  src={props?.Data?.image3 ?? '/images/alldecor.jpeg'}
                  alt=''
                  height={455}
                  width={1200}
                />
              </div>
            </div>
            <div className='basis-[47.88%] flex items-center'>
              <div className='flex flex-col md:justify-center md:ml-auto pb-16 py-8 px-8 md:max-w-[410px] lg:max-w-[567px]'>
                <p className='text-2xl'>Solid Colour Paint</p>
                <h2 className='text-2xl md:text-3xl text-black font-bold mb-6'>Smooth and Sleek Appearance!</h2>
                <p className='text-lg'>
                  Colour paint is the way to go if you want an immaculate, factory-like appearance. PU finish options
                  include satin or matt.
                </p>
              </div>
            </div>
          </div>
          <div className='bg-neutral-100 md:flex'>
            <div className='basis-[52.12%]'>
              <div>
                <div className='relative overflow-hidden w-full bg-neutral-100 before:absolute before:content-normal before:bottom-0 before:w-1/2 before:bg-inherit before:right-1/2 before:skew-x-[40deg] before:pb-7 before:origin-[100%_100%] after:absolute after:content-normal after:bottom-0 after:w-1/2 after:bg-inherit after:left-1/2 after:-skew-x-[40deg] after:pb-7 after:origin-[100%_100%] md:before:w-10 md:before:h-1/2 md:before:top-0 md:before:bottom-auto md:before:right-0 md:before:skew-x-[0deg] md:before:skew-y-[40deg] md:after:w-10 md:after:h-1/2 md:after:bottom-0 md:after:right-0 md:after:left-auto md:after:skew-x-[0deg] md:after:-skew-y-[40deg]'>
                  <Image
                    className='h-[380px] md:h-[460px] lg:h-[455px] w-full object-cover object-center'
                    src={props?.Data?.image4 ?? '/images/alldecor.jpeg'}
                    alt=''
                    height={455}
                    width={1200}
                  />
                </div>
              </div>
            </div>
            <div className='basis-[47.88%] flex items-center'>
              <div className='flex flex-col md:justify-center md:mr-auto pb-16 py-8 px-8 md:max-w-[410px] lg:max-w-[567px]'>
                <p className='text-2xl'>Clear Lacquer</p>
                <h2 className='text-2xl md:text-3xl text-black font-bold mb-6'>
                  For the perfect plywood veneer finish.
                </h2>
                <p className='text-lg'>
                  Protect and enrich the natural beauty of wood with multiple coats of clear lacquer, offered in matte
                  or satin PU finishes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
