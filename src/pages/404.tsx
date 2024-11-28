import Layout from '@/views/layout'
import SvgComponent from '@/views/pages/components/svg'
import axios from 'axios'

export default function Custom404({ header, footer }: any) {
  // console.log(data)
  // console.log(layout)
  return (
    // <>j</>
    <Layout header={header} footer={footer}>
      <div className='container'>
        <div className='grid grid-cols-5'>
          <div className='col-span-2 p-5 flex flex-col justify-center'>
            <h3 className='text-4xl lg:text-7xl font-bold'>404</h3>
            <h3 className='text-2xl lg:text-4xl font-bold'>Oops! Page Lost in the Void</h3>
            <p className='text-lg '>
              Well, this is awkward. It looks like the page you’re hunting for has gone rogue or decided to take a
              permanent vacation. Maybe it’s off having an adventure somewhere we don’t know about!
            </p>
          </div>
          <div className='col-span-3 p-5 flex flex-col justify-center'>
            <SvgComponent />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps = async (context: any) => {
  try {
    // const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API__URL}/get-content-query/page=1/`)
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
