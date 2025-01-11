import Layout from '@/views/layout'
const DecorCollections = dynamic(() => import('@/views/pages/decor-collections'), {
  loading: () => <Loading />
})
// !! Fake DB
import FakeDb from '@/DB/content.json'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import Loading from '@/views/layout/loading'

export default function PDecorCollections({ header, footer, brandsData, decorsData }: any) {
  const router = useRouter()
  const [Brand, setBrand] = useState()
  const [Data, setData] = useState()
  
  // console.log(
  //   `https://shopi.xcuts.co.uk/api/collections/decors/records?expand=brand_ref,core_ref,surface_ref,finish_ref,texture_ref,design_ref&filter=(brand_ref.name=\'${
  //     router.query.Brand
  //   }\'${router.query.Core ? `%26%26core_ref.name=\'${router.query.Core}\'` : ''}${
  //     router.query.Surface ? `%26%26surface_ref.name=\'${router.query.Surface}\'` : ''
  //   }${router.query.Design ? `%26%26design_ref.name=\'${router.query.Design}\'` : ''}${
  //     router.query.Finish ? `%26%26finish_ref.name=\'${router.query.Finish}\'` : ''
  //   })`
  // )

  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: "https://shopi.xcuts.co.uk/api/collections/categories/records?filter=(parent.name='brand')",
      headers: {}
    }

    axios
      .request(config)
      .then(response => {
        setBrand(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [setBrand, router.query])

  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://shopi.xcuts.co.uk/api/collections/decors/records?expand=brand_ref,core_ref,surface_ref,finish_ref,texture_ref,design_ref&filter=(brand_ref.name=\'${
        router.query.Brand
      }\'${router.query.Core ? `%26%26core_ref.name=\'${router.query.Core}\'` : ''}${
        router.query.Surface ? `%26%26surface_ref.name=\'${router.query.Surface}\'` : ''
      }${router.query.Design ? `%26%26design_ref.name=\'${router.query.Design}\'` : ''}${
        router.query.Finish ? `%26%26finish_ref.name=\'${router.query.Finish}\'` : ''
      }${router.query.Texture ? `%26%26texture_ref.name=\'${router.query.Texture}\'` : ''})`,
      headers: {}
    }

    axios
      .request(config)
      .then(response => {
        setData(response.data)
        // console.log(Data);
      })
      .catch(error => {
        console.log(error)
      })
  }, [setBrand, router.query])
  // console.log(decorsData)
  // console.log(Data)
  return (
    <Layout header={header} footer={footer}>
      <DecorCollections Data={Data} Brand={Brand} BrandData={brandsData} DecorsData={decorsData} />
    </Layout>
  )
}

export const getServerSideProps = async (context: any) => {
  console.log('+++++++++++++++++', context.query.Brand)

  try {
    // const { data: brand } = await axios.get(
    //   `https://shopi.xcuts.co.uk/api/collections/categories/records?filter=(parent.name=\'brand\')`
    // )
    // const parametr = context.query.Brand
    // const { data } = await axios.get(
    //   `https://shopi.xcuts.co.uk/api/collections/decors/records?filter=(brand_ref.name~'egger')`
    // )

    // const { data: layoutData } = await axios.get(`${process.env.NEXT_PUBLIC_API__URL}/get-content-query/page=3/`)

    const { data: brands } = await axios.get(
      `https://cms.xcuts.co.uk/items/brands?fields=page_name,description,poster.filename_disk,poster.id`
    )
    const { data: decors } = await axios.get(
      `https://shop.xcuts.co.uk/items/decors?fields=*.*.*&filter[brand_ref][name][_eq]=${context.query.Brand}&limit=500&sort=sort,-date_updated,date_updated`
    )
    // `https://shop.xcuts.co.uk/items/categories?&filter[parent][related_categories_id][name][_contains]=brand`

    const { data: header } = await axios.get(`${process.env.NEXT_PUBLIC_CMS_API_URL}/items/header?fields=*.*`)
    const { data: footer } = await axios.get(`${process.env.NEXT_PUBLIC_CMS_API_URL}/items/footer?fields=*.*`)

    return {
      props: {
        brandsData: brands.data || null,
        decorsData: decors.data || null,
        header: header,
        footer: footer
      }
    }
  } catch (error) {
    return { props: { data: [], layout: [] } }
  }
}
