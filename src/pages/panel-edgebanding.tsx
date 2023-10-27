import Layout from '@/views/layout'
import React from 'react'
import PanelEdgebanding from '@/views/pages/panel-edgebanding'

// !! Fake DB
import FakeDb from '@/DB/content.json'

export default function PPanelEdgebanding() {
  return (
    <Layout>
      <PanelEdgebanding Data={FakeDb} />
    </Layout>
  )
}
