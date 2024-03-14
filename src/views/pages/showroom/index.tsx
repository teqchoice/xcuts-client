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
      <PageIntroduction Data={{ title: 'WELCOME TO OUR XCUTS SHOWROOM!', baner: 'images/banner-1-showroom.jpeg' }} />
      <IntroductionSection />
      <PortfolioSection />
      <GallerySection />
      <MapSection />
      <CallActionSection />
    </>
  )
}
