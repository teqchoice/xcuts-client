import Layout from '@/views/layout'
import AboutUs from '@/views/pages/about-us'

// !! Fake DB
import FakeDb from '@/DB/content.json'

export default function PAboutUs() {
  return (
    <Layout>
      <AboutUs Data={FakeDb} />
    </Layout>
  )
}