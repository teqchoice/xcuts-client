import { Logout, TransactionOrder, User } from '@icon-park/react'
import { useRouter } from 'next/router'
import React from 'react'
import Cookies from 'universal-cookie'

const cookie = new Cookies()

export default function Dashboard() {
  const router = useRouter()
  return (
    <div className='grid grid-cols-3 gap-3 h-full'>
      <div
        className='flex gap-5 border items-center justify-center bg-slate-100 cursor-pointer hover:bg-primary hover:text-white '
        onClick={() => router.push('dashboard?order')}
      >
        <TransactionOrder className='cursor-pointer' theme='outline' strokeWidth={2} size='35' />
        Orders
      </div>
      <div
        className='flex gap-5 border items-center justify-center bg-slate-100 cursor-pointer hover:bg-primary hover:text-white'
        onClick={() => router.push('dashboard?details')}
      >
        <User className='cursor-pointer' theme='outline' strokeWidth={2} size='35' />
        Account details
      </div>
      <div
        className='flex gap-5 border items-center justify-center bg-slate-100 cursor-pointer hover:bg-primary hover:text-white'
        onClick={() => {
          cookie.remove('jwt')
          window.location.replace('/login')
        }}
      >
        <Logout className='cursor-pointer' theme='outline' strokeWidth={2} size='35' />
        Exit
      </div>
    </div>
  )
}
