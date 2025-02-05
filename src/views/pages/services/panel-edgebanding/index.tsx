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
      <PageIntroduction Data={{ title: 'PANEL EDGEBANDING', baner: '/images/banner-1-showroom.jpeg' }} />
      <IntroductionSection Data={Data?.delivery} />
      <VideoSection Data={Data?.delivery} />
      <DifferentTechnologiesSection Data={Data?.delivery} />
      <ABSEdgebandSection Data={Data?.delivery} />
      <PaintableSection Data={Data?.delivery} />
      <SolidWoodSection Data={Data?.delivery} />
    </>
  )
}
