import React from 'react'
import PageIntroduction from '../../components/pageIntroduction'
import IntroductionSection from './introductionSection copy'
import VideoSection from './videoSection'
import DifferentTechnologiesSection from './differentTechnologiesSection'
import DifferentTechnologiesSection2 from './differentTechnologiesSection2'
import ABSEdgebandSection from './absEdgebandSection'
import PaintableSection from './paintableSection'
import GrainAlignment from './solidWoodSection'
import CuttingMDF from './cuttingMDF '
import CuttingMCF from './cuttingMCF'
import FAQ from './faq'
import Grooving from './Grooving'
import Grooving2 from './Grooving2'
import Resources from './Resources'

export default function index({ data }: any) {
  return (
    <>
      <PageIntroduction Data={{ title: data?.data.title, baner: '/images/interior-fixtures/01-main-banner.jpg' }} />
      <IntroductionSection data={data?.data} />

      {/* <VideoSection Data={Data?.delivery} /> */}

      <DifferentTechnologiesSection data={data?.data} />

      {/* <PaintableSection Data={Data?.delivery} /> */}
      {/* <GrainAlignment Data={Data?.delivery} /> */}
      {/* <CuttingMCF Data={Data?.delivery} /> */}

      <Grooving data={data?.data} />
      <DifferentTechnologiesSection2 data={data?.data} />
      <Grooving2 data={data?.data} />
      <ABSEdgebandSection data={data?.data} />
      <Resources data={data?.data} />
    </>
  )
}
