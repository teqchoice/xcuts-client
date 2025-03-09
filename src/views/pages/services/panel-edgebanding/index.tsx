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
      <PageIntroduction Data={{ title: 'PANEL EDGEBANDING', baner: '/images/edge-banding/main-banner.jpg' }} />
      <IntroductionSection Data={Data?.delivery} />
      <VideoSection Data={{ src: '/images/edge-banding/video.mp4' }} />
      <DifferentTechnologiesSection
        Data={{ image1: '/images/edge-banding/pur-glue.png', image2: '/images/edge-banding/laser-bonding.png' }}
      />
      <ABSEdgebandSection
        Data={{
          image1: '/images/edge-banding/radius-finish.png',
          image2: '/images/edge-banding/square-finish.png',
          image3: '/images/edge-banding/radius-finish.png',
          image4: '/images/edge-banding/square-finish.png'
        }}
      />
      <PaintableSection
        Data={{
          image1: '/images/edge-banding/radius-finish.png',
          image2: '/images/edge-banding/square-finish.png'
        }}
      />
      <SolidWoodSection Data={Data?.delivery} />
    </>
  )
}
