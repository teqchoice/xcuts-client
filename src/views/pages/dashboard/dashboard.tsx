import { Logout, TransactionOrder, User } from '@icon-park/react'
import React from 'react'

export default function Dashboard() {
  return (
    <div className='grid grid-cols-3 p-3 gap-3'>
      <div className='flex gap-5 border items-center justify-center bg-slate-100'>
        <TransactionOrder className='cursor-pointer' theme='outline' strokeWidth={2} size='25' fill='#302f2f' />
        Orders
      </div>
      <div className='flex gap-5 border items-center justify-center bg-slate-100'>
        <User className='cursor-pointer' theme='outline' strokeWidth={2} size='25' fill='#302f2f' />
        Account details
      </div>
      <div className='flex gap-5 border items-center justify-center bg-slate-100'>
        <Logout className='cursor-pointer' theme='outline' strokeWidth={2} size='25' fill='#302f2f' />
        Exit
      </div>
    </div>
  )
}
