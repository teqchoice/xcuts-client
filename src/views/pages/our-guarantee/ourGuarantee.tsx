import React from 'react'

const Data = {
  questions: [
    {
      q: 'What happens if XCUTS makes a mistake?',
      a: 'It’s straightforward. If there is an issue with your cut and edged panel, please contact us as soon as possible, and by the next working day, we will send you a replacement at no cost before the end of that day.'
    },
    {
      q: 'What if the manufacturer makes a mistake?',
      a: 'Occasionally, boards may have manufacturing defects that we may not catch before shipping. If we identify such issues, we will address them as quickly as possible. While it may take longer than a day to resolve, rest assured—we are here to help.'
    },
    {
      q: 'What about spray coating and CNC services?',
      a: 'We strive to provide these services within a day, but due to their complexity and time requirements, we cannot guarantee this timeframe. After all, good things are worth the wait!'
    },
    {
      q: 'Delivery or Pickup?',
      a: "We keep it simple. If you're nearby, we encourage you to pick up your replacement panel to save time. Otherwise, we will deliver it directly to you."
    }
  ]
}

export default function OurGuarantee() {
  // console.log(Data)
  return (
    <>
      <section
        className='pt-24 pb-20 bg-no-repeat bg-[left_top_1rem]'
        style={{ backgroundImage: "url('images/x-icon.webp')" }}
      >
        <div className='px-4 sm:container'>
          <div className='p-5 md:p-8 lg:p-12 text-center border-2 border-primary border-dashed bg-white'>
            <p className='text-[22px] md:text-[26px] lg:text-[36px]'>
              <span className='text-primary'> Our Commitment to You</span>
            </p>
            <img src='../images/wwcaep-panels.webp' alt='' className='mx-auto border-[10px] border-[#c4c4c4] my-9' />
            <p className='text-xl leading-8'>
              Panels will be accurately cut and edged to your specifications; if not, we will provide a replacement at
              no additional cost within 24 hours. At XCUTS, we understand that both people and machines can make
              mistakes, and plans may not always unfold as intended. We are committed to ensuring our clients are never
              left in a difficult situation. Therefore, in the unlikely event that we make an error, we guarantee to
              deliver a replacement panel within 24 hours.
            </p>
          </div>
        </div>
      </section>
      <section className='pb-16 bg-no-repeat bg-[right_top_0]' style={{ backgroundImage: "url('images/x-icon.webp')" }}>
        <div className='px-4 sm:container'>
          <div className='bg-primary text-center py-9 px-5 mb-9'>
            <h4 className='text-2xl lg:text-4xl text-white'>How Do Our Guarantees Work?</h4>
          </div>
          {Data.questions.map(question => {
            return (
              <div className='py-8 md:py-11 px-6 md:px-10 border border-black border-dashed bg-[#f4f4f4] mb-5'>
                <h3 className='text-xl md:text-3xl text-black font-semibold mb-6'>{question?.q}</h3>
                <p className='text-base md:text-xl text-black'>{question?.a}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
