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
  topAngleCutOnVerticalLine: {
    height: number
    text: string
  }
  bottomAngleCutOnVerticalLine: {
    height: number
    text: string
  }
  rectY: number
  scaledHeight: number
  isLeft: boolean
}

const VerticalLine = (props: VerticalLineProps) => {
  const {
    linePoints,
    lines,
    text,
    textBgX,
    textBgY,
    textX,
    textY,
    topAngleCutOnVerticalLine,
    bottomAngleCutOnVerticalLine,
    rectY,
    scaledHeight,
    isLeft
  } = props

  return (
    <>
      <Line points={linePoints} stroke='#7D848C' strokeWidth={1} />
      {topAngleCutOnVerticalLine.height + bottomAngleCutOnVerticalLine.height < rectY + 10 && (
        <Rect x={textBgX} y={textBgY} width={10} height={70} fill='#fad2d4' />
      )}
      <Rect x={lines.bottom.x} y={lines.bottom.y} height={1} stroke='#7D848C' strokeWidth={10} />
      <Rect x={lines.top.x} y={lines.top.y} height={1} stroke='#7D848C' strokeWidth={10} />
      <Text
        x={
          topAngleCutOnVerticalLine?.height + bottomAngleCutOnVerticalLine.height > rectY + 10
            ? textX + (isLeft ? -15 : 15)
            : textX
        }
        y={textY}
        text={text}
        fontSize={12}
        align='center'
        height={60}
        rotation={90}
        fill='#222222'
      />

      {!!topAngleCutOnVerticalLine?.height && (
        <>
          <Rect x={lines.top.x - 5} y={rectY} width={10} stroke='#7D848C' strokeWidth={1} />
          <Line
            x={lines.top.x}
            y={rectY}
            points={[0, 0, 0, topAngleCutOnVerticalLine.height]}
            stroke='#7D848C'
            strokeWidth={1}
          />
          {topAngleCutOnVerticalLine.height > 70 && (
            <Rect
              x={textBgX}
              y={rectY + topAngleCutOnVerticalLine.height / 2 - 30}
              width={10}
              height={60}
              fill='#fad2d4'
            />
          )}
          <Text
            x={topAngleCutOnVerticalLine.height > 60 ? textX : textX + (isLeft ? -15 : 15)}
            y={rectY + topAngleCutOnVerticalLine.height / 2 - 25}
            text={topAngleCutOnVerticalLine.text}
            fontSize={12}
            align='center'
            height={60}
            rotation={90}
            fill='#222222'
          />
        </>
      )}
      {!!bottomAngleCutOnVerticalLine?.height && (
        <>
          <Rect x={lines.bottom.x - 5} y={rectY + scaledHeight} width={10} stroke='#7D848C' strokeWidth={1} />
          <Line
            x={lines.bottom.x}
            y={rectY + scaledHeight - bottomAngleCutOnVerticalLine.height}
            points={[0, 0, 0, bottomAngleCutOnVerticalLine.height]}
            stroke='#7D848C'
            strokeWidth={1}
          />
          {bottomAngleCutOnVerticalLine.height > 70 && (
            <Rect
              x={textBgX}
              y={rectY + scaledHeight - bottomAngleCutOnVerticalLine.height / 2 - 30}
              width={10}
              height={60}
              fill='#fad2d4'
            />
          )}
          <Text
            x={bottomAngleCutOnVerticalLine.height > 60 ? textX : textX + (isLeft ? -15 : 15)}
            y={rectY + scaledHeight - bottomAngleCutOnVerticalLine.height / 2 - 25}
            text={bottomAngleCutOnVerticalLine.text}
            fontSize={12}
            align='center'
            height={60}
            rotation={90}
            fill='#222222'
          />
        </>
      )}
    </>
  )
}

export default VerticalLine
