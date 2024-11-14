import Layout from '@/views/layout'
import ContactUsPage from '@/views/pages/contact-us'
import axios from 'axios'
import React from 'react'

function contactUs({ layout }: any) {
  return (
    <Layout data={layout}>
      <ContactUsPage />
    </Layout>
  )
}

export default contactUs

export const getServerSideProps = async (context: any) => {
  const { data: layoutData } = await axios.get(`${process.env.NEXT_PUBLIC_API__URL}/get-content-query/page=3/`)
  return { props: { layout: layoutData[0]?.positions } }
}
