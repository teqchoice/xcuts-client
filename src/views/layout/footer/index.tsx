import React from 'react'
import TopMneu from './topMneu'
import MineMenu from './mineMenu'
import CopyRight from './copyRight'

export default function index({ data }: any) {
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
