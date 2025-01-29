import Layout from '@/views/layout'
const DecorCollections = dynamic(() => import('@/views/pages/decor-collections'), {
  loading: () => <Loading />
})
import axios from 'axios'
import dynamic from 'next/dynamic'
import Loading from '@/views/layout/loading'
import qs from 'qs'

export default function PDecorCollections({ header, footer, brandsData, decorsData }: any) {
  return (
    <Layout header={header} footer={footer}>
      <DecorCollections BrandData={brandsData} DecorsData={decorsData} />
    </Layout>
  )
}

export const getServerSideProps = async (context: any) => {
  const filters = qs.stringify({
    filter: Object.fromEntries(
      Object.entries({
        brand_ref: context.query.Brand ? { name: { _eq: context.query.Brand } } : null,
        core_ref: context.query.Core ? { name: { _eq: context.query.Core } } : null,
        thickness_ref: context.query.Thickness ? { thickness: { _eq: context.query.Thickness } } : null,
        surface_ref: context.query.Surface ? { name: { _eq: context.query.Surface } } : null,
        design_ref: context.query.Design ? { name: { _eq: context.query.Design } } : null,
        texture_ref: context.query.Texture ? { name: { _eq: context.query.Texture } } : null,
        finish_ref: context.query.Finish ? { name: { _eq: context.query.Finish } } : null
      }).filter(([_, value]) => value !== null)
    ),
    name: context.query.CodeOrName ? context.query.CodeOrName : null
  })

  console.log(filters)

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
      `https://shop.xcuts.co.uk/items/decors?fields=*.*.*&limit=500&sort=sort,-date_updated,date_updated&${filters}`
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
