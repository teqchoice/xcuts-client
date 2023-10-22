import React from 'react'
import SlidingDoors from '@/views/pages/sliding-doors'
import Layout from '@/views/layout'

// !! Fake DB
import FakeDb from '@/DB/content.json'

export default function PSlidingDoors() {
  return (
    <Layout>
      <SlidingDoors Data={FakeDb} />
    </Layout>
  )
}
