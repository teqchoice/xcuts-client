import { Logout, TransactionOrder, User } from '@icon-park/react'
import React, { useEffect } from 'react'
import Dashboard from './dashboard'
import Orders from './orders'
import Dtails from './accountDetails'
import { useRouter } from 'next/router'
import { isEmpty } from 'radash'
import { token } from '@/extensions/redux/api/auth'
import Cookies from 'universal-cookie'

const cookie = new Cookies()

export default function index() {
  const router = useRouter()

  useEffect(() => {
    token ? null : router.push('/login')
  }, [])

  function Render() {
    switch (true) {
      case router.query.hasOwnProperty('order'):
        return <Orders />

      case router.query.hasOwnProperty('details'):
        return <Dtails />

      default:
        return <Dashboard />
    }
  }
  return (
    <section className='container py-10 flex justify-center items-center'>
      <div className='grid grid-cols-8 w-full'>
        <div className='col-span-2 border w-full p-3'>
          <h3 className='font-bold border-b mb-3 pb-2'>My Account</h3>
          <ul className=''>
            <li
              className={`cursor-pointer hover:bg-primary hover:text-white p-3 ${
                isEmpty(router.query) && 'bg-primary text-white'
              }`}
              onClick={() => router.push('dashboard')}
            >
              Dashboard
            </li>
            <li
              className={`cursor-pointer hover:bg-primary hover:text-white p-3 ${
                router.query.hasOwnProperty('order') && 'bg-primary text-white'
              }`}
              onClick={() => router.push('dashboard?order')}
            >
              Orders
            </li>
            <li
              className={`cursor-pointer hover:bg-primary hover:text-white p-3 ${
                router.query.hasOwnProperty('details') && 'bg-primary text-white'
              }`}
              onClick={() => router.push('dashboard?details')}
            >
              Account details
            </li>
            <li
              className={`cursor-pointer hover:bg-primary hover:text-white p-3 ${
                router.query.hasOwnProperty('exit') && 'bg-primary text-white'
              }`}
              onClick={() => {
                cookie.remove('jwt')
                window.location.replace('/login')
              }}
            >
              Exit
            </li>
          </ul>
        </div>
        <div className='col-span-6 border w-full p-3'>
          <Render />
        </div>
      </div>
    </section>
  )
}
