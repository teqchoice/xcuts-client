import { Close, Search } from '@icon-park/react'
import { useForm } from '@mantine/form'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

export default function SearchC() {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const form = useForm({
    initialValues: {
      search: ''
    }
  })
  function handleSearch() {
    console.log('search')
  }
  return (
    <div className=''>
      <Search theme='outline' size='27' fill='#fff' onClick={() => setOpen(true)} />
      <div
        className={`absolute z-50 flex items-center top-0 left-0 bg-red-600 ${
          open ? 'w-full opacity-100' : 'w-0 opacity-0'
        } h-full transition-all duration-300`}
      >
        <form onSubmit={form.onSubmit(handleSearch)} className='h-full w-full grow'>
          <input
            id='search'
            type='search'
            className='rounded-lg w-full h-full py-3 px-4 pl-24 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-l-8 border-primary drop-shadow-[0_10px_25px_rgba(0,0,0,0.10)]'
            placeholder='Enter what you are looking for'
            {...form.getInputProps('search')}
          />
        </form>
        <Close theme='outline' size='27' fill='#fff' className='p-3' onClick={() => setOpen(false)} />
      </div>
    </div>
  )
}
