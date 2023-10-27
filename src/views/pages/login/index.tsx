import React from 'react'
import PageIntroduction from '../components/pageIntroduction'
import Login from './login'

export default function index({ Data }: any) {
  return (
    <>
      <Login Data={Data?.delivery} />
    </>
  )
}
