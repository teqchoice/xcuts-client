import React from 'react'
import { useForm } from '@mantine/form'
import axios from 'axios'
import { Lock, Mail } from '@icon-park/react'
import { TextInput } from '@mantine/core'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'
// import Cookies from 'universal-cookie'

// const cookie = new Cookies()

export default function Register() {
  const router = useRouter()
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
      password_val: ''
    }
  })

  function handleSend() {
    if (form.values.password === form.values.password_val) {
      // console.log(form.values)

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://api.xcuts.co.uk/api/user/user-add/',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          email: form.values.email,
          password: form.values.password
        }
      }

      axios
        .request(config)
        .then(response => {
          // console.log(response.data)
          toast.success('Registration was successful')
          window.location.replace('/login')
        })
        .catch(error => {
          console.log(error)
          toast.error('Check your email or password')
        })
    } else {
      toast.error('The correct password was not entered')
    }

    // let config = {
    //   method: 'post',
    //   maxBodyLength: Infinity,
    //   url: 'https://api.xcuts.co.uk/api/login/',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   data: form.values
    // }

    // axios
    //   .request(config)
    //   .then(response => {
    //     console.log(response.data)
    //     const oneWeekFromNow = new Date()
    //     oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7)
    //     cookie.set('jwt', response.data?.access, {
    //       expires: oneWeekFromNow
    //     })
    //     window.location.replace('/dashboard')
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
  }

  return (
    <section className='lg:py-36 md:py-24 py-9'>
      <div className='px-4 sm:container'>
        <div className='grid md:grid-cols-2'>
          <div className='py-10'>
            <div className='bg-[#f2f2f2] lg:py-12 md:py-10 lg:px-14 md:px-6 px-4 py-10 lg:-mr-14 md:-mr-10 relative drop-shadow-[0_29px_20px_rgba(0,0,0,0.10)] h-full flex items-center '>
              <div className='w-full'>
                <div className='text-center'>
                  <p className='text-3xl text-black'>Sign up</p>
                  <h3 className='text-3xl font-bold'>Register your account</h3>
                </div>
                <form onSubmit={form.onSubmit(handleSend)}>
                  <div className='mb-7 mt-10'>
                    <div className='relative'>
                      <input
                        id='email'
                        type='email'
                        className='appearance-none rounded-lg h-[92px] w-full py-3 px-4 pl-24 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-l-8 border-primary drop-shadow-[0_10px_25px_rgba(0,0,0,0.10)]'
                        placeholder='Enter your email address'
                        {...form.getInputProps('email')}
                      />
                      {/* <TextInput
                        placeholder='Enter your email address'
                        // styles={{
                        //   input: {
                        //     border: '1px solid #49494940',
                        //     borderRadius: '3px',
                        //     width: '100%',
                        //     padding: '5px',
                        //     color: '#7e7d7d'
                        //   }
                        // }}
                        {...form.getInputProps('email')}
                        className='appearance-none rounded-lg h-[92px] w-full py-3 px-4 pl-24 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-l-8 border-primary drop-shadow-[0_10px_25px_rgba(0,0,0,0.10)]'
                      /> */}
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
                        placeholder='Choose your password'
                        {...form.getInputProps('password')}
                      />
                      <div className='absolute top-1/2 -translate-y-1/2 left-4 w-16 h-16 flex justify-center items-center border-r border-[#d0d0d0]'>
                        <Lock className='cursor-pointer' theme='outline' strokeWidth={2} size='35' />
                      </div>
                    </div>
                  </div>
                  <div className='mb-7'>
                    <div className='relative'>
                      <input
                        id='password_val'
                        type='password'
                        className='appearance-none rounded-lg h-[92px] w-full py-3 px-4 pl-24 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-l-8 border-primary drop-shadow-[0_10px_25px_rgba(0,0,0,0.10)]'
                        placeholder='Confirm password'
                        {...form.getInputProps('password_val')}
                      />
                      <div className='absolute top-1/2 -translate-y-1/2 left-4 w-16 h-16 flex justify-center items-center border-r border-[#d0d0d0]'>
                        <Lock className='cursor-pointer' theme='outline' strokeWidth={2} size='35' />
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center justify-center'>
                    <button
                      className='bg-black text-white font-medium text-xl py-4 px-14 focus:outline-none focus:shadow-outline inline-block'
                      // onClick={handleSend}
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className=''>
            <div className='bg-primary lg:py-12 md:py-10 xl:px-24 lg:px-14 md:px-12 px-6 py-6 lg:min-h-[759px] md:min-h-[759px] min-h-[410px] flex items-center justify-center'>
              <div className='text-center'>
                <h3 className='lg:text-5xl md:text-3xl text-3xl font-normal text-white mb-5'>
                  Do you have an account <span className='font-semibold'>XCUTS?</span>
                </h3>
                {/* <p className='text-xl text-white'>Enter your details and start your journey with us</p> */}
                <div className='mt-7'>
                  <a
                    href='#'
                    className='drop-shadow-[0_5px_15px_rgba(0,0,0,0.30)] text-xl text-black font-medium lg:py-5 lg:px-14 py-3 px-8 inline-block bg-white hover:bg-black transition-all hover:text-white'
                    onClick={() => router.push('/login')}
                  >
                    Sign in to account
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
