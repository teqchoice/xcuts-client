import Layout from '@/views/layout'
import React from 'react'
import ShopOnline from '@/views/pages/shop-online/index'

// !! Fake DB
import FakeDb from '@/DB/content.json'
import axios from 'axios'
import Head from 'next/head'

export default function PShopOnline({ data, header, footer }: any) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=1280, initial-scale=1, maximum-scale=1, user-scalable=no' />
      </Head>
      <Layout header={header} footer={footer}>
        <ShopOnline Data={FakeDb} />
      </Layout>
    </>
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
