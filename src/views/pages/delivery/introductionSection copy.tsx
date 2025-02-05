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

export default function IntroductionSection(props: any) {
  const Data: TOurGuarantee = {
    ...defaultTOurGuarantee,
    ...props.Data
  }
  // console.log(Data)
  return (
    <>
      <section className='section-one-stop py-10 md:py-20 pb-0 md:pb-0'>
        <div className='px-4 sm:container'>
          <div className='text-center px-1 overflow-hidden'>
            {/* <div className='text-2xl md:text-3xl mb-2'>We'll ensure your panels arrive on schedule</div> */}
            <div className='bg-black mx-6 md:mx-28 skew-y-[0] skew-x-[35deg] relative'>
              <div className='w-3 md:w-20 h-11 bg-primary absolute left-0 md:-left-24 bottom-0'></div>
              <div className='w-3 md:w-20 h-11 bg-primary absolute right-0 md:-right-24 top-0'></div>
              <h1 className='text-white text-xl/6 md:text-4xl font-bold -skew-x-[35deg] py-2 px-4'>
                Delivery with XCUTS
              </h1>
            </div>
            {/* <div className='flex justify-center gap-4 mt-10'>
              <a
                href='#'
                className='bg-black px-5 py-4 md:px-5 lg:px-6 lg:px-9 md:py-4 font-medium text-xl text-white hover:bg-primary ease-in duration-200 flex items-center justify-between'
              >
                Calculate Now
              </a>
            </div> */}
            <div className='flex flex-col gap-y-3 text-black-1d mt-10'>
              <p>
                We know how important timely deliveries are for your projects, which is why we guarantee that your
                panels will arrive on schedule. Whether you're working on a large commercial project or a small DIY job,
                we've got you covered.
              </p>
              <p className='text-xl md:text-3xl mb-2'>Nationwide Delivery Service</p>
              <p>
                We deliver across the entire UK, no matter where you're located. Our vans handle the majority of
                deliveries directly, ensuring safe and secure transport. In some cases, depending on your location and
                requirements, alternative delivery methods may be more efficient or cost-effective. We’ll provide you
                with a range of options to suit your needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className='bg-no-repeat bg-[right_73px_top] mt-6 sm:mt-0 md:pb-24 pb-14'
        style={{ backgroundImage: "url('images/x-icon-02.webp');" }}
      >
        <div className='px-4 sm:container'>
          <div className='grid grid-flow-row sm:grid-cols-3 gap-y-6 sm:gap-3 md:gap-6 sm:pt-20 md:pt-24 lg:pt-40'>
            <div>
              <img
                src='/images/delivery-thumb-02.webp'
                alt=''
                className='w-full border-[6px] border-white shadow-2xl'
              />
            </div>
            <div className='sm:-mt-12 md:-mt-12 lg:-mt-24'>
              <img
                src='/images/delivery-thumb-02.webp'
                alt=''
                className='w-full border-[6px] border-white shadow-2xl'
              />
            </div>
            <div>
              <img
                src='/images/delivery-thumb-02.webp'
                alt=''
                className='w-full border-[6px] border-white shadow-2xl'
              />
            </div>
          </div>
          <div className='text-center pt-16'>
            <p className='text-xl md:text-3xl mb-2'>Calculate Your Delivery Cost</p>
            <h4 className='text-2xl sm:text-3xl md:text-5xl font-medium text-primary uppercase'>
              Use our online calculator to easily estimate the cost of delivering your panels.
            </h4>
            <div className='flex justify-center gap-4 mt-10'>
              <a
                href='#'
                className='bg-black px-5 py-4 md:px-5 lg:px-6 lg:px-9 md:py-4 font-medium text-xl text-white hover:bg-primary ease-in duration-200 flex items-center justify-between'
              >
                Calculate Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
