import React from 'react'
import TopMenu from './topMenu'
import MineMenu from './mineMenu'
import MineHeader from './mineHeader'

export default function index({ data }: any) {
  // console.log(data)
  return (
    <header>
      <TopMenu data={data[1]} />
      <MineHeader data={data[0]} />
      <MineMenu data={data[2]} />
    </header>
  )
}
