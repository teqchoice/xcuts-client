import Layout from '@/views/layout'
import React from 'react'
import ShopOnline from '@/views/pages/shop-online/index'

// !! Fake DB
import FakeDb from '@/DB/content.json'
import axios from 'axios'

export default function PShopOnline({ data, header, footer }: any) {
  return (
    <Layout header={header} footer={footer}>
      <ShopOnline Data={FakeDb} />
    </Layout>
  )
}

export const getServerSideProps = async (context: any) => {
  try {
    // const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API__URL}/get-content-query/page=1/`)
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
