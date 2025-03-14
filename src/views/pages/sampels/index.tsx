import React from 'react'
import IntroductionSection from './introductionSection copy'
import VideoSection from './videoSection'
import DifferentTechnologiesSection from './differentTechnologiesSection'
import ABSEdgebandSection from './absEdgebandSection'
import PaintableSection from './paintableSection'
import GrainAlignment from './solidWoodSection'
import CuttingMDF from './cuttingMDF '
import CuttingMCF from './cuttingMCF'
import FAQ from './faq'
import PageIntroduction from '../components/pageIntroduction'

export default function index({ Data }: any) {
  return (
    <>
      <PageIntroduction
        Data={{ title: 'SWATCHES AND SAMPLES', subtitle: '', baner: '/images/banner-1-showroom.jpeg' }}
      />
      <IntroductionSection Data={Data?.delivery} />
      {/* <VideoSection Data={Data?.delivery} /> */}
      {/* <DifferentTechnologiesSection Data={Data?.delivery} /> */}
      <ABSEdgebandSection Data={Data?.delivery} />
      {/* <PaintableSection Data={Data?.delivery} /> */}
      {/* <GrainAlignment Data={Data?.delivery} /> */}
      {/* <CuttingMDF Data={Data?.delivery} /> */}
      {/* <CuttingMCF Data={Data?.delivery} /> */}
      {/* <FAQ Data={Data?.delivery} /> */}
    </>
  )
}
