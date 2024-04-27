import React from 'react'
import PageIntroduction from '../components/pageIntroduction'
import Order from './order'
import { BackgroundImage } from '@mantine/core'

export default function index({ Data }: any) {
  return <PageIntroduction Data={{ title: 'Coming Soon', baner: 'images/order-banner.webp'}} />
}
