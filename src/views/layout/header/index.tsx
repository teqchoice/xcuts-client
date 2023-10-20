import React from 'react'
import TopMenu from './topMenu'
import MineMenu from './mineMenu'
import MineHeader from './mineHeader'

export default function index({ Data }: any) {
  return (
    <header>
      <TopMenu Data={Data.topMenu} />
      <MineHeader Data={Data.mainHeader} />
      <MineMenu Data={Data.mainMenu} />
    </header>
  )
}
