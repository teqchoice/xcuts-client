import React from 'react'
import PageIntroduction from '../../components/pageIntroduction'
import IntroductionSection from './introductionSection copy'
import VideoSection from './videoSection'
import DifferentTechnologiesSection from './differentTechnologiesSection'
import ABSEdgebandSection from './absEdgebandSection'
import PaintableSection from './paintableSection'
import GrainAlignment from './solidWoodSection'
import CuttingMDF from './cuttingMDF '
import CuttingMCF from './cuttingMCF'
import FAQ from './faq'

export default function index({ data }: any) {
  return (
    <>
      <PageIntroduction Data={{ title: 'Panel Spray Painting', baner: '/images/spray-painting/main-banner.jpg' }} />
      <IntroductionSection Data={data?.delivery} />

      {/* <VideoSection Data={Data?.delivery} /> */}
      {/* <DifferentTechnologiesSection Data={Data?.delivery} /> */}

      <ABSEdgebandSection
        Data={{
          image1: '/images/spray-painting/choose.webp',
          image2: '/images/spray-painting/for-hand.webp',
          image3: '/images/spray-painting/solid.webp',
          image4: '/images/spray-painting/clear.webp'
        }}
      />

      {/* <PaintableSection Data={Data?.delivery} /> */}

      <GrainAlignment Data={data?.delivery} />

      {/* <CuttingMDF Data={Data?.delivery} /> */}
      {/* <CuttingMCF Data={Data?.delivery} /> */}

      <FAQ data={data?.faq_items} />
    </>
  )
}
