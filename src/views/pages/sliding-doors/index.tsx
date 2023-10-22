import React from 'react'
import PageIntroduction from '@/views/pages/components/pageIntroduction'
import IntroductionSection from './introductionSection'
import FirstPortfolio from './firstportfolioSection'
import SecoundPortfolio from './secoundPortfolioSection'
import ThirdPortfolio from './thirdPortfolioSection'

export default function index({ Data }: any) {
  return (
    <>
      <PageIntroduction Data={{ title: 'Sliding doors', baner: 'images/sliding-doors-banner.webp' }} />
      <IntroductionSection />
      <FirstPortfolio />
      <SecoundPortfolio />
      <ThirdPortfolio />
    </>
  )
}
