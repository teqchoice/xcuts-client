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

export default function CuttingMDF(props: any) {
  const Data: TOurGuarantee = {
    ...defaultTOurGuarantee,
    ...props.Data
  }
  // console.log(Data)
  return (
    <>
      <section>
        <div className='px-4 sm:container'>
          <div className=' flex justify-center items-center flex-col'>
            <div className='text-center flex flex-col gap-3 max-w-[80%] text-black mb-5'>
              {/* <p className='text-3xl'>Solid wood</p> */}
              <h4 className='md:text-5xl text-4xl font-semibold mb-7'>Service for Cutting MDF Boards</h4>
              <p className='text-base text-black'>
                The most common type of board that our clients often request is Medium Density Fiberboard (MDF). Because
                of its distinctive characteristics, MDF is widely utilised in the building and furniture industries for
                a variety of purposes, including as wall panelling, furniture carcasses, doors, and general structural
                components. We provide a wide selection of MDF sheets that are already cut, with boards that range in
                thickness from 3mm to 50mm.
              </p>
              <p className='text-base text-black'>
                We provide and cut MDF boards from well-known manufacturers like Medite, Finsa, and Spanolux, many of
                which have special qualities that help our customers meet the demands of different projects.
              </p>

              <p className='text-base text-black'>
                To learn more about the many MDF board kinds that we can cut for you, click the link below.
              </p>
            </div>

            <div className='pt-14 pb-32 text-center flex justify-center'>
              <a
                href='#'
                className='bg-black  px-3 py-4 md:px-5  lg:px-9 md:py-4 font-medium text-lg md:text-2xl text-white hover:bg-primary ease-in duration-200 flex items-center justify-between'
              >
                Find Information about MDF Varieties <i className='ri-arrow-right-s-line text-white'></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
