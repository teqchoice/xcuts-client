import React from 'react'
import PageIntroduction from '../../components/pageIntroduction'
import IntroductionSection from './introductionSection copy'
import VideoSection from './videoSection'
import DifferentTechnologiesSection from './differentTechnologiesSection'
import ABSEdgebandSection from './absEdgebandSection'
import PaintableSection from './paintableSection'
import SolidWoodSection from './solidWoodSection'

export default function index({ Data }: any) {
  return (
    <>
      <PageIntroduction Data={{ title: 'PANEL EDGEBANDING', baner: '/images/edge-banding/main-banner.webp' }} />
      <IntroductionSection Data={Data?.delivery} />
      <VideoSection Data={{ src: '/images/edge-banding/video.mp4' }} />
      <DifferentTechnologiesSection
        Data={{ image1: '/images/edge-banding/pur-glue.webp', image2: '/images/edge-banding/laser-bonding.webp' }}
      />
      <ABSEdgebandSection
        Data={{
          image1: '/images/edge-banding/radius-finish.webp',
          image2: '/images/edge-banding/square-finish.webp',
          image3: '/images/edge-banding/radius-finish.webp',
          image4: '/images/edge-banding/square-finish.webp'
        }}
      />
      <PaintableSection
        Data={{
          image1: '/images/edge-banding/radius-finish.webp',
          image2: '/images/edge-banding/square-finish.webp'
        }}
      />
      <SolidWoodSection Data={Data?.delivery} />
    </>
  )
}
