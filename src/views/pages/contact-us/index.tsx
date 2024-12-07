import { token } from '@/extensions/redux/api/auth'
import { LocalTwo, Mail, PhoneTelephone } from '@icon-park/react'
import { Button, NumberInput, rem, Textarea, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import axios from 'axios'
import { useEffect } from 'react'
import toast from 'react-hot-toast'

function ContactUsPage() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      message: '',
      phone: Number
    },

    validate: {
      email: value => (/^\S+@\S+$/.test(value) ? null : 'Invalid email')
    }
  })
  const submitHandler = () => {
    // console.log(form.values)
    let data = form.values
    let config = {
      method: 'post',
      url: 'https://cms.xcuts.co.uk/items/contact_us',
      data: data,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }

    axios
      .request(config)
      .then(response => {
        // console.log(response)
        toast.success('Successfull')
      })
      .catch(error => {
        console.log(error)
        toast.error('Error')
      })
  }

  // useEffect(() => {
  //   let gfdgfd = {
  //     name: 'test2',
  //     email: 'test@test.test',
  //     message: 'test',
  //     phone: '09198282615'
  //   }

  //   let config = {
  //     method: 'post',
  //     maxBodyLength: Infinity,
  //     url: 'https://cms.xcuts.co.uk/items/contact_us',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     data: gfdgfd
  //   }

  //   axios
  //     .request(config)
  //     .then(response => {
  //       console.log(JSON.stringify(response.data))
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }, [])

  return (
    <div className='max-w-full max-h-[540px]  flex flex-col justify-center items-center text-center my-16'>
      <div className='w-4/6 flex justify-start items-start text-start'>
        <h1 className='text-4xl'>Contact Us</h1>
      </div>
      <div className='w-4/6 h-[540px] flex justify-center items-center text-center mb-8'>
        <form
          className='w-3/6 flex flex-col justify-start items-start text-start p-2 text-xl mx-4'
          onSubmit={form.onSubmit(submitHandler)}
        >
          <h1 className='text-2xl my-2'>GET IN TOUCH</h1>
          {/* <TextInput style={{ paddingTop: '6px', width: '100%' }} placeholder='Name' {...form.getInputProps('name')} /> */}
          <input
            className='w-full border-b-4 border-gray-300 p-2 my-2'
            type='text'
            placeholder='Name'
            {...form.getInputProps('name')}
          />
          <input
            className='w-full border-b-4 border-gray-300 p-2 my-2'
            type='email'
            placeholder='Email'
            {...form.getInputProps('email')}
          />
          <input
            className='w-full border-b-4 border-gray-300 p-2 my-2'
            type='number'
            placeholder='Phone'
            {...form.getInputProps('phone')}
          />
          {/* <input
            className='w-full border-b-4 border-gray-300 p-2 my-2'
            type='number'
            placeholder='Post Code'
            {...form.getInputProps('postCode')}
          /> */}
          <textarea
            className='w-full border-b-4 border-gray-300 p-2 my-2'
            minrows={4}
            placeholder='Message'
            {...form.getInputProps('message')}
          />
          <button className='w-full bg-primary p-2 mt-2 text-white'>Send</button>
        </form>
        <div className='w-3/6 h-[540px]  flex flex-col justify-center items-center text-center bg-primary text-white  p-2 text-lg mx-4 border-r-[50px] border-yellow-400'>
          <div className='flex flex-col justify-center items-center text-center p-2  my-2 '>
            <PhoneTelephone theme='filled' size='30' fill='white' strokeLinejoin='miter' strokeLinecap='square' />
            <p className='text-yellow-400'>Call Us</p>
            <span>+44(0)1707907000</span>
          </div>
          <div className='flex flex-col justify-center items-center text-center p-2  my-2'>
            <LocalTwo size='30' fill='white' strokeLinejoin='miter' strokeLinecap='square' />
            <p className='text-yellow-400'>Address</p>
            <span>Unit 33 -35 The IO Centre, Hearle Way, Hatfield, AL10 9EW</span>
          </div>
          <div className='flex flex-col justify-center items-center text-center p-2  my-2'>
            <Mail size='30' fill='white' strokeLinejoin='miter' strokeLinecap='square' />
            <p className='text-yellow-400'>Email Us</p>
            <span>hello@xcuts.co.uk</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUsPage
