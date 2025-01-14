import React from 'react'
import SlidingDoors from '@/views/pages/products/doors-shaker'
import Layout from '@/views/layout'
import axios from 'axios'

export default function PSlidingDoors({ data, header, footer }: any) {
  return (
    <Layout header={header} footer={footer}>
      <SlidingDoors data={data} />
    </Layout>
  )
}

export const getServerSideProps = async (context: any) => {
  try {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_CMS_API_URL}/items/doors_shaker?fields=*.*`)
    const { data: header } = await axios.get(`${process.env.NEXT_PUBLIC_CMS_API_URL}/items/header?fields=*.*`)
    const { data: footer } = await axios.get(`${process.env.NEXT_PUBLIC_CMS_API_URL}/items/footer?fields=*.*`)
    return {
      props: {
        data: data,
        header: header,
        footer: footer
      }
    }
  } catch (error) {
    return { props: { data: [], layout: [] } }
  }
}
