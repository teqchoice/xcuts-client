import React from 'react'
import BlockBaner from './components/BlockBaner'
import BlockIntro from './components/BlockIntro'
import BlockContent from './components/BlockContent'
import BlockSample from './components/BlockSample'

export default function RenderBlock({ Data }: any) {
  return Data.map((item: any, i: number) => {
    switch (item.collection) {
      case 'block_baner':
        return (
          <BlockBaner
            data={{
              title: item?.item.title,
              subtitle: item?.item.sub_title,
              butt: item?.item.button_name,
              url: item?.item.button_link,
              baner: `${process.env.NEXT_PUBLIC_API__URL_images}/${item?.item.poster.id}/${item?.item.poster.filename_download}`
            }}
          />
        )
        break
      case 'block_intro':
        return <BlockIntro data={item?.item} />
        break
      case 'block_sample':
        return <BlockSample data={item?.item}/>
        break
      case 'block_content':
        return <BlockContent data={item?.item} />
        break
      default:
        console.log('Unknown collection')
    }
  })
}
