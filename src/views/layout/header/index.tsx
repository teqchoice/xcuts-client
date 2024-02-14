import React from 'react'
import TopMenu from './topMenu'
import MineMenu from './mineMenu'
import MineHeader from './mineHeader'
import Link from 'next/link'
import { select } from 'radash'

export default function index({ data }: any) {
  // console.log(data)
  // const m1 = data.map(
  //   item =>
  //     select(
  //       item,
  //       i => item,
  //       i => (i.title === 'DELIVERY' ? i : null)
  //     )[0]
  // )
  // console.log(data.find(arr => arr.some(obj => obj.title === 'DELIVERY')))
  return (
    <header>
      <TopMenu data={data.find(arr => arr.some(obj => obj.title === 'DELIVERY'))} />
      <MineHeader data={data.find(arr => arr.some(obj => obj.title === 'times'))} />
      <MineMenu
        data={data.find(arr => arr.some(obj => obj.title === 'Home'))}
        logo={data.find(arr => arr.some(obj => obj.title === 'times'))}
      />
    </header>
  )
}
