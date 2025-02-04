import React from 'react'
import { Line, Rect, Text } from 'react-konva'

type VerticalLineProps = {
  linePoints: number[]
  lines: {
    top: { x: number; y: number }
    bottom: { x: number; y: number }
  }
  textX: number
  textY: number
  text: string
  textBgX: number
  textBgY: number
}

const VerticalLine = (props: VerticalLineProps) => {
  const { linePoints, lines, text, textBgX, textBgY, textX, textY } = props

  return (
    <>
      <Line points={linePoints} stroke='#7D848C' strokeWidth={1} />
      <Rect x={lines.top.x} y={lines.top.y} width={10} height={70} fill='#fad2d4' />
      <Rect x={lines.bottom.x} y={lines.bottom.y} height={1} stroke='#7D848C' strokeWidth={10} />
      <Rect x={textBgX} y={textBgY} height={1} stroke='#7D848C' strokeWidth={10} />
      <Text x={textX} y={textY} text={text} fontSize={12} align='center' height={70} rotation={90} fill='#222222' />
    </>
  )
}

export default VerticalLine
