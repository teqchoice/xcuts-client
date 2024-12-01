import Layout from '@/views/layout'
import PrivacyNotice from '@/views/pages/privacy-notice'

// !! Fake DB
import FakeDb from '@/DB/content.json'
import axios from 'axios'

export default function PPrivacyNotice({ data, header, footer }: any) {
  // console.log(data)
  return (
    <Layout header={header} footer={footer}>
      <PrivacyNotice Data={data?.builder} />
    </Layout>
  )
}

export const getServerSideProps = async (context: any) => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_CMS_API_URL}/items/privacy_notice?fields=*.*.*.*`
    )

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
