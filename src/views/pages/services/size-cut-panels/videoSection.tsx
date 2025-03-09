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
  const videoSource = props?.Data?.src ?? '/images/vid/Main Banner.mp4'

  // console.log(Data)
  return (
    <>
      <section className='md:pt-20 pt-10 relative before:bg-primary before:lg:h-[683px] before:md:h-[583px] before:sm:h-[380px] before:h-[403px] before:block before:w-full before:md:rounded-3xl before:rounded-xl before:absolute before:top-0'>
        <div className='px-4 sm:container'>
          <div className='text-center text-white mb-11 relative'>
            <p className='lg:text-3xl text-2l'>How our board cutting service works.</p>
            <h4 className='lg:text-5xl md:text-3xl text-2xl font-semibold'>A Clean Cut, Everytime</h4>
            <p className='mt-5'>
              Our saw operators load either MDF, MFC, or plywood on to the computer-programmed saw, ready to be cut.
              After a particular panel is cut, a label is printed with the panel name, dimensions, and edgebanding
              details that adhere to the panel. Our saws are well maintained and cleaned, and blades are replaced often,
              to produce an accurate, clean cut every time.
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
              src={videoSource}
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
              playsInline
              autoPlay
              muted
              loop
              preload='auto'
            ></video>
          </div>
        </div>
      </section>
    </>
  )
}
