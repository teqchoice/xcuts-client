import Layout from '@/views/layout'
import OurGuarantee from '@/views/pages/our-guarantee'

// !! Fake DB
import FakeDb from '@/DB/content.json'

export default function POurGuarantee() {
  return (
    <Layout>
      <OurGuarantee Data={FakeDb} />
    </Layout>
  )
}