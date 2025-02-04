import React from 'react'
import { Circle, Text } from 'react-konva'

type DirectionTileProps = {
  circleX: number
  circleY: number
  textX: number
  textY: number
  text: string
  isActive?: boolean
}

const DirectionTile = (props: DirectionTileProps) => {
  const { circleX, circleY, textX, textY, text, isActive } = props
  return (
    <>
      <Circle x={circleX} y={circleY} radius={15} strokeWidth={1} stroke='#7D848C' fill={isActive ? '#FEEEC5' : ''} />
      <Text x={textX} y={textY} text={text} fontSize={12} fill='#000' />
    </>
  )
}

export default DirectionTile
