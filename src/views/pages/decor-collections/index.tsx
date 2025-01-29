import React from 'react'
import PageIntroduction from '../components/pageIntroduction'
import Collections from './introductionCollectionsSection'
import FilterSection from './filterSection copy'
import CollectionsItemSection from './collectionsItemSection'

export default function index({ BrandData, DecorsData }: any) {
  return (
    <>
      <PageIntroduction Data={{ title: 'ALL DECORS', baner: 'images/banner-1-showroom.jpeg' }} />
      <Collections />
      <div className='px-4 sm:container'>
        <FilterSection />
        <div className=''></div>
        <CollectionsItemSection BrandData={BrandData} DecorsData={DecorsData} />
      </div>
    </>
  )
}
