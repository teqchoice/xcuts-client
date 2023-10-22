import React from 'react'
import PageIntroduction from '../components/pageIntroduction'
import OurGuarantee from './ourGuarantee'

export default function index({ Data }: any) {
  return (
    <>
      <PageIntroduction Data={{ title: 'Our Guarantee', baner: 'images/our-guarantee-banner.webp' }} />
      <OurGuarantee Data={Data.our_guarantee} />
    </>
  )
}
