import React from 'react'

export default function Resources(props: any) {
  // console.log(Data)
  return (
    <>
      <section>
        <div className='px-4 sm:container'>
          <div className=' flex justify-center items-center flex-col mt-16'>
            <div className='text-center flex flex-col gap-3 text-black mb-5'>
              {/* <p className='text-3xl'></p> */}
              <h4 className='md:text-5xl text-4xl font-semibold mb-7'>Broad variety of applications</h4>
              <p className='text-base text-black'>
                Blum offers a large selection of hinges solution for practically every situation.
              </p>

              <div className='flex gap-5 my-5 lg:my-10'>
                <div className='flex flex-col items-center justify-between gap-3'>
                  <div>
                    <img className=' w-full object-cover object-center' src='../images/alldecor.jpeg' alt='' />
                    <h4 className='font-bold text-lg'>Standard Application</h4>
                    <p>
                      Hinges for conventional applications with a front thicknesses of up to 24 mm are all available.
                    </p>
                  </div>
                </div>
                <div className='flex flex-col items-center justify-between gap-3'>
                  <div>
                    <img className=' w-full object-cover object-center' src='../images/alldecor.jpeg' alt='' />
                    <h4 className='font-bold text-lg'>Applications for wide-angled hinges</h4>
                    <p>
                      include pull-out surrounds, inner pull-outs, and suitable for cabinet hinges with large opening
                      angles.
                    </p>
                  </div>
                </div>
                <div className='flex flex-col items-center justify-between gap-3'>
                  <div>
                    <img className=' w-full object-cover object-center' src='../images/alldecor.jpeg' alt='' />
                    <h4 className='font-bold text-lg'>Application for profile doors</h4>
                    <p>Hinges for thick doors and doors with a profile as thick as 32 mm</p>
                  </div>
                </div>
                <div className='flex flex-col items-center justify-between gap-3'>
                  <div>
                    <img className=' w-full object-cover object-center' src='../images/alldecor.jpeg' alt='' />
                    <h4 className='font-bold text-lg'>Blind Applications (corners)</h4>
                    <p>Suitable for hinges that overlay or inset blind corner applications.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
