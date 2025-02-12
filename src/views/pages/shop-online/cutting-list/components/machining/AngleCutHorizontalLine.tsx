import React from 'react'
import { Line, Rect, Text } from 'react-konva'

type AngleCutHorizontalLineProps = {
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
  width: number
}

const AngleCutHorizontalLine = (props: AngleCutHorizontalLineProps) => {
  const { linePoints, text, textX, textY, textBgX, textBgY, lines, width } = props

  console.log(width)

  return (
    <>
      <Line points={linePoints} stroke='#7D848C' strokeWidth={1} />
      {/* {width > 80 ? <Rect x={textBgX} y={textBgY} width={70} height={10} fill='#fad2d4' /> : null}
      <Rect x={lines.left.x} y={lines.left.y} height={10} stroke='#7D848C' strokeWidth={1} />
      <Rect x={lines.right.x} y={lines.right.y} height={10} stroke='#7D848C' strokeWidth={1} />
      <Text
        x={textX}
        y={width < 65 ? textY - 15 : textY}
        text={text}
        width={70}
        fontSize={12}
        align='center'
        fill='#222222'
      /> */}
    </>
  )
}

export default AngleCutHorizontalLine
