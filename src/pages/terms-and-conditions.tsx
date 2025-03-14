import Layout from '@/views/layout'
import TermsAndConditions from '@/views/pages/terms-conditions'

// !! Fake DB
import FakeDb from '@/DB/content.json'
import axios from 'axios'

export default function PTermsAndConditions({ data, header, footer }: any) {
  return (
    <Layout header={header} footer={footer}>
      <TermsAndConditions Data={data?.builder} />
    </Layout>
  )
}

export const getServerSideProps = async (context: any) => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_CMS_API_URL}/items/terms_and_conditions?fields=*.*.*.*`
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
