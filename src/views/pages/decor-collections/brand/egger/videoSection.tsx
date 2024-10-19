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

export default function VideoSection(props: any) {
  const Data: TOurGuarantee = {
    ...defaultTOurGuarantee,
    ...props.Data
  }
  // console.log(Data)
  return (
    <>
      <section className='pt-20 relative before:bg-primary before:lg:h-[683px] before:md:h-[583px] before:sm:h-[383px] before:h-[303px] before:block before:w-full before:rounded-3xl before:absolute before:top-0'>
        <div className='px-4 sm:container'>
          <div className='text-center text-white mb-11 relative'>
            <p className='lg:text-3xl text-2l'>Explore Our Cutting Service in Detail:</p>
            <h4 className='lg:text-5xl md:text-3xl text-2xl font-semibold'>A Clean Cut, Everytime</h4>
            <p className='mt-5'>
              Our cutting service goes beyond just trimming boards. With state-of-the-art equipment and experienced saw
              operators, we ensure each cut is accurate and meets your specifications.
            </p>
            <p className='mt-5'>
              • Loading Process: Our operators carefully load each MDF or MFC board for precise cutting.
            </p>
            <p className='mt-5'>
              • Clear Labelling: Each board is clearly labelled with exact dimensions and edging requirements.
            </p>
            <p className='mt-5'>
              • Maintenance: We perform daily cleaning and maintenance to keep our saws in top condition.
            </p>
            <p className='mt-5'>
              • Advanced Dust Filtration: Our dust filtration system ensures that machine surfaces and moving components
              remain clean and free from sawdust for optimal performance.
            </p>
            <p className='mt-5'>
              For projects of any size, XCUTS guarantees professional, reliable, and efficient board-cutting services.
            </p>
          </div>
          <div
            className='embed-responsive pt-[55.5%] embed-responsive-16 by-9 relative w-full overflow-hidden border-solid border-8 border-white'
            // style={{paddingTop: "55.5%"}}
          >
            {/* <iframe
              className='embed-responsive-item absolute bottom-0 left-0 right-0 top-0 h-full w-full'
              src='https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com'
              // allowfullscreen=""
              data-gtm-yt-inspected-2340190_699='true'
              id='240632615'
            ></iframe> */}
            <video
              className='embed-responsive-item absolute bottom-0 left-0 right-0 top-0 h-full w-full '
              src='../images/vid/Main Banner.mp4'
              width='100%'
              height='auto'
              onMouseEnter={e => {
                const video = e.currentTarget
                if (video.paused !== false) {
                  video.play()
                }
              }}
              onMouseLeave={e => {
                const video = e.currentTarget
                if (video.paused === false) {
                  video.pause()
                }
              }}
              muted
            ></video>
          </div>
        </div>
      </section>
    </>
  )
}
