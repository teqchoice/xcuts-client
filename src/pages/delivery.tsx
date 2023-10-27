import Layout from '@/views/layout'
import React from 'react'
import Delivery from '@/views/pages/delivery'

// !! Fake DB
import FakeDb from '@/DB/content.json'

export default function PDelivery() {
  return (
    <Layout>
      <Delivery Data={FakeDb} />
    </Layout>
  )
}
