import Layout from '@/views/layout'
import React from 'react'
import PanelEdgebanding from '@/views/pages/services/panel-edgebanding'

// !! Fake DB
import FakeDb from '@/DB/content.json'
import axios from 'axios'

export default function PPanelEdgebanding({ data, header, footer }: any) {
  return (
    <Layout header={header} footer={footer}>
      <PanelEdgebanding Data={FakeDb} />
    </Layout>
  )
}

export const getServerSideProps = async (context: any) => {
  try {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_CMS_API_URL}/items/home_page?fields=*.*`)

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
