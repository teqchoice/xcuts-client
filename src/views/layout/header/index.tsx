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
      <TopMenu data={data.find(arr => arr.some(obj => obj.title === 'DELIVERY'))} />
      <MineHeader data={data.find(arr => arr.some(obj => obj.title === 'times'))} />
      <MineMenu
        data={data.find(arr => arr.some(obj => obj.title === 'Home'))}
        logo={data.find(arr => arr.some(obj => obj.title === 'times'))}
        setMenu={setMenu}
      />

      <Dropdown menu={menu} setMenu={setMenu} />
    </header>
  )
}
