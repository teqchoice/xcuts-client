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
      q: 'What happens when Cworkshop gets it wrong?',
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

export default function CollectionsItemSection(props: any) {
  const Data: TOurGuarantee = {
    ...defaultTOurGuarantee,
    ...props.Data
  }
  // console.log(Data)
  return (
    <>
      <div className='grid md:grid-cols-2 gap-x-7 gap-y-10 pb-20'>
        <div className='col-span-1 flex flex-col'>
          <div className='flex sm:flex-row flex-col sm:items-end'>
            <div className='sm:w-[60%]'>
              <img src='images/collections-egger-thumb.webp' alt='' className='w-full' />
            </div>
            <div className='relative relative py-5 pl-5 pr-10 before:border-solid before:border-t-[bg-transparent] before:border-r-[#fff] before:border-b-[#f82f45] before:border-l-[bg-transparent] before:border-t-0 sm:before:border-r-[40px] before:border-b-[72px] before:border-l-0 before:absolute before:w-full before:h-full before:-top-2 before:md:top-0 before:left-0 before:-z-10 sm:w-[40%] lg:bottom-10 bottom-0'>
              <h5 className='lg:text-xl text-base pr-8 font-semibold text-white'>Egger</h5>
            </div>
          </div>
          <div className='xl:ml-16 lg:ml-12 ml:ml-8 ml-0 relative lg:-mt-10 h-full'>
            <div className='bg-white p-7 shadow-[0_10px_30px_0px_rgba(0,0,0,0.15)] h-full flex flex-col'>
              <p className='text-base text-[#5f5f5f] leading-7 mb-10'>
                New Egger 2020-22 collection caters for trend orientated, as well as more traditional customers. It
                features new decors and textures at both the premium and mid-level range. From primary colours to
                natural wood finishes and high gloss or supermatt panels, Egger has covered it all.
              </p>
              <div className='flex sm:flex-row flex-col gap-y-4 sm:gap-y-0 sm:gap-x-4 mt-auto'>
                <a
                  href='#'
                  className='text-base font-semibold text-black border border-primary lg:py-4 lg:px-6 md:py-4 md:px-3 py-4 px-6 block text-center hover:bg-primary hover:text-white transition-all'
                >
                  View Decors{' '}
                </a>
                <a
                  href='#'
                  className='text-base font-semibold text-black border border-black lg:py-4 lg:px-6 md:py-4 md:px-3 py-4 px-6 block text-center bg-black hover:text-black text-white hover:bg-white transition-all'
                >
                  Order Sample
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-1 flex flex-col'>
          <div className='flex sm:flex-row flex-col sm:items-end'>
            <div className='sm:w-[60%]'>
              <img src='images/collections-kronospan-thumb.webp' alt='' className='w-full' />
            </div>
            <div className='relative relative py-5 pl-5 pr-10 before:border-solid before:border-t-[bg-transparent] before:border-r-[#fff] before:border-b-[#f82f45] before:border-l-[bg-transparent] before:border-t-0 sm:before:border-r-[40px] before:border-b-[72px] before:border-l-0 before:absolute before:w-full before:h-full before:-top-2 before:md:top-0 before:left-0 before:-z-10 sm:w-[40%] lg:bottom-10 bottom-0'>
              <h5 className='lg:text-xl text-base pr-8 font-semibold text-white'>Kronospan</h5>
            </div>
          </div>
          <div className='xl:ml-16 lg:ml-12 ml:ml-8 ml-0 relative lg:-mt-10 h-full'>
            <div className='bg-white p-7 shadow-[0_10px_30px_0px_rgba(0,0,0,0.15)] h-full flex flex-col'>
              <p className='text-base text-[#5f5f5f] leading-7 mb-10'>
                Kronospan's globally unified range of decors was born out of the desire for continuous improvement,
                innovation and creation of materials that will inspire professionals all over the world. The collection
                covers a full spectrum of interior design from classNameic and rich wood grain finishes to modern,
                sophisticated stone and marble effects as well as plain colours.
              </p>
              <div className='flex sm:flex-row flex-col gap-y-4 sm:gap-y-0 sm:gap-x-4 mt-auto'>
                <a
                  href='#'
                  className='text-base font-semibold text-black border border-primary lg:py-4 lg:px-6 md:py-4 md:px-3 py-4 px-6 block text-center hover:bg-primary hover:text-white transition-all'
                >
                  View Decors{' '}
                </a>
                <a
                  href='#'
                  className='text-base font-semibold text-black border border-black lg:py-4 lg:px-6 md:py-4 md:px-3 py-4 px-6 block text-center bg-black hover:text-black text-white hover:bg-white transition-all'
                >
                  Order Sample
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-1 flex flex-col'>
          <div className='flex sm:flex-row flex-col sm:items-end'>
            <div className='sm:w-[60%]'>
              <img src='images/xyloCleaf.webp' alt='' className='w-full' />
            </div>
            <div className='relative relative py-5 pl-5 pr-10 before:border-solid before:border-t-[bg-transparent] before:border-r-[#fff] before:border-b-[#f82f45] before:border-l-[bg-transparent] before:border-t-0 sm:before:border-r-[40px] before:border-b-[72px] before:border-l-0 before:absolute before:w-full before:h-full before:-top-2 before:md:top-0 before:left-0 before:-z-10 sm:w-[40%] lg:bottom-10 bottom-0'>
              <h5 className='lg:text-xl text-base pr-8 font-semibold text-white'>XyloCleaf</h5>
            </div>
          </div>
          <div className='xl:ml-16 lg:ml-12 ml:ml-8 ml-0 relative lg:-mt-10 h-full'>
            <div className='bg-white p-7 shadow-[0_10px_30px_0px_rgba(0,0,0,0.15)] h-full flex flex-col'>
              <p className='text-base text-[#5f5f5f] leading-7 mb-10'>
                The XyloCleaf collection embodies a true Italian design spirit featuring decorative surfaces with deep
                realistic textures embossed in sync with ultra-realistic patterns. The decors have an appearance of
                various natural materials such as stone, metal, leather and textile, and without a doubt, will add style
                and beauty to every interior design project.
              </p>
              <div className='flex sm:flex-row flex-col gap-y-4 sm:gap-y-0 sm:gap-x-4 mt-auto'>
                <a
                  href='#'
                  className='text-base font-semibold text-black border border-primary lg:py-4 lg:px-6 md:py-4 md:px-3 py-4 px-6 block text-center hover:bg-primary hover:text-white transition-all'
                >
                  View Decors{' '}
                </a>
                <a
                  href='#'
                  className='text-base font-semibold text-black border border-black lg:py-4 lg:px-6 md:py-4 md:px-3 py-4 px-6 block text-center bg-black hover:text-black text-white hover:bg-white transition-all'
                >
                  Order Sample
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-1 flex flex-col'>
          <div className='flex sm:flex-row flex-col sm:items-end'>
            <div className='sm:w-[60%]'>
              <img src='images/swiss-krono.webp' alt='' className='w-full' />
            </div>
            <div className='relative relative py-5 pl-5 pr-10 before:border-solid before:border-t-[bg-transparent] before:border-r-[#fff] before:border-b-[#f82f45] before:border-l-[bg-transparent] before:border-t-0 sm:before:border-r-[40px] before:border-b-[72px] before:border-l-0 before:absolute before:w-full before:h-full before:-top-2 before:md:top-0 before:left-0 before:-z-10 sm:w-[40%] lg:bottom-10 bottom-0'>
              <h5 className='lg:text-xl text-base pr-8 font-semibold text-white'>Saviola</h5>
            </div>
          </div>
          <div className='xl:ml-16 lg:ml-12 ml:ml-8 ml-0 relative lg:-mt-10 h-full'>
            <div className='bg-white p-7 shadow-[0_10px_30px_0px_rgba(0,0,0,0.15)] h-full flex flex-col'>
              <p className='text-base text-[#5f5f5f] leading-7 mb-10'>
                New in the UK, Saviola decorative board collection delivers Italian elegance through subtle tones of
                wood and stone decors. The range boasts deep textures and realistic finishes that echo current design
                trends.
              </p>
              <div className='flex sm:flex-row flex-col gap-y-4 sm:gap-y-0 sm:gap-x-4 mt-auto'>
                <a
                  href='#'
                  className='text-base font-semibold text-black border border-primary lg:py-4 lg:px-6 md:py-4 md:px-3 py-4 px-6 block text-center hover:bg-primary hover:text-white transition-all'
                >
                  View Decors{' '}
                </a>
                <a
                  href='#'
                  className='text-base font-semibold text-black border border-black lg:py-4 lg:px-6 md:py-4 md:px-3 py-4 px-6 block text-center bg-black hover:text-black text-white hover:bg-white transition-all'
                >
                  Order Sample
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-1 flex flex-col'>
          <div className='flex sm:flex-row flex-col sm:items-end'>
            <div className='sm:w-[60%]'>
              <img src='images/swiss-krono.webp' alt='' className='w-full' />
            </div>
            <div className='relative relative py-5 pl-5 pr-10 before:border-solid before:border-t-[bg-transparent] before:border-r-[#fff] before:border-b-[#f82f45] before:border-l-[bg-transparent] before:border-t-0 sm:before:border-r-[40px] before:border-b-[72px] before:border-l-0 before:absolute before:w-full before:h-full before:-top-2 before:md:top-0 before:left-0 before:-z-10 sm:w-[40%] lg:bottom-10 bottom-0'>
              <h5 className='lg:text-xl text-base pr-8 font-semibold text-white'>Swiss Krono</h5>
            </div>
          </div>
          <div className='xl:ml-16 lg:ml-12 ml:ml-8 ml-0 relative lg:-mt-10 h-full'>
            <div className='bg-white p-7 shadow-[0_10px_30px_0px_rgba(0,0,0,0.15)] h-full flex flex-col'>
              <p className='text-base text-[#5f5f5f] leading-7 mb-10'>
                The 2021-22 collection of furniture decors from Switzerland delivers the latest global design trends.
                The range encompasses colour, wood and design surfaces offering numerous ways to achieve endless design
                possibilities.
              </p>
              <div className='flex sm:flex-row flex-col gap-y-4 sm:gap-y-0 sm:gap-x-4 mt-auto'>
                <a
                  href='#'
                  className='text-base font-semibold text-black border border-primary lg:py-4 lg:px-6 md:py-4 md:px-3 py-4 px-6 block text-center hover:bg-primary hover:text-white transition-all'
                >
                  View Decors{' '}
                </a>
                <a
                  href='#'
                  className='text-base font-semibold text-black border border-black lg:py-4 lg:px-6 md:py-4 md:px-3 py-4 px-6 block text-center bg-black hover:text-black text-white hover:bg-white transition-all'
                >
                  Order Sample
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-1 flex flex-col'>
          <div className='flex sm:flex-row flex-col sm:items-end'>
            <div className='sm:w-[60%]'>
              <img src='images/swiss-krono.webp' alt='' className='w-full' />
            </div>
            <div className='relative relative py-5 pl-5 pr-10 before:border-solid before:border-t-[bg-transparent] before:border-r-[#fff] before:border-b-[#f82f45] before:border-l-[bg-transparent] before:border-t-0 sm:before:border-r-[40px] before:border-b-[72px] before:border-l-0 before:absolute before:w-full before:h-full before:-top-2 before:md:top-0 before:left-0 before:-z-10 sm:w-[40%] lg:bottom-10 bottom-0'>
              <h5 className='lg:text-xl text-base pr-8 font-semibold text-white'>Alvic</h5>
            </div>
          </div>
          <div className='xl:ml-16 lg:ml-12 ml:ml-8 ml-0 relative lg:-mt-10 h-full'>
            <div className='bg-white p-7 shadow-[0_10px_30px_0px_rgba(0,0,0,0.15)] h-full flex flex-col'>
              <p className='text-base text-[#5f5f5f] leading-7 mb-10'>
                Alvic's Lux collection features high gloss finish boards with excellent physical and mechanical
                performance. It is available in a wide range of colours and designs. Alvic's Syncron collection boasts
                textured panels with attractive and unusual decorative designs creating natural and stunning decorative
                looks.
              </p>
              <div className='flex sm:flex-row flex-col gap-y-4 sm:gap-y-0 sm:gap-x-4 mt-auto'>
                <a
                  href='#'
                  className='text-base font-semibold text-black border border-primary lg:py-4 lg:px-6 md:py-4 md:px-3 py-4 px-6 block text-center hover:bg-primary hover:text-white transition-all'
                >
                  View Decors{' '}
                </a>
                <a
                  href='#'
                  className='text-base font-semibold text-black border border-black lg:py-4 lg:px-6 md:py-4 md:px-3 py-4 px-6 block text-center bg-black hover:text-black text-white hover:bg-white transition-all'
                >
                  Order Sample
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-1 flex flex-col'>
          <div className='flex sm:flex-row flex-col sm:items-end'>
            <div className='sm:w-[60%]'>
              <img src='images/swiss-krono.webp' alt='' className='w-full' />
            </div>
            <div className='relative relative py-5 pl-5 pr-10 before:border-solid before:border-t-[bg-transparent] before:border-r-[#fff] before:border-b-[#f82f45] before:border-l-[bg-transparent] before:border-t-0 sm:before:border-r-[40px] before:border-b-[90px] before:border-l-0 before:absolute before:w-full before:h-full before:-top-2 before:md:top-0 before:left-0 before:-z-10 sm:w-[40%] lg:bottom-10 bottom-0'>
              <h5 className='lg:text-xl text-base pr-8 font-semibold text-white'>Grooved Boards</h5>
            </div>
          </div>
          <div className='xl:ml-16 lg:ml-12 ml:ml-8 ml-0 relative lg:-mt-10 h-full'>
            <div className='bg-white p-7 shadow-[0_10px_30px_0px_rgba(0,0,0,0.15)] h-full flex flex-col'>
              <p className='text-base text-[#5f5f5f] leading-7 mb-10'>
                Grooved decorative boards are expertly machined in our factory using Finsa's Hidrofugo moisture
                resistant MDF, Twincolour MDF or oak veneered black MDF and come in five different designs with a
                smooth, clean-cut finish ready for a coat of paint or lacquer.
              </p>
              <div className='flex sm:flex-row flex-col gap-y-4 sm:gap-y-0 sm:gap-x-4 mt-auto'>
                <a
                  href='#'
                  className='text-base font-semibold text-black border border-primary lg:py-4 lg:px-6 md:py-4 md:px-3 py-4 px-6 block text-center hover:bg-primary hover:text-white transition-all'
                >
                  View Decors{' '}
                </a>
                <a
                  href='#'
                  className='text-base font-semibold text-black border border-black lg:py-4 lg:px-6 md:py-4 md:px-3 py-4 px-6 block text-center bg-black hover:text-black text-white hover:bg-white transition-all'
                >
                  Order Sample
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-1 flex flex-col'>
          <div className='flex sm:flex-row flex-col sm:items-end'>
            <div className='sm:w-[60%]'>
              <img src='images/swiss-krono.webp' alt='' className='w-full' />
            </div>
            <div className='relative relative py-5 pl-5 pr-10 before:border-solid before:border-t-[bg-transparent] before:border-r-[#fff] before:border-b-[#f82f45] before:border-l-[bg-transparent] before:border-t-0 sm:before:border-r-[40px] before:border-b-[72px] before:border-l-0 before:absolute before:w-full before:h-full before:-top-2 before:md:top-0 before:left-0 before:-z-10 sm:w-[40%] lg:bottom-10 bottom-0'>
              <h5 className='lg:text-xl text-base pr-8 font-semibold text-white'>Senoplast</h5>
            </div>
          </div>
          <div className='xl:ml-16 lg:ml-12 ml:ml-8 ml-0 relative lg:-mt-10 h-full'>
            <div className='bg-white p-7 shadow-[0_10px_30px_0px_rgba(0,0,0,0.15)] h-full flex flex-col'>
              <p className='text-base text-[#5f5f5f] leading-7 mb-10'>
                It is a collection of acrylic film-coated MDF in high gloss and supermatt finishes. The range comes in
                the most current trend-orientated colours. It offers excellent scratch, chemical and stain resistance as
                well as excellent UV resistance for colour stability.
              </p>
              <div className='flex sm:flex-row flex-col gap-y-4 sm:gap-y-0 sm:gap-x-4 mt-auto'>
                <a
                  href='#'
                  className='text-base font-semibold text-black border border-primary lg:py-4 lg:px-6 md:py-4 md:px-3 py-4 px-6 block text-center hover:bg-primary hover:text-white transition-all'
                >
                  View Decors{' '}
                </a>
                <a
                  href='#'
                  className='text-base font-semibold text-black border border-black lg:py-4 lg:px-6 md:py-4 md:px-3 py-4 px-6 block text-center bg-black hover:text-black text-white hover:bg-white transition-all'
                >
                  Order Sample
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-1 flex flex-col'>
          <div className='flex sm:flex-row flex-col sm:items-end'>
            <div className='sm:w-[60%]'>
              <img src='images/swiss-krono.webp' alt='' className='w-full' />
            </div>
            <div className='relative relative py-5 pl-5 pr-10 before:border-solid before:border-t-[bg-transparent] before:border-r-[#fff] before:border-b-[#f82f45] before:border-l-[bg-transparent] before:border-t-0 sm:before:border-r-[40px] before:border-b-[72px] before:border-l-0 before:absolute before:w-full before:h-full before:-top-2 before:md:top-0 before:left-0 before:-z-10 sm:w-[40%] lg:bottom-10 bottom-0'>
              <h5 className='lg:text-xl text-base pr-8 font-semibold text-white'>Swiss Krono</h5>
            </div>
          </div>
          <div className='xl:ml-16 lg:ml-12 ml:ml-8 ml-0 relative lg:-mt-10 h-full'>
            <div className='bg-white p-7 shadow-[0_10px_30px_0px_rgba(0,0,0,0.15)] h-full flex flex-col'>
              <p className='text-base text-[#5f5f5f] leading-7 mb-10'>
                The 2021-22 collection of furniture decors from Switzerland delivers the latest global design trends.
                The range encompasses colour, wood and design surfaces offering numerous ways to achieve endless design
                possibilities.
              </p>
              <div className='flex sm:flex-row flex-col gap-y-4 sm:gap-y-0 sm:gap-x-4 mt-auto'>
                <a
                  href='#'
                  className='text-base font-semibold text-black border border-primary lg:py-4 lg:px-6 md:py-4 md:px-3 py-4 px-6 block text-center hover:bg-primary hover:text-white transition-all'
                >
                  View Decors{' '}
                </a>
                <a
                  href='#'
                  className='text-base font-semibold text-black border border-black lg:py-4 lg:px-6 md:py-4 md:px-3 py-4 px-6 block text-center bg-black hover:text-black text-white hover:bg-white transition-all'
                >
                  Order Sample
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-1 flex flex-col'>
          <div className='flex sm:flex-row flex-col sm:items-end'>
            <div className='sm:w-[60%]'>
              <img src='images/swiss-krono.webp' alt='' className='w-full' />
            </div>
            <div className='relative relative py-5 pl-5 pr-10 before:border-solid before:border-t-[bg-transparent] before:border-r-[#fff] before:border-b-[#f82f45] before:border-l-[bg-transparent] before:border-t-0 sm:before:border-r-[40px] before:border-b-[72px] before:border-l-0 before:absolute before:w-full before:h-full before:-top-2 before:md:top-0 before:left-0 before:-z-10 sm:w-[40%] lg:bottom-10 bottom-0'>
              <h5 className='lg:text-xl text-base pr-8 font-semibold text-white'>Alvic</h5>
            </div>
          </div>
          <div className='xl:ml-16 lg:ml-12 ml:ml-8 ml-0 relative lg:-mt-10 h-full'>
            <div className='bg-white p-7 shadow-[0_10px_30px_0px_rgba(0,0,0,0.15)] h-full flex flex-col'>
              <p className='text-base text-[#5f5f5f] leading-7 mb-10'>
                Alvic's Lux collection features high gloss finish boards with excellent physical and mechanical
                performance. It is available in a wide range of colours and designs. Alvic's Syncron collection boasts
                textured panels with attractive and unusual decorative designs creating natural and stunning decorative
                looks.
              </p>
              <div className='flex sm:flex-row flex-col gap-y-4 sm:gap-y-0 sm:gap-x-4 mt-auto'>
                <a
                  href='#'
                  className='text-base font-semibold text-black border border-primary lg:py-4 lg:px-6 md:py-4 md:px-3 py-4 px-6 block text-center hover:bg-primary hover:text-white transition-all'
                >
                  View Decors{' '}
                </a>
                <a
                  href='#'
                  className='text-base font-semibold text-black border border-black lg:py-4 lg:px-6 md:py-4 md:px-3 py-4 px-6 block text-center bg-black hover:text-black text-white hover:bg-white transition-all'
                >
                  Order Sample
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-1 flex flex-col'>
          <div className='flex sm:flex-row flex-col sm:items-end'>
            <div className='sm:w-[60%]'>
              <img src='images/swiss-krono.webp' alt='' className='w-full' />
            </div>
            <div className='relative relative py-5 pl-5 pr-10 before:border-solid before:border-t-[bg-transparent] before:border-r-[#fff] before:border-b-[#f82f45] before:border-l-[bg-transparent] before:border-t-0 sm:before:border-r-[40px] before:border-b-[90px] before:border-l-0 before:absolute before:w-full before:h-full before:-top-2 before:md:top-0 before:left-0 before:-z-10 sm:w-[40%] lg:bottom-10 bottom-0'>
              <h5 className='lg:text-xl text-base pr-8 font-semibold text-white'>Grooved Boards</h5>
            </div>
          </div>
          <div className='xl:ml-16 lg:ml-12 ml:ml-8 ml-0 relative lg:-mt-10 h-full'>
            <div className='bg-white p-7 shadow-[0_10px_30px_0px_rgba(0,0,0,0.15)] h-full flex flex-col'>
              <p className='text-base text-[#5f5f5f] leading-7 mb-10'>
                Grooved decorative boards are expertly machined in our factory using Finsa's Hidrofugo moisture
                resistant MDF, Twincolour MDF or oak veneered black MDF and come in five different designs with a
                smooth, clean-cut finish ready for a coat of paint or lacquer.
              </p>
              <div className='flex sm:flex-row flex-col gap-y-4 sm:gap-y-0 sm:gap-x-4 mt-auto'>
                <a
                  href='#'
                  className='text-base font-semibold text-black border border-primary lg:py-4 lg:px-6 md:py-4 md:px-3 py-4 px-6 block text-center hover:bg-primary hover:text-white transition-all'
                >
                  View Decors{' '}
                </a>
                <a
                  href='#'
                  className='text-base font-semibold text-black border border-black lg:py-4 lg:px-6 md:py-4 md:px-3 py-4 px-6 block text-center bg-black hover:text-black text-white hover:bg-white transition-all'
                >
                  Order Sample
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-1 flex flex-col'>
          <div className='flex sm:flex-row flex-col sm:items-end'>
            <div className='sm:w-[60%]'>
              <img src='images/swiss-krono.webp' alt='' className='w-full' />
            </div>
            <div className='relative relative py-5 pl-5 pr-10 before:border-solid before:border-t-[bg-transparent] before:border-r-[#fff] before:border-b-[#f82f45] before:border-l-[bg-transparent] before:border-t-0 sm:before:border-r-[40px] before:border-b-[72px] before:border-l-0 before:absolute before:w-full before:h-full before:-top-2 before:md:top-0 before:left-0 before:-z-10 sm:w-[40%] lg:bottom-10 bottom-0'>
              <h5 className='lg:text-xl text-base pr-8 font-semibold text-white'>Senoplast</h5>
            </div>
          </div>
          <div className='xl:ml-16 lg:ml-12 ml:ml-8 ml-0 relative lg:-mt-10 h-full'>
            <div className='bg-white p-7 shadow-[0_10px_30px_0px_rgba(0,0,0,0.15)] h-full flex flex-col'>
              <p className='text-base text-[#5f5f5f] leading-7 mb-10'>
                It is a collection of acrylic film-coated MDF in high gloss and supermatt finishes. The range comes in
                the most current trend-orientated colours. It offers excellent scratch, chemical and stain resistance as
                well as excellent UV resistance for colour stability.
              </p>
              <div className='flex sm:flex-row flex-col gap-y-4 sm:gap-y-0 sm:gap-x-4 mt-auto'>
                <a
                  href='#'
                  className='text-base font-semibold text-black border border-primary lg:py-4 lg:px-6 md:py-4 md:px-3 py-4 px-6 block text-center hover:bg-primary hover:text-white transition-all'
                >
                  View Decors{' '}
                </a>
                <a
                  href='#'
                  className='text-base font-semibold text-black border border-black lg:py-4 lg:px-6 md:py-4 md:px-3 py-4 px-6 block text-center bg-black hover:text-black text-white hover:bg-white transition-all'
                >
                  Order Sample
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
