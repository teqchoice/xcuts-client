import { useForm } from '@mantine/form'
import { TextInput, Button, Group, Box, Textarea } from '@mantine/core'
import { randomId } from '@mantine/hooks'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { token } from '@/extensions/redux/api/auth'

export default function Dtails() {
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
      email: '',
      first_name: '',
      last_name: '',
      phone: '',
      province: '',
      city: '',
      delivery_address: '',
      building_address: '',
      description: ''
    }
  })
  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://api.xcuts.co.uk/api/user/get-user/',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    axios
      .request(config)
      .then(response => {
        form.setValues(response.data[0])
        // console.log(response.data[0])
      })
      .catch(error => {
        console.log(error)
      })
    // console.log(value)
  }, [])

  function handleSend() {
    // console.log(form.values)
    // let data = form.values

    let config = {
      method: 'put',
      maxBodyLength: Infinity,
      url: 'https://api.xcuts.co.uk/api/user/customer-user-update/',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      data: form.values
    }

    axios
      .request(config)
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div className='grid w-full gap-3 p-3'>
      <div className='grid  w-full gap-10'>
        <div>
          <h3 className='relative z-10 w-fit p-1 font-bold text-2xl bg-white mt-2'>Identity information</h3>
          <div className='-mt-4 mb-3 grid grid-cols-2 gap-3 border border-gray-400 p-5'>
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
              {...form.getInputProps('first_name')}
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
              {...form.getInputProps('last_name')}
            />
            <TextInput
              mt='md'
              label='Email'
              placeholder='Email'
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
            />
            <TextInput
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
              {...form.getInputProps('phone')}
            />
            <Textarea
              className='col-span-2'
              label='Description'
              placeholder='description'
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
              onClick={handleSend}
            >
              Update Details
            </Button>
          </Group>
        </div>
        <div className='grid lg:grid-cols-2 gap-5'>
          <div>
            <h3 className='relative z-10 w-fit p-1 font-bold text-2xl bg-white mt-2'>Billing Address</h3>
            <div className='-mt-4 mb-3 grid gap-3 border border-gray-400 p-5'>
              <TextInput
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
              />
              <TextInput
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
              />
              <TextInput
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
              />
              <TextInput
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
              />
              <TextInput
                label='Province'
                placeholder='province'
                styles={{
                  input: {
                    border: '1px solid #49494940',
                    borderRadius: '3px',
                    width: '100%',
                    padding: '5px',
                    color: '#7e7d7d'
                  }
                }}
                {...form.getInputProps('province')}
              />
              <TextInput
                label='City'
                placeholder='city'
                styles={{
                  input: {
                    border: '1px solid #49494940',
                    borderRadius: '3px',
                    width: '100%',
                    padding: '5px',
                    color: '#7e7d7d'
                  }
                }}
                {...form.getInputProps('city')}
              />

              <TextInput
                label='Address line1'
                placeholder='line1_address'
                styles={{
                  input: {
                    border: '1px solid #49494940',
                    borderRadius: '3px',
                    width: '100%',
                    padding: '5px',
                    color: '#7e7d7d'
                  }
                }}
                {...form.getInputProps('line1_address')}
              />
              <TextInput
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
              />
            </div>
            <Group justify='center' mt='xl'>
              <Button
                className='bg-primary text-white border py-2 px-3 hover:bg-white hover:text-black'
                onClick={handleSend}
              >
                Update Address
              </Button>
            </Group>
          </div>

          <div>
            <h3 className='relative z-10 w-fit p-1 font-bold text-2xl bg-white mt-2'>Delivery Address</h3>
            <div className='-mt-4 mb-3 grid gap-3 border border-gray-400 p-5'>
              <TextInput
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
              />
              <TextInput
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
              />
              <TextInput
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
              />
              <TextInput
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
              />
              <TextInput
                label='Province'
                placeholder='province'
                styles={{
                  input: {
                    border: '1px solid #49494940',
                    borderRadius: '3px',
                    width: '100%',
                    padding: '5px',
                    color: '#7e7d7d'
                  }
                }}
                {...form.getInputProps('province')}
              />
              <TextInput
                label='City'
                placeholder='city'
                styles={{
                  input: {
                    border: '1px solid #49494940',
                    borderRadius: '3px',
                    width: '100%',
                    padding: '5px',
                    color: '#7e7d7d'
                  }
                }}
                {...form.getInputProps('city')}
              />

              <TextInput
                label='Address line1'
                placeholder='line1_address'
                styles={{
                  input: {
                    border: '1px solid #49494940',
                    borderRadius: '3px',
                    width: '100%',
                    padding: '5px',
                    color: '#7e7d7d'
                  }
                }}
                {...form.getInputProps('line1_address')}
              />
              <TextInput
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
              />
            </div>
            <Group justify='center' mt='xl'>
              <Button
                className='bg-primary text-white border py-2 px-3 hover:bg-white hover:text-black'
                onClick={handleSend}
              >
                Update Address
              </Button>
            </Group>
          </div>
        </div>

        <div>
          <h3 className='relative z-10 w-fit p-1 font-bold text-2xl bg-white mt-2'>Change Password</h3>
          <div className='-mt-4 mb-3 grid gap-3 border border-gray-400 p-5'>
            <TextInput
              label='New password'
              placeholder='new password'
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
              {...form.getInputProps('n-pass')}
            />
            <TextInput
              label='Repeat password'
              placeholder='repeat password'
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
              {...form.getInputProps('r-pass')}
            />
          </div>
          <Group justify='center' mt='xl'>
            <Button
              className='bg-primary text-white border py-2 px-3 hover:bg-white hover:text-black'
              onClick={handleSend}
            >
              Update Password
            </Button>
          </Group>
        </div>
      </div>
    </div>
  )
}
