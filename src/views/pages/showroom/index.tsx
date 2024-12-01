import React from 'react'
import PageIntroduction from '../components/pageIntroduction'
import IntroductionSection from './introductionSection'
import PortfolioSection from './portfolioSection'
import GallerySection from './gallerySection'
import CallActionSection from './CallActionSection'
import MapSection from './mapSection'
import RenderBlock from '../decor-collections/brand/details/renderBlock'

export default function index({ Data }: any) {
  return (
    <>
      <RenderBlock Data={Data} />
      {/* <GallerySection /> */}
      <MapSection />
      <CallActionSection />
    </>
  )
}
