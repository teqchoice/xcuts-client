import React from 'react'
import PageIntroduction from '../components/pageIntroduction'
import Collections from './introductionCollectionsSection'
import FilterSection from './filterSection copy'
import CollectionsItemSection from './collectionsItemSection'

export default function index({ Data }: any) {
  return (
    <>
      <PageIntroduction Data={{ title: 'DECOR COLLECTIONS', baner: 'images/collections-banner.webp' }} />
      <Collections Data={Data?.delivery} />
      <div className='px-4 sm:container'>
        <FilterSection Data={Data?.delivery} />
        <CollectionsItemSection Data={Data?.delivery} />
      </div>
    </>
  )
}
