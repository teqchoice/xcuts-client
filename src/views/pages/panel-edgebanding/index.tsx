import React from 'react'
import PageIntroduction from '../components/pageIntroduction'
import IntroductionSection from './introductionSection copy'
import BookingSection from './bookingSection'

export default function index({ Data }: any) {
  return (
    <>
      <PageIntroduction Data={{ title: 'PANEL-EDGEBANDING', baner: 'images/panel-edgebanding-banner.webp' }} />
      <IntroductionSection Data={Data?.delivery} />
      <BookingSection Data={Data?.delivery} />
    </>
  )
}
