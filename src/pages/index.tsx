import Layout from '@/views/layout'
import HomePage from '@/views/pages/home'
import axios from 'axios'
import { useLayoutEffect } from 'react'
// !! Fake DB
// import MainMenu from '@/DB/mainMenu.json'

export default function PHome({ data, layout }: any) {
  // console.log(data)
  // console.log(layout)
  return (
    <Layout data={layout}>
      <HomePage data={data} />
    </Layout>
  )
}

export const getServerSideProps = async (context: any) => {
  const { data } = await axios.get(`http://api.xcuts.co.uk/api/v1/get-content-query/page=1/`)
  const { data: layoutData } = await axios.get(`http://api.xcuts.co.uk/api/v1/get-content-query/page=5/`)
  console.log(layoutData)
  return { props: { data: data[0].positions, layout: layoutData[0]?.positions } }
}
