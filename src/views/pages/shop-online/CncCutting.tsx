import { token } from '@/extensions/redux/api/auth'
import { Lock } from '@icon-park/react'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

export default function CNCCutting() {
  const [selectedFile, setSelectedFile] = useState(null)
  const [desc, setDesc] = useState('')
  const [loading, setLoading] = useState(false)

  const handleFileChange = (event: any) => {
    setSelectedFile(event.target.files[0])
  }

  // useEffect(() => {
  //   console.log(selectedFile)
  //   console.log(desc)
  // }, [selectedFile, desc])

  function Submit() {
    setLoading(true)
    let data = new FormData()
    data.append('description', desc)
    data.append('files', selectedFile)

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://api.xcuts.co.uk/api/products/user-upload/',
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: data
    }

    axios
      .request(config)
      .then(response => {
        console.log(response.data)
        toast.success('File uploaded successfully')
        setLoading(false)
      })
      .catch(error => {
        setLoading(false)
        toast.error('File uploaded failed')
        console.log(error)
      })
  }

  return (
    <>
      <div className=' items-center justify-center w-full'>
        <div className='block text-left mb-2 font-medium text-gray-900 dark:text-white'>Upload drawings</div>
        <label
          htmlFor='dropzone-file'
          className='flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'
        >
          <div className='flex flex-col items-center justify-center pt-5 pb-6'>
            <svg
              className='w-8 h-8 mb-4 text-gray-500 dark:text-gray-400'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 20 16'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
              />
            </svg>
            <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
              <span className='font-semibold'>Click to upload</span> or drag and drop
            </p>
            <p className='text-xs text-gray-500 dark:text-gray-400'>
              JPEG, JPG, PNG, GIF, PDF, DWG, DFX, DXF (MAX. 5MB)
            </p>
          </div>
          <input id='dropzone-file' type='file' className='hidden' onChange={handleFileChange} />
        </label>
      </div>
      <div className='items-center justify-center w-full'>
        <label htmlFor='message' className='block text-left mb-2 font-medium text-gray-900 dark:text-white'>
          Provide additional details for your CNC job
        </label>
        <textarea
          id='message'
          className='block p-2.5 w-full min-h-[16rem] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='Write your thoughts here...'
          onChange={e => setDesc(e.target.value)}
        ></textarea>
      </div>
      <div className='col-span-2 items-center justify-center flex'>
        {!token ? (
          <Link
            href={'/login'}
            className='flex whitespace-nowrap text-base font-semibold w-48 text-black border border-primary lg:py-4 lg:px-6 md:py-4 md:px-3 py-4 px-6 items-center text-center hover:bg-primary hover:text-white transition-all'
            // onClick={login}
          >
            <Lock className='cursor-pointer' theme='outline' strokeWidth={2} size='35' />
            Must be login
          </Link>
        ) : loading ? (
          <button className='w-48 flex justify-center items-center border bg-primary border-primary lg:py-4 lg:px-6 md:py-4 md:px-3 py-4 px-6  text-center hover:bg-primary hover:text-white transition-all'>
            <svg className='animate-spin h-7 w-7 border-t-4 border-b-4 rounded-full' viewBox='0 0 24 24'></svg>
          </button>
        ) : (
          <button
            className='text-base font-semibold w-48 text-black border border-primary lg:py-4 lg:px-6 md:py-4 md:px-3 py-4 px-6 block text-center hover:bg-primary hover:text-white transition-all'
            onClick={Submit}
          >
            Submit
          </button>
        )}
      </div>
    </>
  )
}
