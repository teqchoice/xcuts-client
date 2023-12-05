import React from 'react'
import TopMenu from './topMenu'
import MineMenu from './mineMenu'
import MineHeader from './mineHeader'

export default function index({ data }: any) {
  // console.log(data)
  return (
    <header>
      <TopMenu data={data[2]} />
      <MineHeader data={data[1]} />
      <MineMenu data={data[0]} />
    </header>
  )
}
