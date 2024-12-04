import React from 'react'
import Layout from '@/views/layout'
import Dashboard from '@/views/pages/dashboard'
import axios from 'axios'

export default function index({ header, footer }: any) {
  return (
    <Layout header={header} footer={footer}>
      <Dashboard />
    </Layout>
  )
}

export const getServerSideProps = async (context: any) => {
  try {
    const { data: header } = await axios.get(`${process.env.NEXT_PUBLIC_CMS_API_URL}/items/header?fields=*.*`)
    const { data: footer } = await axios.get(`${process.env.NEXT_PUBLIC_CMS_API_URL}/items/footer?fields=*.*`)

    return {
      props: {
        header: header,
        footer: footer
      }
    }
  } catch (error) {
    return { props: { data: [], layout: [] } }
  }
}
