import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Login from './login'
import Register from './register'
import { token } from '@/extensions/redux/api/auth'

export default function index() {
  const router = useRouter()
  useEffect(() => {
    token ? router.push('/dashboard') : null
  }, [])
  return router.query.hasOwnProperty('register') ? <Register /> : <Login />
}
