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

export default function index({ Data }: any) {
  return (
    <>
      <PageIntroduction Data={{ title: 'Panels Cut to Size', baner: '/images/size-cut-panel/main-banner.webp' }} />
      <IntroductionSection Data={Data?.delivery} />
      <VideoSection Data={{ src: '/images/size-cut-panel/video.mp4' }} />

      {/* <DifferentTechnologiesSection Data={Data?.delivery} /> */}

      <ABSEdgebandSection
        Data={{
          image1: '/images/size-cut-panel/computerised-cutting.webp',
          image2: '/images/size-cut-panel/accurate.webp',
          image3: '/images/size-cut-panel/panel-labelling.webp',
          image4: '/images/size-cut-panel/quality-inspection.webp'
        }}
      />

      {/* <PaintableSection Data={Data?.delivery} /> */}

      <GrainAlignment Data={Data?.delivery} />
      <CuttingMDF Data={Data?.delivery} />
      <CuttingMCF Data={Data?.delivery} />
      <FAQ Data={Data?.delivery} />
    </>
  )
}
