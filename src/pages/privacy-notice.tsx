import Layout from '@/views/layout'
import PrivacyNotice from '@/views/pages/privacy-notice'

// !! Fake DB
import FakeDb from '@/DB/content.json'

export default function PPrivacyNotice() {
  return (
    <Layout>
      <PrivacyNotice Data={FakeDb} />
    </Layout>
  )
}