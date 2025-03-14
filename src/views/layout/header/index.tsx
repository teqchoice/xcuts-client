import React, { useState } from 'react'
import TopMenu from './topMenu'
import MineMenu from './mineMenu'
import MineHeader from './mineHeader'
import Link from 'next/link'
import { select } from 'radash'
import Dropdown from './components/Dropdown'

export default function index({ data }: any) {
  const [menu, setMenu] = useState('')

  return (
    <header>
      <TopMenu data={data} />
      <MineHeader data={data} />
      <MineMenu data={data} setMenu={setMenu} />

      <Dropdown data={data} menu={menu} setMenu={setMenu} />
    </header>
  )
}
