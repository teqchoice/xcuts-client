import { useForm } from '@mantine/form'
import { TextInput, Button, Group, Box, Textarea, NumberInput } from '@mantine/core'
import { randomId } from '@mantine/hooks'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { token } from '@/extensions/redux/api/auth'
import toast from 'react-hot-toast'
import Delivery from './delivery'

export default function Dtails() {
  const [data, setData] = useState()
  // console.log(data?.data.)
  // console.log(token)
  //   const [value, setValue] = useState({
  //     email: '',
  //     first_name: '',
  //     last_name: '',
  //     phone: '',
  //     province: '',
  //     city: '',
  //     delivery_address: '',
  //     building_address: '',
  //     description: ''
  //   })
  const form = useForm({
    initialValues: {
      first_name: '',
      last_name: '',
      // email: '',
      phone: '',
      description: ''
      // delivery_address: '',
      // building_address: '',
    }
  })
  const formBilling = useForm({
    initialValues: {
      first_name: '',
      last_name: '',
      address_line1: '',
      address_line2: '',
      city: '',
      postcode: '',
      contact_no: '',
      email_address: ''
      // delivery_address: '',
      // building_address: '',
      // description: ''
    }
  })
  const formPass = useForm({
    initialValues: {
      password: '',
      password2: ''
    }
  })
  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://shop.xcuts.co.uk/users/me',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    axios
      .request(config)
      .then(response => {
        // form.setValues(response.data[0])
        console.log(response.data)
        setData(response?.data)
      })
      .catch(error => {
        console.log(error)
      })
    // console.log(value)
  }, [])

  function handleSendBilling() {
    // console.log(formBilling.values)

    let config = {
      method: 'patch',
      maxBodyLength: Infinity,
      url: 'https://shop.xcuts.co.uk/users/me',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
      // data: [...data?.data, formBilling?.values]
    }

    axios
      .request(config)
      .then(response => {
        console.log(response)
        toast.success('updated successfully')
      })
      .catch(error => {
        console.log(error)
        toast.error('something went wrong')
      })
  }
  function handleSendForm() {
    // console.log(form.values)
    // let data = form.values

    let config = {
      method: 'patch',
      maxBodyLength: Infinity,
      url: 'https://shop.xcuts.co.uk/users/me',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      data: form.values
    }

    axios
      .request(config)
      .then(response => {
        // console.log(response)
        toast.success('updated successfully')
      })
      .catch(error => {
        // console.log(error)
        toast.error('something went wrong')
      })
  }
  function handleSendPass() {
    // console.log(form.values)
    // let data = form.values

    let config = {
      method: 'put',
      maxBodyLength: Infinity,
      url: 'https://api.xcuts.co.uk/api/user/change_password',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      data: formPass.values
    }

    axios
      .request(config)
      .then(response => {
        // console.log(response.data)
        toast.success('updated successfully')
      })
      .catch(error => {
        console.log(error)
        toast.success('something went wrong')
      })
  }

  return (
    <div className='grid w-full gap-3 p-3'>
      <div className='grid w-full gap-10'>
        <div>
          <h3 className='relative z-10 w-fit p-1 font-bold text-2xl bg-white mt-2'>Identity information</h3>
          <div className='-mt-4 mb-3 grid grid-cols-2 gap-3 border border-gray-400 p-5'>
            <TextInput
              label='First Name'
              placeholder={data ? data?.data?.first_name : 'first name'}
              styles={{
                input: {
                  border: '1px solid #49494940',
                  borderRadius: '3px',
                  width: '100%',
                  padding: '5px',
                  color: '#7e7d7d'
                }
              }}
              {...form.getInputProps('first_name')}
            />

            <TextInput
              label='Last Name'
              placeholder={data ? data?.data?.last_name : 'last name'}
              styles={{
                input: {
                  border: '1px solid #49494940',
                  borderRadius: '3px',
                  width: '100%',
                  padding: '5px',
                  color: '#7e7d7d'
                }
              }}
              {...form.getInputProps('last_name')}
            />
            {/* <TextInput
              mt='md'
              label='Email'
              placeholder={data ? data?.data?.email : 'Email'}
              styles={{
                input: {
                  border: '1px solid #49494940',
                  borderRadius: '3px',
                  width: '100%',
                  padding: '5px',
                  color: '#7e7d7d'
                }
              }}
              {...form.getInputProps('email')}
              disabled
            /> */}
            <TextInput
              label='Phone'
              placeholder={data?.data?.phone ? data?.data?.phone : 'phone'}
              styles={{
                input: {
                  border: '1px solid #49494940',
                  borderRadius: '3px',
                  width: '100%',
                  padding: '5px',
                  color: '#7e7d7d'
                }
              }}
              {...form.getInputProps('phone')}
            />
            <Textarea
              className='col-span-2'
              label='Description'
              placeholder={data ? data?.data?.description : 'description'}
              rows={4}
              styles={{
                input: {
                  border: '1px solid #49494940',
                  borderRadius: '3px',
                  width: '100%',
                  padding: '5px',
                  color: '#7e7d7d'
                }
              }}
              {...form.getInputProps('description')}
            />
          </div>

          <Group justify='center' mt='xl'>
            <Button
              className='bg-primary text-white border py-2 px-3 hover:bg-white hover:text-black'
              onClick={handleSendForm}
            >
              Update Details
            </Button>
          </Group>
        </div>

        <div>
          <h3 className='relative z-10 w-fit p-1 font-bold text-2xl bg-white mt-2'>Billing Address</h3>
          <div className='-mt-4 mb-3 grid gap-3 border border-gray-400 p-5'>
            {/* <TextInput
                label='Email'
                placeholder='email'
                styles={{
                  input: {
                    border: '1px solid #49494940',
                    borderRadius: '3px',
                    width: '100%',
                    padding: '5px',
                    color: '#7e7d7d'
                  }
                }}
                {...form.getInputProps('billing-email')}
              /> */}
            {/* <TextInput
                label='Phone'
                placeholder='phone'
                styles={{
                  input: {
                    border: '1px solid #49494940',
                    borderRadius: '3px',
                    width: '100%',
                    padding: '5px',
                    color: '#7e7d7d'
                  }
                }}
                {...form.getInputProps('billing-phone')}
              /> */}
            {/* <TextInput
                label='FirstName'
                placeholder='firstName'
                styles={{
                  input: {
                    border: '1px solid #49494940',
                    borderRadius: '3px',
                    width: '100%',
                    padding: '5px',
                    color: '#7e7d7d'
                  }
                }}
                {...form.getInputProps('billing-firstName')}
              /> */}
            {/* <TextInput
                label='LastName'
                placeholder='lastName'
                styles={{
                  input: {
                    border: '1px solid #49494940',
                    borderRadius: '3px',
                    width: '100%',
                    padding: '5px',
                    color: '#7e7d7d'
                  }
                }}
                {...form.getInputProps('billing-lastName')}
              /> */}
            <div className='-mt-2 mb-3 grid grid-cols-2 gap-3 p-2'>
              <TextInput
                label='First Name'
                placeholder='first name'
                styles={{
                  input: {
                    border: '1px solid #49494940',
                    borderRadius: '3px',
                    width: '100%',
                    padding: '5px',
                    color: '#7e7d7d'
                  }
                }}
                {...formBilling.getInputProps('first_name')}
              />
              <TextInput
                label='Last Name'
                placeholder='last name'
                styles={{
                  input: {
                    border: '1px solid #49494940',
                    borderRadius: '3px',
                    width: '100%',
                    padding: '5px',
                    color: '#7e7d7d'
                  }
                }}
                {...formBilling.getInputProps('last_name')}
              />
            </div>
            <div className='-mt-2 mb-3 grid grid-cols-1 gap-3 p-2'>
              <TextInput
                label='Address line 1'
                placeholder='Address line 1'
                styles={{
                  input: {
                    border: '1px solid #49494940',
                    borderRadius: '3px',
                    width: '100%',
                    padding: '5px',
                    color: '#7e7d7d'
                  }
                }}
                {...formBilling.getInputProps('address_line1')}
              />
              <TextInput
                label='Address line 2'
                placeholder='Address line 2'
                styles={{
                  input: {
                    border: '1px solid #49494940',
                    borderRadius: '3px',
                    width: '100%',
                    padding: '5px',
                    color: '#7e7d7d'
                  }
                }}
                {...formBilling.getInputProps('address_line2')}
              />
            </div>
            <div className='-mt-2 mb-3 grid grid-cols-2 gap-3 p-2'>
              <TextInput
                label='Town/city'
                placeholder='Town/city'
                styles={{
                  input: {
                    border: '1px solid #49494940',
                    borderRadius: '3px',
                    width: '100%',
                    padding: '5px',
                    color: '#7e7d7d'
                  }
                }}
                {...formBilling.getInputProps('city')}
              />
              <NumberInput
                label='Postcode'
                placeholder='Postcode'
                styles={{
                  input: {
                    border: '1px solid #49494940',
                    borderRadius: '3px',
                    width: '100%',
                    padding: '5px',
                    color: '#7e7d7d'
                  }
                }}
                {...formBilling.getInputProps('postcode')}
              />
            </div>
            <div className='-mt-2 mb-3 grid grid-cols-2 gap-3 p-2'>
              <NumberInput
                label='Contact no'
                placeholder='Contact no'
                styles={{
                  input: {
                    border: '1px solid #49494940',
                    borderRadius: '3px',
                    width: '100%',
                    padding: '5px',
                    color: '#7e7d7d'
                  }
                }}
                {...formBilling.getInputProps('contact_no')}
              />
              <TextInput
                label='Email Address'
                placeholder='Email Address'
                styles={{
                  input: {
                    border: '1px solid #49494940',
                    borderRadius: '3px',
                    width: '100%',
                    padding: '5px',
                    color: '#7e7d7d'
                  }
                }}
                {...formBilling.getInputProps('email_address')}
              />
            </div>

            {/* <TextInput
                label='Address line2'
                placeholder='line2_address'
                styles={{
                  input: {
                    border: '1px solid #49494940',
                    borderRadius: '3px',
                    width: '100%',
                    padding: '5px',
                    color: '#7e7d7d'
                  }
                }}
                {...form.getInputProps('line2_address')}
              /> */}
          </div>
          <Group justify='center' mt='xl'>
            <Button
              className='bg-primary text-white border py-2 px-3 hover:bg-white hover:text-black'
              onClick={handleSendBilling}
            >
              Update Address
            </Button>
          </Group>
        </div>

        <Delivery />

        <div>
          <h3 className='relative z-10 w-fit p-1 font-bold text-2xl bg-white mt-2'>Change Password</h3>
          <div className='-mt-4 mb-3 grid gap-3 border border-gray-400 p-5'>
            <TextInput
              label='Old password'
              placeholder='password'
              type='password'
              styles={{
                input: {
                  border: '1px solid #49494940',
                  borderRadius: '3px',
                  width: '100%',
                  padding: '5px',
                  color: '#7e7d7d'
                }
              }}
              {...formPass.getInputProps('password')}
            />
            <TextInput
              label='New password'
              placeholder='password2'
              type='password2'
              styles={{
                input: {
                  border: '1px solid #49494940',
                  borderRadius: '3px',
                  width: '100%',
                  padding: '5px',
                  color: '#7e7d7d'
                }
              }}
              {...formPass.getInputProps('password2')}
            />
          </div>
          <Group justify='center' mt='xl'>
            <Button
              className='bg-primary text-white border py-2 px-3 hover:bg-white hover:text-black'
              onClick={handleSendPass}
            >
              Update Password
            </Button>
          </Group>
        </div>
      </div>
    </div>
  )
}
