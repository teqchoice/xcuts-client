import Layout from '@/views/layout'
import React from 'react'
import PanelEdgebanding from '@/views/pages/panel-edgebanding'

// !! Fake DB
import FakeDb from '@/DB/content.json'
import axios from 'axios'

export default function PPanelEdgebanding({ data, layout }: any) {
  return (
    <Layout data={layout}>
      <PanelEdgebanding Data={FakeDb} />
    </Layout>
  )
}

export const getServerSideProps = async (context: any) => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API__URL}/get-content-query/page=1/`)
  const { data: layoutData } = await axios.get(`${process.env.NEXT_PUBLIC_API__URL}/get-content-query/page=3/`)
  // console.log(layoutData)
  return { props: { data: data[0].positions, layout: layoutData[0]?.positions } }
}
