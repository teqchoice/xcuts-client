import React from 'react'
import PageIntroduction from '@/views/pages/components/pageIntroduction'
import TermsContent from './termsContent'

export default function TermsPage({ Data }: any) {
  return (
    <>
      <PageIntroduction Data={{ title: 'Terms and Conditions', baner: '' }} />
      <TermsContent Data={Data.terms_and_conditions} />
    </>
  )
}
