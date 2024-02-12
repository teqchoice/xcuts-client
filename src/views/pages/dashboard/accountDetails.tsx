import { useForm } from '@mantine/form'
import { TextInput, Button, Group, Box } from '@mantine/core'
import { randomId } from '@mantine/hooks'
import { useEffect, useState } from 'react'
import axios from 'axios'

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
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`
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
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`
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
      <div className='grid  w-full gap-3'>
        <div className='grid grid-cols-2 gap-3'>
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
            label='phone'
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
        </div>
        <div className='grid gap-3'>
          <TextInput
            label='province'
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
            label='city'
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
            label='delivery address'
            placeholder='delivery_address'
            styles={{
              input: {
                border: '1px solid #49494940',
                borderRadius: '3px',
                width: '100%',
                padding: '5px',
                color: '#7e7d7d'
              }
            }}
            {...form.getInputProps('delivery_address')}
          />
          <TextInput
            label='building address'
            placeholder='building_address'
            styles={{
              input: {
                border: '1px solid #49494940',
                borderRadius: '3px',
                width: '100%',
                padding: '5px',
                color: '#7e7d7d'
              }
            }}
            {...form.getInputProps('building_address')}
          />
        </div>
      </div>
      <TextInput
        label='description'
        placeholder='description'
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

      <Group justify='center' mt='xl'>
        <Button className='bg-primary text-white border py-2 px-3 hover:bg-white hover:text-black' onClick={handleSend}>
          Update Details
        </Button>
      </Group>
    </div>
  )
}
