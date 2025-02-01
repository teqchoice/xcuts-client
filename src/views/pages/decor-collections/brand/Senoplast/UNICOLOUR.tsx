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
    <section>
      <div className='px-4 mt-10 sm:container'>
        <div className=' flex justify-center items-center flex-col'>
          <div className='text-center flex flex-col gap-3 max-w-[80%] text-black mb-5'>
            <p className='text-3xl'>THE BEST OF BOTH!</p>
            <h4 className='md:text-[40px] text-2xl font-semibold mb-7'>UNI COLOUR WOODGRAINS</h4>
            <p className='text-base text-black'>
              The ST40 collection, which debuted in 2023, attempts to add colour to a woodgrain with a deeper structure
              in neutral hues that are considered trendy. The ST40 collection of decors challenges the idea that painted
              woodgrains are only expensive, making this popular style more affordable. You can now have both woodgrains
              and colours without having to choose between the two.
            </p>
            <p className='text-base text-black'>
              Do you find the colours unappealing? Egger has created a board with Painting Grade melamine, allowing you
              to use our spray-painting service to achieve the ideal finish and have the deep woodgrain structure in any
              colour you choose.
            </p>

            {/* <p className='text-base text-black'>
              <strong>We offer MFC boards from leading brands such as:</strong>
            </p>

            <div className='flex gap-5 my-5 lg:my-10'>
              <div className='flex flex-col items-center gap-3'>
                <img className=' w-full object-cover object-center' src='../images/alldecor.jpeg' alt='' />
                <h4 className='font-bold text-lg'>Saviola</h4>
                <p>Specialises in classic designs crafted from high-quality materials.</p>
                <a
                  href='#'
                  className='bg-black  w-fit p-2 px-4 text-white hover:bg-primary ease-in duration-200 flex items-center justify-between'
                >
                  Learn More <i className='ri-arrow-right-s-line text-white'></i>
                </a>
              </div>
              <div className='flex flex-col items-center gap-3'>
                <img className=' w-full object-cover object-center' src='../images/alldecor.jpeg' alt='' />
                <h4 className='font-bold text-lg'>Egger</h4>
                <p>Known for a vast selection of colours, textures, and realistic woodgrain designs.</p>
                <a
                  href='#'
                  className='bg-black  w-fit p-2 px-4 text-white hover:bg-primary ease-in duration-200 flex items-center justify-between'
                >
                  Learn More <i className='ri-arrow-right-s-line text-white'></i>
                </a>
              </div>
              <div className='flex flex-col items-center gap-3'>
                <img className=' w-full object-cover object-center' src='../images/alldecor.jpeg' alt='' />
                <h4 className='font-bold text-lg'>Alvic</h4>
                <p>A high-end brand offering creative and unique decors.</p>
                <a
                  href='#'
                  className='bg-black  w-fit p-2 px-4 text-white hover:bg-primary ease-in duration-200 flex items-center justify-between'
                >
                  Learn More <i className='ri-arrow-right-s-line text-white'></i>
                </a>
              </div>
              <div className='flex flex-col items-center gap-3'>
                <img className=' w-full object-cover object-center' src='../images/alldecor.jpeg' alt='' />
                <h4 className='font-bold text-lg'>XyloCleaf</h4>
                <p>A popular brand known for its globally appealing designs.</p>
                <a
                  href='#'
                  className='bg-black  w-fit p-2 px-4 text-white hover:bg-primary ease-in duration-200 flex items-center justify-between'
                >
                  Learn More <i className='ri-arrow-right-s-line text-white'></i>
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
