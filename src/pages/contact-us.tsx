import Layout from '@/views/layout'
import ContactUsPage from '@/views/pages/contact-us'
import axios from 'axios'
import React from 'react'

function contactUs({ header, footer }: any) {
  return (
    <Layout header={header} footer={footer}>
      <ContactUsPage />
    </Layout>
  )
}

export default contactUs

export const getServerSideProps = async (context: any) => {
  try {
    const { data: header } = await axios.get(`${process.env.NEXT_PUBLIC_CMS_API_URL}/items/header?fields=*.*`)
    const { data: footer } = await axios.get(`${process.env.NEXT_PUBLIC_CMS_API_URL}/items/footer?fields=*.*`)

    return {
      props: {
        // data: data,
        header: header,
        footer: footer
      }
    }
  } catch (error) {
    return { props: { data: [], layout: [] } }
  }
}
