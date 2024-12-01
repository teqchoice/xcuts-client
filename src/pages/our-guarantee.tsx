import Layout from '@/views/layout'
import OurGuarantee from '@/views/pages/our-guarantee'

// !! Fake DB
import FakeDb from '@/DB/content.json'
import axios from 'axios'

export default function POurGuarantee({ data, header, footer }: any) {
  return (
    <Layout header={header} footer={footer}>
      <OurGuarantee Data={data?.builder} />
    </Layout>
  )
}

export const getServerSideProps = async (context: any) => {
  try {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_CMS_API_URL}/items/our_guarantee?fields=*.*.*.*`)

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
