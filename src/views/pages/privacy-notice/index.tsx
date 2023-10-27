import React from 'react'
import PageIntroduction from '../components/pageIntroduction'
import ContentSection from './contentSection'

export default function index({ Data }: any) {
  return (
    <>
      <PageIntroduction Data={{ title: 'Privacy Notice', baner: '' }} />
      <ContentSection Data={Data?.delivery} />
    </>
  )
}
