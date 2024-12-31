import React from 'react'
import PageIntroduction from '../components/pageIntroduction'
import Collections from './introductionCollectionsSection'
import FilterSection from './filterSection copy'
import CollectionsItemSection from './collectionsItemSection'

export default function index({ Data, Brand, BrandData, DecorsData }: any) {
  return (
    <>
      <PageIntroduction Data={{ title: 'ALL DECORS', baner: 'images/banner-1-showroom.jpeg' }} />
      <Collections Data={Data?.delivery} />
      <div className='px-4 sm:container'>
        <FilterSection Data={Data?.delivery} />
        <div className=''></div>
        <CollectionsItemSection Data={Data} Brand={Brand} BrandData={BrandData} DecorsData={DecorsData} />
      </div>
    </>
  )
}
