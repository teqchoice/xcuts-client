import React from 'react'
import { Line, Rect, Text } from 'react-konva'
import { useCurrentMachiningOption } from '../../hooks/useCurrentMachiningOption'
import { useAngleCutMachiningOptions } from '../../hooks/useAngleCutMachiningOptions'

type BottomHorizontalLineProps = {
  rectX: number
  scaledWidth: number
  rectY: number
  scaledHeight: number
  scale: (value: number) => number
  round: (value: number) => number
  dimensions: {
    height: number
    width: number
  }
}

const BottomHorizontalLine = (props: BottomHorizontalLineProps) => {
  const { rectX, rectY, round, scale, scaledWidth, dimensions, scaledHeight } = props

  const { isBack, isFront } = useCurrentMachiningOption()

  const { L1W1AngleCut, L1W2AngleCut, L2W1AngleCut, L2W2AngleCut } = useAngleCutMachiningOptions()

  const points = [
    isFront && L2W1AngleCut
      ? rectX + scale(L2W1AngleCut?.options.from.x)
      : isBack && L1W1AngleCut
      ? rectX + scale(L1W1AngleCut?.options.from.x)
      : rectX,
    rectY + scaledHeight + 100,
    isFront && L2W2AngleCut
      ? rectX + scaledWidth - scale(L2W2AngleCut?.options.from.x)
      : isBack && L1W2AngleCut
      ? rectX + scaledWidth - scale(L1W2AngleCut?.options.from.x)
      : rectX + scaledWidth,
    rectY + scaledHeight + 100
  ]

  const lines = {
    right: {
      x:
        isFront && L2W2AngleCut
          ? rectX + scaledWidth - scale(L2W2AngleCut?.options.from.x)
          : isBack && L1W2AngleCut
          ? rectX + scaledWidth - scale(L1W2AngleCut?.options.from.x)
          : rectX + scaledWidth,
      y: rectY + scaledHeight + 95
    },
    left: {
      x:
        isFront && L2W1AngleCut
          ? rectX + scale(L2W1AngleCut?.options.from.x)
          : isBack && L1W1AngleCut
          ? rectX + scale(L1W1AngleCut?.options.from.x)
          : rectX,
      y: rectY + scaledHeight + 95
    }
  }

  const textBgX =
    rectX +
    scaledWidth / 2 -
    35 +
    (isFront
      ? (L2W1AngleCut ? scale(L2W1AngleCut?.options.from.x) : 0) / 2 -
        (L2W2AngleCut ? scale(L2W2AngleCut?.options.from.x) : 0) / 2
      : isBack
      ? (L1W1AngleCut ? scale(L1W1AngleCut?.options.from.x) : 0) / 2 -
        (L1W2AngleCut ? scale(L1W2AngleCut?.options.from.x) : 0) / 2
      : 0)

  const textBgY = rectY + scaledHeight + 95

  const textX =
    rectX +
    scaledWidth / 2 -
    35 +
    (isFront
      ? (L2W1AngleCut ? scale(L2W1AngleCut?.options.from.x) : 0) / 2 -
        (L2W2AngleCut ? scale(L2W2AngleCut?.options.from.x) : 0) / 2
      : isBack
      ? (L1W1AngleCut ? scale(L1W1AngleCut?.options.from.x) : 0) / 2 -
        (L1W2AngleCut ? scale(L1W2AngleCut?.options.from.x) : 0) / 2
      : 0)

  const textY = rectY + scaledHeight + 95

  const text = `${
    dimensions.width -
    (isFront
      ? (L2W1AngleCut ? L2W1AngleCut?.options.from.x : 0) + (L2W2AngleCut ? L2W2AngleCut.options.from.x : 0)
      : isBack
      ? (L1W1AngleCut ? L1W1AngleCut?.options.from.x : 0) + (L1W2AngleCut ? L1W2AngleCut.options.from.x : 0)
      : 0)
  } mm`

  const rightAngleCutOnBottomHorizontalLine = {
    width:
      isFront && L2W2AngleCut
        ? round(scale(L2W2AngleCut?.options.from.x))
        : isBack && L1W2AngleCut
        ? round(scale(L1W2AngleCut?.options.from.x))
        : 0,
    text:
      isFront && L2W2AngleCut
        ? `${L2W2AngleCut?.options.from.x} mm`
        : isBack && L1W2AngleCut
        ? `${L1W2AngleCut?.options.from.x} mm`
        : ''
  }

  const leftAngleCutOnBottomHorizontalLine = {
    width:
      isFront && L2W1AngleCut
        ? round(scale(L2W1AngleCut?.options.from.x))
        : isBack && L1W1AngleCut
        ? round(scale(L1W1AngleCut?.options.from.x))
        : 0,
    text:
      isFront && L2W1AngleCut
        ? `${L2W1AngleCut?.options.from.x} mm`
        : isBack && L1W1AngleCut
        ? `${L1W1AngleCut?.options.from.x} mm`
        : ''
  }

  return (
    <>
      <Line points={points} stroke='#7D848C' strokeWidth={1} />
      {leftAngleCutOnBottomHorizontalLine.width + rightAngleCutOnBottomHorizontalLine.width < rectX + 10 && (
        <Rect x={textBgX} y={textBgY} width={70} height={10} fill='#fef2f2' />
      )}
      <Rect x={lines.left.x} y={lines.left.y} height={10} stroke='#7D848C' strokeWidth={1} />
      <Rect x={lines.right.x} y={lines.right.y} height={10} stroke='#7D848C' strokeWidth={1} />
      <Text
        x={textX}
        y={
          leftAngleCutOnBottomHorizontalLine.width + rightAngleCutOnBottomHorizontalLine.width > rectX + 10
            ? textY + 15
            : textY
        }
        text={text}
        width={70}
        fontSize={12}
        align='center'
        fill='#222222'
      />

      {!!leftAngleCutOnBottomHorizontalLine?.width && (
        <>
          <Rect x={rectX} y={lines.left.y} height={10} stroke='#7D848C' strokeWidth={1} />
          <Line
            x={rectX}
            y={lines.left.y + 5}
            points={[0, 0, leftAngleCutOnBottomHorizontalLine.width, 0]}
            stroke='#7D848C'
            strokeWidth={1}
          />
          {leftAngleCutOnBottomHorizontalLine.width > 60 && (
            <Rect
              x={rectX + leftAngleCutOnBottomHorizontalLine.width / 2 - 27.5}
              y={textBgY}
              width={55}
              height={10}
              fill='#fef2f2'
            />
          )}
          <Text
            x={rectX + leftAngleCutOnBottomHorizontalLine.width / 2 - 30}
            y={leftAngleCutOnBottomHorizontalLine.width > 60 ? textY : textY + 15}
            text={leftAngleCutOnBottomHorizontalLine.text}
            width={60}
            fontSize={12}
            align='center'
            fill='#222222'
          />
        </>
      )}

      {!!rightAngleCutOnBottomHorizontalLine?.width && (
        <>
          <Rect x={rectX + scaledWidth} y={lines.right.y} height={10} stroke='#7D848C' strokeWidth={1} />
          <Line
            x={rectX + scaledWidth - rightAngleCutOnBottomHorizontalLine.width}
            y={lines.right.y + 5}
            points={[0, 0, rightAngleCutOnBottomHorizontalLine.width, 0]}
            stroke='#7D848C'
            strokeWidth={1}
          />
          {rightAngleCutOnBottomHorizontalLine.width > 60 && (
            <Rect
              x={rectX + scaledWidth - rightAngleCutOnBottomHorizontalLine.width / 2 - 27.5}
              y={textBgY}
              width={55}
              height={10}
              fill='#fef2f2'
            />
          )}
          <Text
            x={rectX + scaledWidth - rightAngleCutOnBottomHorizontalLine.width / 2 - 30}
            y={rightAngleCutOnBottomHorizontalLine.width > 60 ? textY : textY + 15}
            text={rightAngleCutOnBottomHorizontalLine.text}
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

export default BottomHorizontalLine
