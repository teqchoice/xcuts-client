import Layout from '@/views/layout'
import HomePage from '@/views/pages/home'
import axios from 'axios'
// !! Fake DB
// import MainMenu from '@/DB/mainMenu.json'

export default function PHome({ data }: any) {
  // console.log(data)
  return (
    <Layout>
      <HomePage data={data} />
    </Layout>
  )
}

export const getServerSideProps = async (context: any) => {
  const { data } = await axios.get(`http://api.xcuts.co.uk/api/v1/get-content-query/page=1/`)
  return { props: { data: data[0].positions } }
}
