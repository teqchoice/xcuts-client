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
      <PageIntroduction
        Data={{
          title: 'CNC Wood Milling',
          baner: '/images/cnc-cutting/main-banner.jpg'
        }}
      />
      <IntroductionSection Data={Data?.delivery} />
      <VideoSection Data={{ src: '/images/cnc-cutting/video.mp4' }} />

      {/* <DifferentTechnologiesSection Data={Data?.delivery} /> */}
      {/* <PaintableSection Data={Data?.delivery} /> */}

      <GrainAlignment Data={Data?.delivery} />
      <CuttingMCF
        Data={{
          image1: '/images/cnc-cutting/cut-out.jpg',
          image2: '/images/cnc-cutting/insert.jpg',
          image3: '/images/cnc-cutting/profile.jpg',
          image4: '/images/cnc-cutting/bevel.jpg'
        }}
      />
      <Grooving Data={Data?.delivery} />
      <ABSEdgebandSection Data={Data?.delivery} />
      <Resources Data={Data?.delivery} />
    </>
  )
}
