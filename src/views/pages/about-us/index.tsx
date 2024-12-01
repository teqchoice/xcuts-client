import React from 'react'
import PageIntroduction from '../components/pageIntroduction'
import IntroductionSection from './introductionSection copy'
import OurStorySection from './ourStorySection'
import MeetTheTeamSection from './meetTheTeamSection'
import ProductionManagementTeamSection from './productionManagementTeamSection'
import SalesTeamSection from './salesTeamSection'
import MarketingTeamSection from './marketingTeamSection'
import RenderBlock from '../decor-collections/brand/details/renderBlock'

export default function index({ Data }: any) {
  return (
    <>
      <RenderBlock Data={Data} />
      {/* <ProductionManagementTeamSection Data={Data?.delivery} /> */}
      {/* <SalesTeamSection Data={Data?.delivery} /> */}
      {/* <MarketingTeamSection Data={Data?.delivery} /> */}
    </>
  )
}
