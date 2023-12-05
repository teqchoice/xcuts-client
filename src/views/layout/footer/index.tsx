import React from 'react'
import TopMneu from './topMneu'
import MineMenu from './mineMenu'
import CopyRight from './copyRight'
import { select } from 'radash'

export default function index({ data }: any) {
  // console.log(data)
  return (
    <footer className='bg-neutral-700'>
      <div className='px-4 sm:container'>
        <TopMneu data={data} />
        <MineMenu data={data} />
        <CopyRight data={data} />
      </div>
    </footer>
  )
}
