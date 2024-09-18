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

export default function Resources(props: any) {
  const Data: TOurGuarantee = {
    ...defaultTOurGuarantee,
    ...props.Data
  }
  // console.log(Data)
  return (
    <>
      <section>
        <div className='px-4 sm:container'>
          <div className=' flex justify-center items-center flex-col mt-16'>
            <div className='text-center flex flex-col gap-3 max-w-[80%] text-black mb-5'>
              <p className='text-3xl'>With our CNC service, the possibilities are endless!</p>
              <h4 className='md:text-5xl text-4xl font-semibold mb-7'>Our Resources:</h4>
              <p className='text-base text-black'>
                Our CNC service is available for all products offered at XCUTS. Our CNC machine utilises specialised
                routing tools to work with various grades, thicknesses, and types of wood products, including MDF,
                plywood, MFC, and veneered MDF. Explore our complete range of products and decors, and contact us to
                start your CNC project today.
              </p>

              <div className='flex gap-5 my-5 lg:my-10'>
                <div className='flex flex-col items-center justify-between gap-3'>
                  <div>
                    <img className=' w-full object-cover object-center' src='../images/alldecor.jpeg' alt='' />
                    <h4 className='font-bold text-lg'>MDF</h4>
                    <p>
                      MDF is highly favoured for cutting and grooving with our CNC service. Its plain, smooth surface
                      makes it ideal for intricate work, and we offer a superb selection of MDF options tailored to
                      every project's needs.
                    </p>
                  </div>
                  <a
                    href='#'
                    className='bg-black  w-fit p-2 px-4 text-white hover:bg-primary ease-in duration-200 flex items-center justify-between'
                  >
                    Check out our MDF boards <i className='ri-arrow-right-s-line text-white'></i>
                  </a>
                </div>
                <div className='flex flex-col items-center justify-between gap-3'>
                  <div>
                    <img className=' w-full object-cover object-center' src='../images/alldecor.jpeg' alt='' />
                    <h4 className='font-bold text-lg'>Plywood</h4>
                    <p>
                      Our CNC machine is perfect for plywood cutting, delivering smooth edges that showcase the
                      cross-grain for a visually captivating effect.
                    </p>
                  </div>
                  <a
                    href='#'
                    className='bg-black  w-fit p-2 px-4 text-white hover:bg-primary ease-in duration-200 flex items-center justify-between'
                  >
                    Check out our Plywood boards <i className='ri-arrow-right-s-line text-white'></i>
                  </a>
                </div>
                <div className='flex flex-col items-center justify-between gap-3'>
                  <div>
                    <img className=' w-full object-cover object-center' src='../images/alldecor.jpeg' alt='' />
                    <h4 className='font-bold text-lg'>MFC</h4>
                    <p>
                      We are renowned suppliers of high-demand melamine-faced chipboard (MFC) in the London region. Our
                      selection includes boards from Egger, XyloCleaf, Kronospan, and other leading brands. Explore our
                      comprehensive selection of MFC boards in various décors today.
                    </p>
                  </div>
                  <a
                    href='#'
                    className='bg-black  w-fit p-2 px-4 text-white hover:bg-primary ease-in duration-200 flex items-center justify-between'
                  >
                    Select from our Décor brands <i className='ri-arrow-right-s-line text-white'></i>
                  </a>
                </div>
                <div className='flex flex-col items-center justify-between gap-3'>
                  <div>
                    <img className=' w-full object-cover object-center' src='../images/alldecor.jpeg' alt='' />
                    <h4 className='font-bold text-lg'>Veneered Boards</h4>
                    <p>
                      Enhance your furniture with a natural wood veneer like oak or walnut combined with an MDF or
                      plywood core. Veneered boards offer a sophisticated, elegant, practical finish for your
                      woodworking projects.
                    </p>
                  </div>
                  <a
                    href='#'
                    className='bg-black  w-fit p-2 px-4 text-white hover:bg-primary ease-in duration-200 flex items-center justify-between'
                  >
                    View our boards with veneer <i className='ri-arrow-right-s-line text-white'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
