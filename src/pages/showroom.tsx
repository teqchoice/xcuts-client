import Layout from '@/views/layout'
import Showroom from '@/views/pages/showroom'

// !! Fake DB
import FakeDb from '@/DB/content.json'

export default function PShowroom() {
  return (
    <Layout>
      <Showroom Data={FakeDb} />
    </Layout>
  )
}