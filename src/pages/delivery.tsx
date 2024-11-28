import Layout from '@/views/layout'
import React from 'react'
import Delivery from '@/views/pages/delivery'

// !! Fake DB
import FakeDb from '@/DB/content.json'
import axios from 'axios'

export default function PDelivery({ data, header, footer }: any) {
  return (
    <Layout header={header} footer={footer}>
      <Delivery Data={FakeDb} />
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
