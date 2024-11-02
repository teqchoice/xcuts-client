import React from 'react'
import PageIntroduction from '../../../components/pageIntroduction'
import IntroductionSection from './introductionSection copy'
import VideoSection from './videoSection'
import DifferentTechnologiesSection from './differentTechnologiesSection'
import ABSEdgebandSection from './absEdgebandSection'
import PaintableSection from './paintableSection'
import GrainAlignment from './solidWoodSection'
import CuttingMDF from './cuttingMDF '
import FEELWOOD from './FEELWOOD'
import UNICOLOUR from './UNICOLOUR'
import EXPECTATIONS from './EXPECTAT'
import ALTERATIONS from './ALTERATIONS'
import REPRODUCTIONS from './REPRODUCTIONS'
import DecorCollection from './DecorCollection'
import FAQ from './faq'

export default function index({ Data }: any) {
  return (
    <>
      <PageIntroduction
        Data={{
          title: 'Serica',
          subtitle: 'DÉCOR COLLECTION',
          butt: 'BROWSE AND BUY',
          url: '#',
          baner: '../images/banner-1-showroom.jpeg'
        }}
      />
      <IntroductionSection />
      {/* <VideoSection /> */}
      {/* <DifferentTechnologiesSection Data={Data?.delivery} /> */}
      {/* <GrainAlignment /> */}
      {/* <ABSEdgebandSection /> */}
      {/* <PaintableSection Data={Data?.delivery} /> */}
      {/* <CuttingMDF Data={Data?.delivery} /> */}
      {/* <FEELWOOD /> */}
      {/* <UNICOLOUR /> */}
      {/* <EXPECTATIONS /> */}
      {/* <ALTERATIONS /> */}
      {/* <REPRODUCTIONS /> */}
      <DecorCollection />
      {/* <FAQ Data={Data?.delivery} /> */}
    </>
  )
}
