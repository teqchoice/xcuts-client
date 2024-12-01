import React from 'react'
import BlockBaner from './components/BlockBaner'
import BlockIntro from './components/BlockIntro'
import BlockContent from './components/BlockContent'
import BlockSample from './components/BlockSample'
import BlockSampleFull from './components/BlockSampleFull'
import BlockGallery from './components/BlockGallery'

export default function RenderBlock({ Data }: any) {
  // console.log(Data)
  return Data.map((item: any, i: number) => {
    switch (item.collection) {
      case 'block_baner':
        return (
          <BlockBaner
            key={i}
            data={{
              title: item?.item.title,
              subtitle: item?.item.sub_title,
              butt: item?.item.button_name,
              url: item?.item.button_link,
              baner: `${process.env.NEXT_PUBLIC_API__URL_images}/${item?.item?.poster?.id}/${item?.item?.poster?.filename_download}`
            }}
          />
        )
        break
      case 'block_intro':
        return <BlockIntro key={i} data={item?.item} />
        break
      case 'block_sample':
        return item?.item?.full_width ? (
          <BlockSampleFull key={i} data={item?.item} />
        ) : (
          <BlockSample key={i} data={item?.item} />
        )
        break
      case 'block_content':
        return <BlockContent key={i} data={item?.item} />
        break
      case 'block_gallery':
        return <BlockGallery key={i} data={item?.item?.gallery} />
        break
      default:
        console.log('Unknown collection')
    }
  })
}
