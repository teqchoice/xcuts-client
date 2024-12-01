import Layout from '@/views/layout'
import AboutUs from '@/views/pages/about-us'

// !! Fake DB
import FakeDb from '@/DB/content.json'
import axios from 'axios'

export default function PAboutUs({ data, header, footer }: any) {
  return (
    <Layout header={header} footer={footer}>
      <AboutUs Data={data?.builder} />
    </Layout>
  )
}

export const getServerSideProps = async (context: any) => {
  try {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_CMS_API_URL}/items/about_us?fields=*.*.*.*`)

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
