import Layout from '@/views/layout'
import DecorCollections from '@/views/pages/decor-collections'

// !! Fake DB
import FakeDb from '@/DB/content.json'
import axios from 'axios'

export default function PDecorCollections({ data, layout }: any) {
  return (
    <Layout data={layout}>
      <DecorCollections Data={FakeDb} />
    </Layout>
  )
}

export const getServerSideProps = async (context: any) => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API__URL}/get-content-query/page=1/`)
  const { data: layoutData } = await axios.get(`${process.env.NEXT_PUBLIC_API__URL}/get-content-query/page=3/`)
  // console.log(layoutData)
  return { props: { data: data[0].positions, layout: layoutData[0]?.positions } }
}
