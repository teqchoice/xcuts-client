import React from 'react'
import SlidingDoors from '@/views/pages/sliding-doors'
import Layout from '@/views/layout'

// !! Fake DB
import FakeDb from '@/DB/content.json'
import axios from 'axios'

export default function PSlidingDoors() {
  return (
    <Layout>
      <SlidingDoors Data={FakeDb} />
    </Layout>
  )
}

// export const getServerSideProps = async (context: any) => {
//   const { data } = await axios.get(`http://api.xcuts.co.uk/api/v1/get-content-query/page=5/`)
//   console.log(data)
//   return { props: { data: data[0].positions } }
// }