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
import Grooving from './Grooving'
import Resources from './Resources'

export default function index({ Data }: any) {
  return (
    <>
      <PageIntroduction Data={{ title: 'CNC Wood Milling', baner: '../images/banner-1-showroom.jpeg' }} />
      <IntroductionSection Data={Data?.delivery} />
      <VideoSection Data={Data?.delivery} />

      {/* <DifferentTechnologiesSection Data={Data?.delivery} /> */}
      {/* <PaintableSection Data={Data?.delivery} /> */}

      <GrainAlignment Data={Data?.delivery} />
      <CuttingMCF Data={Data?.delivery} />
      <Grooving Data={Data?.delivery} />
      <ABSEdgebandSection Data={Data?.delivery} />
      <Resources Data={Data?.delivery} />
    </>
  )
}
