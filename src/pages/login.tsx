import Layout from '@/views/layout'
import Login from '@/views/pages/login'

// !! Fake DB
import FakeDb from '@/DB/content.json'

export default function PLogin() {
  return (
    <Layout>
      <Login Data={FakeDb} />
    </Layout>
  )
}