import React from 'react'
import PageIntroduction from '../components/pageIntroduction'
import IntroductionSection from './introductionSection'
import PortfolioSection from './portfolioSection'
import GallerySection from './gallerySection'
import CallActionSection from './CallActionSection'
import MapSection from './mapSection'

export default function index({ Data }: any) {
  return (
    <>
      <PageIntroduction Data={{ title: 'SHOWROOM', baner: 'images/showroom-banner.webp' }} />
      <IntroductionSection />
      <PortfolioSection />
      <GallerySection />
      <MapSection />
      <CallActionSection />
    </>
  )
}
