import React from 'react'
import { Line, Rect, Text } from 'react-konva'

type HorizontalLineProps = {
  linePoints: number[]
  lines: {
    right: { x: number; y: number }
    left: { x: number; y: number }
  }
  textX: number
  textY: number
  text: string
  textBgX: number
  textBgY: number
}

const HorizontalLine = (props: HorizontalLineProps) => {
  const { linePoints, text, textX, textY, textBgX, textBgY, lines } = props

  return (
    <>
      <Line points={linePoints} stroke='#7D848C' strokeWidth={1} />
      <Rect x={textBgX} y={textBgY} width={70} height={10} fill='#fad2d4' />
      <Rect x={lines.left.x} y={lines.left.y} height={10} stroke='#7D848C' strokeWidth={1} />
      <Rect x={lines.right.x} y={lines.right.y} height={10} stroke='#7D848C' strokeWidth={1} />
      <Text x={textX} y={textY} text={text} width={70} fontSize={12} align='center' fill='#222222' />
    </>
  )
}

export default HorizontalLine
