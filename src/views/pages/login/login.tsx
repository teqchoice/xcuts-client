import React, { useState } from 'react'
import { useForm } from '@mantine/form'
import axios from 'axios'
import { Lock, Mail } from '@icon-park/react'
import { TextInput } from '@mantine/core'
import Cookies from 'universal-cookie'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'

const cookie = new Cookies()

export default function Login() {
  const router = useRouter()
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
      otp: ''
    }
  })
  const [code, setCode] = useState(false)

  function handleSendCode() {
    // console.log(form.values)

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://shop.xcuts.co.uk/flows/trigger/16833e91-cc5b-46d5-932b-a90885609de7?email=${form.values.email}&password=${form.values.password}`,
      headers: {
        'Content-Type': 'application/json'
      }
    }
    // let config = {
    //   method: 'post',
    //   maxBodyLength: Infinity,
    //   url: `${process.env.NEXT_PUBLIC_SHOP_GATE_API_URL}/users/sendCode`,
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   data: {
    //     email: form.values.email,
    //     password: form.values.password
    //   }
    // }

    axios
      .request(config)
      .then(response => {
        console.log(response.data)

        toast.success('code was sent to your email')
        setCode(true)
        // window.location.replace('/dashboard')
      })
      .catch(error => {
        console.log(error)
        toast.error(error?.response?.data?.detail)
      })
  }

  function handleSubmit() {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://shop.xcuts.co.uk/flows/trigger/4e45ccbf-14e5-4bfa-affb-0ba7c05616d3?email=${form.values.email}&password=${form.values.password}&otp=${form.values.otp}`,
      headers: {
        'Content-Type': 'application/json'
      }
    }

    axios
      .request(config)
      .then(response => {
        cookie.set('jwt', response.data.data.data.access_token)
        toast.success('You have successfully logged in')
        setCode(false)
        window.location.replace('/dashboard')
      })
      .catch(error => {
        toast.error("check your otp")
      })
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
                  {!code ? (
                    <h3 className='text-3xl font-bold'>Continue to your account</h3>
                  ) : (
                    <h3 className='text-3xl font-bold'>Enter the code to continue</h3>
                  )}
                </div>
                <form onSubmit={form.onSubmit(!code ? handleSendCode : handleSubmit)}>
                  <div className='mb-7 mt-10'>
                    <div className='relative'>
                      <input
                        id='email'
                        type='email'
                        className='appearance-none rounded-lg h-[92px] w-full py-3 px-4 pl-24 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-l-8 border-primary drop-shadow-[0_10px_25px_rgba(0,0,0,0.10)]'
                        placeholder='Enter your email address'
                        {...form.getInputProps('email')}
                      />

                      <div className='absolute top-1/2 -translate-y-1/2 left-4 w-16 h-16 flex justify-center items-center border-r border-[#d0d0d0]'>
                        <Mail className='cursor-pointer' theme='outline' strokeWidth={2} size='35' />
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
                        {...form.getInputProps('password')}
                      />
                      <div className='absolute top-1/2 -translate-y-1/2 left-4 w-16 h-16 flex justify-center items-center border-r border-[#d0d0d0]'>
                        <Lock className='cursor-pointer' theme='outline' strokeWidth={2} size='35' />
                      </div>
                    </div>
                  </div>
                  {code && (
                    <div className='mb-7'>
                      <div className='relative'>
                        <input
                          id='otp'
                          type='text'
                          className='appearance-none rounded-lg h-[92px] w-full py-3 px-4 pl-24 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-l-8 border-primary drop-shadow-[0_10px_25px_rgba(0,0,0,0.10)]'
                          placeholder='enter your code'
                          {...form.getInputProps('otp')}
                        />
                        <div className='absolute top-1/2 -translate-y-1/2 left-4 w-16 h-16 flex justify-center items-center border-r border-[#d0d0d0]'>
                          <Lock className='cursor-pointer' theme='outline' strokeWidth={2} size='35' />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className='flex items-center justify-center'>
                    {!code ? (
                      <button
                        className='bg-black text-white font-medium text-xl py-4 px-14 focus:outline-none focus:shadow-outline inline-block'
                        // onClick={handleSend}
                        type='submit'
                      >
                        Sent Code
                      </button>
                    ) : (
                      <button
                        className='bg-black text-white font-medium text-xl py-4 px-14 focus:outline-none focus:shadow-outline inline-block'
                        // onClick={handleSend}
                        type='submit'
                      >
                        Sign in
                      </button>
                    )}
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
                    {/* <div className=''>
                      <a href='#' className='text-primary underline hover:no-underline'>
                        Forgot password?
                      </a>
                    </div> */}
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
                    onClick={() => router.push('/login?register')}
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
