import { passwordvrify } from '@/extensions/redux/slice/optionsSlice'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Login({ Data }: any) {
  const { password } = useSelector((state: any) => state.options)
  const dispatch = useDispatch()
  const [value, setValue] = useState('')
  function submitfunc() {
    if (password === value) {
      console.log(value)
      dispatch(passwordvrify(true))
    }
  }
  return (
    <section className='lg:py-36 md:py-24 py-9'>
      <div className='px-4 sm:container'>
        <div className='grid md:grid-cols-2'>
          <div className='py-10'>
            <div className='bg-[#f2f2f2] lg:py-12 md:py-10 lg:px-14 md:px-6 px-4 py-10 lg:-mr-14 md:-mr-10 relative drop-shadow-[0_29px_20px_rgba(0,0,0,0.10)] h-full flex items-center '>
              <div className='w-full'>
                <div className='text-center'>
                  <p className='text-3xl text-black'>Sign in</p>
                  <h3 className='text-3xl font-bold'>Continue to your account</h3>
                </div>
                <form action=''>
                  <div className='mb-7 mt-10'>
                    <div className='relative'>
                      <input
                        id='email'
                        type='email'
                        className='appearance-none rounded-lg h-[92px] w-full py-3 px-4 pl-24 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-l-8 border-primary drop-shadow-[0_10px_25px_rgba(0,0,0,0.10)]'
                        placeholder='Enter your email address'
                      />
                      <div className='absolute top-1/2 -translate-y-1/2 left-4 w-16 h-16 flex justify-center items-center border-r border-[#d0d0d0]'>
                        {/* <ion-icon name="mail" className="text-[#999999] text-3xl"></ion-icon> */}
                      </div>
                    </div>
                  </div>
                  <div className='mb-7'>
                    <div className='relative'>
                      <input
                        id='password'
                        type='password'
                        className='appearance-none rounded-lg h-[92px] w-full py-3 px-4 pl-24 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-l-8 border-primary drop-shadow-[0_10px_25px_rgba(0,0,0,0.10)]'
                        placeholder='Input your password'
                        onChange={e => {
                          setValue(e.target.value)
                        }}
                      />
                      <div className='absolute top-1/2 -translate-y-1/2 left-4 w-16 h-16 flex justify-center items-center border-r border-[#d0d0d0]'>
                        {/* <ion-icon name="lock" className="text-[#999999] text-3xl"></ion-icon> */}
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center justify-center'>
                    <div
                      // type='submit'
                      className='bg-black cursor-pointer text-white font-medium text-xl py-4 px-14 focus:outline-none focus:shadow-outline inline-block'
                      onClick={submitfunc}
                    >
                      Sign in
                    </div>
                  </div>
                  <div className='mt-10 flex justify-between'>
                    <div className='flex items-center space-x-2'>
                      <input
                        type='checkbox'
                        id='remember'
                        className='w-4 h-4 transition duration-300 rounded focus:ring-primary focus:ring-offset-0 focus:outline-none focus:bg-primary focus:ring-primary'
                      />
                      <label className='text-lg font-normal text-black'>Remember me</label>
                    </div>
                    <div className=''>
                      <a href='#' className='text-primary underline hover:no-underline'>
                        Forgot password?
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className=''>
            <div className='bg-primary lg:py-12 md:py-10 xl:px-24 lg:px-14 md:px-12 px-6 py-6 lg:min-h-[759px] md:min-h-[759px] min-h-[410px] flex items-center justify-center'>
              <div className='text-center'>
                <h3 className='lg:text-5xl md:text-3xl text-3xl font-normal text-white mb-5'>
                  New to <span className='font-semibold'>XCUTS?</span>
                </h3>
                <p className='text-xl text-white'>Enter your details and start your journey with us</p>
                <div className='mt-7'>
                  <a
                    href='#'
                    className='drop-shadow-[0_5px_15px_rgba(0,0,0,0.30)] text-xl text-black font-medium lg:py-5 lg:px-14 py-3 px-8 inline-block bg-white hover:bg-black transition-all hover:text-white'
                  >
                    Create an account
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
