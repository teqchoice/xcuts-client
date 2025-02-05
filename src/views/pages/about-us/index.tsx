import React from 'react'
import RenderBlock from '../decor-collections/brand/details/renderBlock'

export default function index({ Data }: any) {
  return (
    <>
      <RenderBlock Data={Data} />
      {/* <ProductionManagementTeamSection Data={Data?.delivery} /> */}
      {/* <SalesTeamSection Data={Data?.delivery} /> */}
      {/* <MarketingTeamSection Data={Data?.delivery} /> */}
    </>
  )
}
