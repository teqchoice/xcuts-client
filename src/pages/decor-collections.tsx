import Layout from '@/views/layout'
import DecorCollections from '@/views/pages/decor-collections'

// !! Fake DB
import FakeDb from '@/DB/content.json'

export default function PDecorCollections() {
  return (
    <Layout>
      <DecorCollections Data={FakeDb} />
    </Layout>
  )
}