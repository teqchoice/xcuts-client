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
  rightAngleCutOnHorizontalLine: {
    width: number
    text: string
  }
  leftAngleCutOnHorizontalLine: {
    width: number
    text: string
  }
  rectX: number
  scaledWidth: number
  isTop: boolean
}

const HorizontalLine = (props: HorizontalLineProps) => {
  const {
    linePoints,
    text,
    textX,
    textY,
    textBgX,
    textBgY,
    lines,
    leftAngleCutOnHorizontalLine,
    rightAngleCutOnHorizontalLine,
    rectX,
    scaledWidth,
    isTop
  } = props

  return (
    <>
      <Line points={linePoints} stroke='#7D848C' strokeWidth={1} />
      {leftAngleCutOnHorizontalLine.width + rightAngleCutOnHorizontalLine.width < rectX + 10 && (
        <Rect x={textBgX} y={textBgY} width={70} height={10} fill='#fad2d4' />
      )}
      <Rect x={lines.left.x} y={lines.left.y} height={10} stroke='#7D848C' strokeWidth={1} />
      <Rect x={lines.right.x} y={lines.right.y} height={10} stroke='#7D848C' strokeWidth={1} />
      <Text
        x={textX}
        y={
          leftAngleCutOnHorizontalLine.width + rightAngleCutOnHorizontalLine.width > rectX + 10
            ? textY + (isTop ? -15 : 15)
            : textY
        }
        text={text}
        width={70}
        fontSize={12}
        align='center'
        fill='#222222'
      />

      {!!leftAngleCutOnHorizontalLine?.width && (
        <>
          <Rect x={rectX} y={lines.left.y} height={10} stroke='#7D848C' strokeWidth={1} />
          <Line
            x={rectX}
            y={lines.left.y + 5}
            points={[0, 0, leftAngleCutOnHorizontalLine.width, 0]}
            stroke='#7D848C'
            strokeWidth={1}
          />
          {leftAngleCutOnHorizontalLine.width > 70 && (
            <Rect
              x={rectX + leftAngleCutOnHorizontalLine.width / 2 - 30}
              y={textBgY}
              width={60}
              height={10}
              fill='#fad2d4'
            />
          )}
          <Text
            x={rectX + leftAngleCutOnHorizontalLine.width / 2 - 30}
            y={leftAngleCutOnHorizontalLine.width > 60 ? textY : textY + (isTop ? -15 : 15)}
            text={leftAngleCutOnHorizontalLine.text}
            width={60}
            fontSize={12}
            align='center'
            fill='#222222'
          />
        </>
      )}

      {!!rightAngleCutOnHorizontalLine?.width && (
        <>
          <Rect x={rectX + scaledWidth} y={lines.right.y} height={10} stroke='#7D848C' strokeWidth={1} />
          <Line
            x={rectX + scaledWidth - rightAngleCutOnHorizontalLine.width}
            y={lines.right.y + 5}
            points={[0, 0, rightAngleCutOnHorizontalLine.width, 0]}
            stroke='#7D848C'
            strokeWidth={1}
          />
          {rightAngleCutOnHorizontalLine.width > 70 && (
            <Rect
              x={rectX + scaledWidth - rightAngleCutOnHorizontalLine.width / 2 - 30}
              y={textBgY}
              width={60}
              height={10}
              fill='#fad2d4'
            />
          )}
          <Text
            x={rectX + scaledWidth - rightAngleCutOnHorizontalLine.width / 2 - 30}
            y={rightAngleCutOnHorizontalLine.width > 60 ? textY : textY + (isTop ? -15 : 15)}
            text={rightAngleCutOnHorizontalLine.text}
            width={60}
            fontSize={12}
            align='center'
            fill='#222222'
          />
        </>
      )}
    </>
  )
}

export default HorizontalLine
