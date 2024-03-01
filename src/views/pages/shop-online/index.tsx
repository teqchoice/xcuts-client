import React from 'react'
import PageIntroduction from '../components/pageIntroduction'
import Order from './order'

export default function index({ Data }: any) {
  return (
    <>
      <PageIntroduction Data={{ title: 'ORDER', baner: 'images/order-banner.webp', order: true }} />
      <Order />
    </>
  )
}
