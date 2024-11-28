import React from 'react'
import RenderBlock from './renderBlock'

export default function index({ Data }: any) {
  // console.log(Data)
  return <RenderBlock Data={Data} />
}
