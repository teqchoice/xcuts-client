import React from 'react'
import PageIntroduction from '../components/pageIntroduction'
import IntroductionSection from './introductionSection copy'
import OurStorySection from './ourStorySection'
import MeetTheTeamSection from './meetTheTeamSection'
import ProductionManagementTeamSection from './productionManagementTeamSection'
import SalesTeamSection from './salesTeamSection'
import MarketingTeamSection from './marketingTeamSection'

export default function index({ Data }: any) {
  return (
    <>
      <PageIntroduction Data={{ title: 'About us', baner: 'images/about-banner.webp' }} />
      <IntroductionSection Data={Data?.delivery} />
      {/* <OurStorySection Data={Data?.delivery} /> */}
      <MeetTheTeamSection Data={Data?.delivery} />
      <ProductionManagementTeamSection Data={Data?.delivery} />
      <SalesTeamSection Data={Data?.delivery} />
      <MarketingTeamSection Data={Data?.delivery} />
    </>
  )
}
