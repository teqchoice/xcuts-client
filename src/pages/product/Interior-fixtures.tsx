import React from 'react'
import InteriorFixtures from '@/views/pages/products/Interior-fixtures'
import Layout from '@/views/layout'

import axios from 'axios'

export default function PInteriorFixtures({ data, header, footer }: any) {
  return (
    <Layout header={header} footer={footer}>
      <InteriorFixtures data={data} />
    </Layout>
  )
}

export const getServerSideProps = async (context: any) => {
  try {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_CMS_API_URL}/items/interior_fixtures?fields=*.*`)
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
