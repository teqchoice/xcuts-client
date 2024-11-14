import { NumberInput, Textarea, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'

function ContactUsPage() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      email: '',
      phoneNo: '',
      postCode: '',
      message: ''
    },

    validate: {
      email: value => (/^\S+@\S+$/.test(value) ? null : 'Invalid email')
    }
  })
  return (
    <div className='max-w-full flex flex-col justify-center items-center text-center my-8'>
      <div className='w-4/6 flex justify-start items-start text-start'>
        <h1 className='text-4xl'>Contact Us</h1>
      </div>
      <div className='w-4/6 flex justify-center items-center text-center'>
        <div>
          <h1 className='text-2xl'>GET IN TOUCH</h1>
          <form onSubmit={form.onSubmit(values => console.log(values))}>
            <TextInput placeholder='Name' {...form.getInputProps('name')} />
            <TextInput placeholder='Email' {...form.getInputProps('email')} />
            <NumberInput placeholder='Number No.' {...form.getInputProps('phoneNo')} />
            <NumberInput placeholder='Post Code' {...form.getInputProps('postCode')} />
            <Textarea placeholder='Message' minRows={4} />
          </form>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default ContactUsPage
