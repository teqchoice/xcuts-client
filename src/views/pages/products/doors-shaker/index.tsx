import React from 'react'
import PageIntroduction from '@/views/pages/components/pageIntroduction'
import IntroductionSection from './introductionSection'
import FirstPortfolio from './firstPortfolioSection'
import SecoundPortfolio from './secoundPortfolioSection'
import ThirdPortfolio from './thirdPortfolioSection'

export default function index({ data }: any) {
  return (
    <>
      <PageIntroduction
        Data={{
          title: data?.data?.title ?? 'Custom Shaker-style Doors',
          baner: '/images/shaker-doors/main-banner.webp'
        }}
      />
      <IntroductionSection data={data?.data} />
      <FirstPortfolio data={data?.data} />
      {/* <SecoundPortfolio data={data?.data} /> */}
      {/* <ThirdPortfolio /> */}
    </>
  )
}
