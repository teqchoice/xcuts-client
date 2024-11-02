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

export default function SolidWoodSection(props: any) {
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
            <div className='text-center  max-w-[80%] text-black mb-5 mt-20'>
              {/* <p className='text-3xl'>MORE THAN JUST GLOSS</p> */}
              <h4 className='md:text-5xl text-4xl font-semibold mb-7'>XYLOLEAF DÉCOR COLLECTION</h4>
              <p className='text-base text-black'>
                With the Egger PerfectSense line, you can now design furniture that plays with light thanks to a new
                standard in lacquered boards in Premium Matt (PM) and Premium Gloss (PG) finishes. PerfectSense decor
                boards are designed to endure scratches, prolonging the life of your furniture while keeping daily
                living in mind. Both gloss and matt options have enhanced stain resistance and are resistant to changes
                in heat and moisture, in addition to their anti-scratch qualities. PerfectSense is a collection of
                furniture-related materials available in a variety of colours and patterns, including stone and marble.
              </p>

              <div className='grid grid-cols-2  gap-5 my-5 lg:my-10'>
                <div>
                  <h4 className='md:text-2xl text-xl font-semibold mb-7'>
                    Distinct Combinations of Texture and Design!
                  </h4>
                  <p className='text-base text-black'>
                    The XyloCleaf line of decorative surfaces is renowned for its ability to constantly evolve, offering
                    a diverse range of patterns, hues, and textures that set it apart from competitors. Rather than
                    merely following trends, XyloCleaf often establishes and leads the way in contemporary design.
                  </p>
                </div>
                <div>
                  <h4 className='md:text-2xl text-xl font-semibold mb-7'>A Collection Like No Other</h4>
                  <p className='text-base text-black'>
                    Featuring ninety unique decors, the collection encapsulates the essence of authentic Italian design.
                    From iconic abstract patterns to deep-grained wood and material reproductions, XyloCleaf provides a
                    variety of options to suit any design vision.
                  </p>
                </div>
                <div>
                  <h4 className='md:text-2xl text-xl font-semibold mb-7'>Unmatched Realism </h4>
                  <p className='text-base text-black'>
                    The combination of deep, realistic textures and ultra-realistic patterns ensures that XyloCleaf
                    products add that much-needed "wow" factor to high-end projects. Whether you're looking to create an
                    inviting atmosphere or make a bold statement, this collection delivers.
                  </p>
                </div>
                <div>
                  <h4 className='md:text-2xl text-xl font-semibold mb-7'>Durability Meets Aesthetics </h4>
                  <p className='text-base text-black'>
                    Products crafted with XyloCleaf not only boast stunning visual appeal but also feature extremely
                    scratch-resistant surfaces with superior wear characteristics. This makes them ideal for both
                    residential and commercial applications, ensuring longevity without sacrificing style.
                  </p>
                </div>
              </div>

              <p className='text-base text-black'>
                Elevate your design projects with the exceptional textures and designs offered by the XyloLeaf Décor
                Collection. Discover the perfect elements to create your vision today.
              </p>
            </div>

            {/* <div className='pt-14 pb-32 text-center flex justify-center'>
              <a
                href='#'
                className='bg-black  px-3 py-4 md:px-5  lg:px-9 md:py-4 font-medium text-lg md:text-2xl text-white hover:bg-primary ease-in duration-200 flex items-center justify-between'
              >
                Create Your Cutting List Right Away! <i className='ri-arrow-right-s-line text-white'></i>
              </a>
            </div> */}
          </div>
        </div>
      </section>
    </>
  )
}
