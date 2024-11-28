import Layout from '@/views/layout'
import React from 'react'
import axios from 'axios'
import DecorEgger from '@/views/pages/decor-collections/brand/details'
import Custom404 from '../404'

export default function PDecorEgger({ data, header, footer }: any) {
  if (!data?.builder) return <Custom404 header={header} footer={footer} />
  return (
    <Layout header={header} footer={footer}>
      <DecorEgger Data={data?.builder} />
    </Layout>
  )
}

export const getServerSideProps = async (context: any) => {
  try {
    console.log('+++++++++++++++++', context.query.slug)
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_CMS_API_URL}/items/brands?fields=*.*.*.*&filter[page_name][_eq]=${context.query.slug}`
    )

    const { data: header } = await axios.get(`${process.env.NEXT_PUBLIC_CMS_API_URL}/items/header?fields=*.*`)
    const { data: footer } = await axios.get(`${process.env.NEXT_PUBLIC_CMS_API_URL}/items/footer?fields=*.*`)

    return {
      props: {
        data: data.data[0] || null,
        header: header,
        footer: footer
      }
    }
  } catch (error) {
    return { props: { data: [], layout: [] } }
  }
}
