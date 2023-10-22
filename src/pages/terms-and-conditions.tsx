import Layout from '@/views/layout'
import TermsAndConditions from '@/views/pages/terms-conditions'

// !! Fake DB
import FakeDb from '@/DB/content.json'

export default function PTermsAndConditions() {
  return (
    <Layout>
      <TermsAndConditions Data={FakeDb} />
    </Layout>
  )
}
