import React from 'react'
import PageIntroduction from '@/views/pages/components/pageIntroduction'
import IntroductionSection from './introductionSection'
import FirstPortfolio from './firstPortfolioSection'
import SecoundPortfolio from './secoundPortfolioSection'
import ThirdPortfolio from './thirdPortfolioSection'

export default function index({ data }: any) {
  return (
    <>
      <PageIntroduction data={data?.data} />
      <IntroductionSection data={data?.data} />
      <FirstPortfolio data={data?.data} />
      <SecoundPortfolio data={data?.data} />
      <ThirdPortfolio />
    </>
  )
}
