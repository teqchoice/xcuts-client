import { Logout, TransactionOrder, User } from '@icon-park/react'
import React from 'react'
import Dashboard from './dashboard'
import Orders from './orders'
import Dtails from './accountDetails'
import { useRouter } from 'next/router'

export default function index() {
    const router = useRouter()
    console.log(router)
  return (
    <section className='container py-10 flex justify-center items-center'>
      <div className='grid grid-cols-8 w-full'>
        <div className='col-span-2 border w-full p-3'>
          <h3 className='font-bold border-b mb-3 pb-2'>My Account</h3>
          <ul className='grid gap-3'>
            <li className=''>Dashboard</li>
            <li className=''>Orders</li>
            <li className=''>Account details</li>
            <li className=''>Exit</li>
          </ul>
        </div>
        <div className='col-span-6 border w-full'>
          {/* <Dashboard /> */}
          {/* <Orders /> */}
          <Dtails />
        </div>
      </div>
    </section>
  )
}
