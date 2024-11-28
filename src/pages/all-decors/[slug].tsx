import Layout from '@/views/layout'
import React from 'react'
import DecorEgger from '@/views/pages/decor-collections/brand/details'

// !! Fake DB
import FakeDb from '@/DB/content.json'
import axios from 'axios'

export default function PDecorEgger({ data, header, footer }: any) {
  // console.log(data.builder)
  return (
    <Layout header={header} footer={footer}>
      <DecorEgger Data={data.builder} />
    </Layout>
  )
}

export const getServerSideProps = async (context: any) => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_CMS_API_URL}/items/brands?fields=*.*.*.*&filter[page_name][_eq]=egger`
    )

    const { data: header } = await axios.get(`${process.env.NEXT_PUBLIC_CMS_API_URL}/items/header?fields=*.*`)
    const { data: footer } = await axios.get(`${process.env.NEXT_PUBLIC_CMS_API_URL}/items/footer?fields=*.*`)

    return {
      props: {
        data: data.data[0],
        header: header,
        footer: footer
      }
    }
  } catch (error) {
    return { props: { data: [], layout: [] } }
  }
}
