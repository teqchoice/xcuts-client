import React from 'react'
import TopMenu from './topMenu'
import MineMenu from './mineMenu'
import MineHeader from './mineHeader'

export default function index() {
  return (
    <header>
      <TopMenu />
      <MineHeader />
      <MineMenu />
    </header>
  )
}
