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
          <div className=' flex justify-center items-center flex-col'>
            {/* <div className='text-center  max-w-[80%] text-black mb-5 mt-20'>
              <h4 className='md:text-4xl text-2xl font-semibold mb-7'>
                The Virtual Design Studio helps through visual aids
              </h4>
              <p className='text-base text-black'>
                Egger has introduced a Virtual Design Studio, an online platform, to help you realise your ideas for
                decor combinations. Get access to a large selection of room sets and experiment with different decors to
                see which works best for your project. You'll save a tonne of money and time on product development.
              </p>
            </div>

            <div className=' pb-32 text-center flex justify-center'>
              <a
                href='#'
                className='bg-black  px-3 py-4 md:px-5  lg:px-9 md:py-4 font-medium text-lg md:text-2xl text-white hover:bg-primary ease-in duration-200 flex items-center justify-between'
              >
                Create Your Area Now
              </a>
            </div> */}
          </div>
          <div className='bg-neutral-100 md:flex mb-6'>
            <div className='basis-[52.12%] order-1'>
              <div className='relative overflow-hidden w-full bg-neutral-100 before:absolute before:content-normal before:bottom-0 before:w-1/2 before:bg-inherit before:right-1/2 before:skew-x-[40deg] before:pb-7 before:origin-[100%_100%] after:absolute after:content-normal after:bottom-0 after:w-1/2 after:bg-inherit after:left-1/2 after:-skew-x-[40deg] after:pb-7 after:origin-[100%_100%] md:before:w-10 md:before:h-1/2 md:before:top-0 md:before:bottom-auto md:before:right-auto md:before:skew-x-[0deg] md:before:-skew-y-[40deg] md:after:w-10 md:after:h-1/2 md:after:bottom-0 md:after:right-auto md:after:left-0 md:after:skew-x-[0deg] md:after:skew-y-[40deg] md:before:origin-[0%_0%] md:after:origin-[0%_0%]'>
                <img
                  className='h-[380px] md:h-[460px] lg:h-[455px] w-full object-cover object-center'
                  src='/images/alldecor.jpeg'
                  alt=''
                />
              </div>
            </div>
            <div className='basis-[47.88%] flex items-center'>
              <div className='flex flex-col md:justify-center md:ml-auto pb-16 py-8 px-8 md:max-w-[410px] lg:max-w-[567px]'>
                <p className=' text-black'>REMARKABLE</p>
                <h2 className='text-2xl md:text-3xl text-black font-bold mb-6'>ANTI FINGERPRINT TECH</h2>
                <p className='text-lg'>
                  Thanks to an advanced coating, Serica's super-matt boards are resistant to fingerprints, a common
                  issue with other matte surfaces. This makes cleaning easier and keeps the surface looking pristine
                  over time.
                </p>
                <div className='flex gap-5 mt-5'>
                  <a href='#' className='text-black text-xl font-bold'>
                    [BROWSE AND BUY]
                  </a>
                  {/* <a href='#' className='text-black text-xl font-bold'>
                    [Google play]
                  </a> */}
                </div>
              </div>
            </div>
          </div>
          <div className='bg-neutral-100 md:flex mb-6'>
            <div className='basis-[52.12%]'>
              <div>
                <div className='relative overflow-hidden w-full bg-neutral-100 before:absolute before:content-normal before:bottom-0 before:w-1/2 before:bg-inherit before:right-1/2 before:skew-x-[40deg] before:pb-7 before:origin-[100%_100%] after:absolute after:content-normal after:bottom-0 after:w-1/2 after:bg-inherit after:left-1/2 after:-skew-x-[40deg] after:pb-7 after:origin-[100%_100%] md:before:w-10 md:before:h-1/2 md:before:top-0 md:before:bottom-auto md:before:right-0 md:before:skew-x-[0deg] md:before:skew-y-[40deg] md:after:w-10 md:after:h-1/2 md:after:bottom-0 md:after:right-0 md:after:left-auto md:after:skew-x-[0deg] md:after:-skew-y-[40deg]'>
                  <img
                    className='h-[380px] md:h-[460px] lg:h-[455px] w-full object-cover object-center'
                    src='/images/alldecor.jpeg'
                    alt=''
                  />
                </div>
              </div>
            </div>
            <div className='basis-[47.88%] flex items-center'>
              <div className='flex flex-col md:justify-center md:mr-auto pb-16 py-8 px-8 md:max-w-[410px] lg:max-w-[567px]'>
                <p className=' text-black'> BOTH ELEGANT AND BOLD</p>
                <h2 className='text-2xl md:text-3xl text-black font-bold mb-6'>SUPER-MATT FINISH </h2>
                <p className='text-lg'>
                  Serica’s super-matt finish is crafted using innovative lacquering technology that absorbs light,
                  giving the panels a refined, yet strikingly bold appearance. The soft, velvety texture enhances the
                  elegance and adds depth to any room.
                </p>
                <div className='flex gap-5 mt-5'>
                  <a href='#' className='text-black text-xl font-bold'>
                    [BROWSE AND BUY]
                  </a>
                  {/* <a href='#' className='text-black text-xl font-bold'>
                    [Build cutting list]
                  </a> */}
                </div>
              </div>
            </div>
          </div>
          <div className='bg-neutral-100 md:flex mb-6'>
            <div className='basis-[52.12%] order-1'>
              <div className='relative overflow-hidden w-full bg-neutral-100 before:absolute before:content-normal before:bottom-0 before:w-1/2 before:bg-inherit before:right-1/2 before:skew-x-[40deg] before:pb-7 before:origin-[100%_100%] after:absolute after:content-normal after:bottom-0 after:w-1/2 after:bg-inherit after:left-1/2 after:-skew-x-[40deg] after:pb-7 after:origin-[100%_100%] md:before:w-10 md:before:h-1/2 md:before:top-0 md:before:bottom-auto md:before:right-auto md:before:skew-x-[0deg] md:before:-skew-y-[40deg] md:after:w-10 md:after:h-1/2 md:after:bottom-0 md:after:right-auto md:after:left-0 md:after:skew-x-[0deg] md:after:skew-y-[40deg] md:before:origin-[0%_0%] md:after:origin-[0%_0%]'>
                <img
                  className='h-[380px] md:h-[460px] lg:h-[455px] w-full object-cover object-center'
                  src='/images/alldecor.jpeg'
                  alt=''
                />
              </div>
            </div>
            <div className='basis-[47.88%] flex items-center'>
              <div className='flex flex-col md:justify-center md:ml-auto pb-16 py-8 px-8 md:max-w-[410px] lg:max-w-[567px]'>
                <p className=' text-black'>SWATCH GUIDE</p>
                <h2 className='text-2xl md:text-3xl text-black font-bold mb-6'>MARKETING MATERIALS </h2>
                <p className='text-lg'>
                  The Serica Swatch Book showcases the complete range of decors currently available in the UK. It's the
                  ideal companion for designers, providing a tangible reference for selecting the perfect finish.
                </p>
                <div className='flex gap-5 mt-5'>
                  <a href='#' className='text-black text-xl font-bold'>
                    [BROWSE AND BUY]
                  </a>
                  {/* <a href='#' className='text-black text-xl font-bold'>
                    [Google play]
                  </a> */}
                </div>
              </div>
            </div>
          </div>
          <div className='bg-neutral-100 md:flex mb-6'>
            <div className='basis-[52.12%]'>
              <div>
                <div className='relative overflow-hidden w-full bg-neutral-100 before:absolute before:content-normal before:bottom-0 before:w-1/2 before:bg-inherit before:right-1/2 before:skew-x-[40deg] before:pb-7 before:origin-[100%_100%] after:absolute after:content-normal after:bottom-0 after:w-1/2 after:bg-inherit after:left-1/2 after:-skew-x-[40deg] after:pb-7 after:origin-[100%_100%] md:before:w-10 md:before:h-1/2 md:before:top-0 md:before:bottom-auto md:before:right-0 md:before:skew-x-[0deg] md:before:skew-y-[40deg] md:after:w-10 md:after:h-1/2 md:after:bottom-0 md:after:right-0 md:after:left-auto md:after:skew-x-[0deg] md:after:-skew-y-[40deg]'>
                  <img
                    className='h-[380px] md:h-[460px] lg:h-[455px] w-full object-cover object-center'
                    src='/images/alldecor.jpeg'
                    alt=''
                  />
                </div>
              </div>
            </div>
            <div className='basis-[47.88%] flex items-center'>
              <div className='flex flex-col md:justify-center md:mr-auto pb-16 py-8 px-8 md:max-w-[410px] lg:max-w-[567px]'>
                <p className=' text-black'>BROWSE THE RANGE</p>
                <h2 className='text-2xl md:text-3xl text-black font-bold mb-6'>SHOP ONLINE </h2>
                <p className='text-lg'>
                  Explore Serica’s elegant décor collection and start building your shopping list. Get instant
                  quotations without the need to open an account.
                </p>
                <div className='flex gap-5 mt-5'>
                  <a href='#' className='text-black text-xl font-bold'>
                    [VIEW DECORS]
                  </a>
                  {/* <a href='#' className='text-black text-xl font-bold'>
                    [Build cutting list]
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
