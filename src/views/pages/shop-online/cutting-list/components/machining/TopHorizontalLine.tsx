import React from 'react'
import { Line, Rect, Text } from 'react-konva'
import { useCurrentMachiningOption } from '../../hooks/useCurrentMachiningOption'
import { useAngleCutMachiningOptions } from '../../hooks/useAngleCutMachiningOptions'

type TopHorizontalLineProps = {
  rectX: number
  scaledWidth: number
  rectY: number
  scale: (value: number) => number
  round: (value: number) => number
  dimensions: {
    height: number
    width: number
  }
}

const TopHorizontalLine = (props: TopHorizontalLineProps) => {
  const { rectX, rectY, round, scale, scaledWidth, dimensions } = props

  const { isBack, isFront } = useCurrentMachiningOption()

  const { L1W1AngleCut, L1W2AngleCut, L2W1AngleCut, L2W2AngleCut } = useAngleCutMachiningOptions()

  const points = [
    isFront && L1W1AngleCut
      ? rectX + scale(L1W1AngleCut?.options.from.x)
      : isBack && L2W1AngleCut
      ? rectX + scale(L2W1AngleCut?.options.from.x)
      : rectX,
    rectY - 100,
    isFront && L1W2AngleCut
      ? rectX + scaledWidth - scale(L1W2AngleCut?.options?.from?.x)
      : isBack && L2W2AngleCut
      ? rectX + scaledWidth - scale(L2W2AngleCut?.options?.from?.x)
      : rectX + scaledWidth,
    rectY - 100
  ]

  const lines = {
    right: {
      x:
        isFront && L1W2AngleCut
          ? rectX + scaledWidth - scale(L1W2AngleCut?.options.from.x)
          : isBack && L2W2AngleCut
          ? rectX + scaledWidth - scale(L2W2AngleCut?.options.from.x)
          : rectX + scaledWidth,
      y: rectY - 105
    },
    left: {
      x:
        isFront && L1W1AngleCut
          ? rectX + scale(L1W1AngleCut?.options.from.x)
          : isBack && L2W1AngleCut
          ? rectX + scale(L2W1AngleCut?.options.from.x)
          : rectX,
      y: rectY - 105
    }
  }

  const textBgX =
    rectX +
    scaledWidth / 2 -
    35 +
    (isFront
      ? (L1W1AngleCut ? scale(L1W1AngleCut?.options.from.x) : 0) / 2 -
        (L1W2AngleCut ? scale(L1W2AngleCut?.options.from.x) : 0) / 2
      : isBack
      ? (L2W1AngleCut ? scale(L2W1AngleCut?.options.from.x) : 0) / 2 -
        (L2W2AngleCut ? scale(L2W2AngleCut?.options.from.x) : 0) / 2
      : 0)

  const textBgY = rectY - 105

  const textX =
    rectX +
    scaledWidth / 2 -
    35 +
    (isFront
      ? (L1W1AngleCut ? scale(L1W1AngleCut?.options.from.x) : 0) / 2 -
        (L1W2AngleCut ? scale(L1W2AngleCut?.options.from.x) : 0) / 2
      : isBack
      ? (L2W1AngleCut ? scale(L2W1AngleCut?.options.from.x) : 0) / 2 -
        (L2W2AngleCut ? scale(L2W2AngleCut?.options.from.x) : 0) / 2
      : 0)

  const textY = rectY - 105

  const text = `${
    dimensions.width -
    (isFront
      ? (L1W1AngleCut ? L1W1AngleCut?.options.from.x : 0) + (L1W2AngleCut ? L1W2AngleCut.options.from.x : 0)
      : isBack
      ? (L2W1AngleCut ? L2W1AngleCut?.options.from.x : 0) + (L2W2AngleCut ? L2W2AngleCut.options.from.x : 0)
      : 0)
  } mm`

  const rightAngleCutOnTopHorizontalLine = {
    width:
      isFront && L1W2AngleCut
        ? round(scale(L1W2AngleCut?.options.from.x))
        : isBack && L2W2AngleCut
        ? round(scale(L2W2AngleCut?.options.from.x))
        : 0,
    text:
      isFront && L1W2AngleCut
        ? `${L1W2AngleCut?.options.from.x} mm`
        : isBack && L2W2AngleCut
        ? `${L2W2AngleCut?.options.from.x} mm`
        : ''
  }

  const leftAngleCutOnTopHorizontalLine = {
    width:
      isFront && L1W1AngleCut
        ? round(scale(L1W1AngleCut?.options.from.x))
        : isBack && L2W1AngleCut
        ? round(scale(L2W1AngleCut?.options.from.x))
        : 0,
    text:
      isFront && L1W1AngleCut
        ? `${L1W1AngleCut?.options.from.x} mm`
        : isBack && L2W1AngleCut
        ? `${L2W1AngleCut?.options.from.x} mm`
        : ''
  }

  return (
    <>
      <Line points={points} stroke='#7D848C' strokeWidth={1} />
      {leftAngleCutOnTopHorizontalLine.width + rightAngleCutOnTopHorizontalLine.width < rectX + 10 && (
        <Rect x={textBgX} y={textBgY} width={70} height={10} fill='#fad2d4' />
      )}
      <Rect x={lines.left.x} y={lines.left.y} height={10} stroke='#7D848C' strokeWidth={1} />
      <Rect x={lines.right.x} y={lines.right.y} height={10} stroke='#7D848C' strokeWidth={1} />
      <Text
        x={textX}
        y={
          leftAngleCutOnTopHorizontalLine.width + rightAngleCutOnTopHorizontalLine.width > rectX + 10
            ? textY - 15
            : textY
        }
        text={text}
        width={70}
        fontSize={12}
        align='center'
        fill='#222222'
      />

      {!!leftAngleCutOnTopHorizontalLine?.width && (
        <>
          <Rect x={rectX} y={lines.left.y} height={10} stroke='#7D848C' strokeWidth={1} />
          <Line
            x={rectX}
            y={lines.left.y + 5}
            points={[0, 0, leftAngleCutOnTopHorizontalLine.width, 0]}
            stroke='#7D848C'
            strokeWidth={1}
          />
          {leftAngleCutOnTopHorizontalLine.width > 60 && (
            <Rect
              x={rectX + leftAngleCutOnTopHorizontalLine.width / 2 - 27.5}
              y={textBgY}
              width={55}
              height={10}
              fill='#fad2d4'
            />
          )}
          <Text
            x={rectX + leftAngleCutOnTopHorizontalLine.width / 2 - 30}
            y={leftAngleCutOnTopHorizontalLine.width > 60 ? textY : textY - 15}
            text={leftAngleCutOnTopHorizontalLine.text}
            width={60}
            fontSize={12}
            align='center'
            fill='#222222'
          />
        </>
      )}

      {!!rightAngleCutOnTopHorizontalLine?.width && (
        <>
          <Rect x={rectX + scaledWidth} y={lines.right.y} height={10} stroke='#7D848C' strokeWidth={1} />
          <Line
            x={rectX + scaledWidth - rightAngleCutOnTopHorizontalLine.width}
            y={lines.right.y + 5}
            points={[0, 0, rightAngleCutOnTopHorizontalLine.width, 0]}
            stroke='#7D848C'
            strokeWidth={1}
          />
          {rightAngleCutOnTopHorizontalLine.width > 60 && (
            <Rect
              x={rectX + scaledWidth - rightAngleCutOnTopHorizontalLine.width / 2 - 27.5}
              y={textBgY}
              width={55}
              height={10}
              fill='#fad2d4'
            />
          )}
          <Text
            x={rectX + scaledWidth - rightAngleCutOnTopHorizontalLine.width / 2 - 30}
            y={rightAngleCutOnTopHorizontalLine.width > 60 ? textY : textY - 15}
            text={rightAngleCutOnTopHorizontalLine.text}
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

export default TopHorizontalLine
