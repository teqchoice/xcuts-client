import Layout from '@/views/layout'
import HomePage from '@/views/pages/home'
import axios from 'axios'
import { useLayoutEffect } from 'react'
// !! Fake DB
// import MainMenu from '@/DB/mainMenu.json'

export default function PHome({ data, header, footer }: any) {
  // console.log(data)
  // console.log(header)
  return (
    <>
      <Layout header={header} footer={footer}>
        <HomePage data={data} />
      </Layout>
    </>
  )
}

export const getServerSideProps = async (context: any) => {
  try {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_CMS_API_URL}/items/home_page?fields=*.*`)

    const { data: header } = await axios.get(`${process.env.NEXT_PUBLIC_CMS_API_URL}/items/header?fields=*.*`)
    const { data: footer } = await axios.get(`${process.env.NEXT_PUBLIC_CMS_API_URL}/items/footer?fields=*.*`)

    return {
      props: {
        data: data,
        header: header,
        footer: footer
      }
    }
  } catch (error) {
    return { props: { data: [], layout: [] } }
  }
}
