import Layout from '@/views/layout'
import Showroom from '@/views/pages/showroom'

import axios from 'axios'

export default function PShowroom({ data, header, footer }: any) {
  return (
    <Layout header={header} footer={footer}>
      <Showroom Data={data?.builder} />
    </Layout>
  )
}

export const getServerSideProps = async (context: any) => {
  try {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_CMS_API_URL}/items/showroom?fields=*.*.*.*.*.*`)

    const { data: header } = await axios.get(`${process.env.NEXT_PUBLIC_CMS_API_URL}/items/header?fields=*.*`)
    const { data: footer } = await axios.get(`${process.env.NEXT_PUBLIC_CMS_API_URL}/items/footer?fields=*.*`)

    return {
      props: {
        data: data.data || null,
        header: header,
        footer: footer
      }
    }
  } catch (error) {
    return { props: { data: [], layout: [] } }
  }
}
