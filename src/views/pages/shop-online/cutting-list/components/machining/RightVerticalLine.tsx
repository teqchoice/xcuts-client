import React from 'react'
import { Line, Rect, Text } from 'react-konva'
import { useCurrentMachiningOption } from '../../hooks/useCurrentMachiningOption'
import { useAngleCutMachiningOptions } from '../../hooks/useAngleCutMachiningOptions'

type RightVerticalLineProps = {
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

const RightVerticalLine = (props: RightVerticalLineProps) => {
  const { rectX, rectY, round, scale, scaledWidth, dimensions, scaledHeight } = props

  const { isBack, isFront } = useCurrentMachiningOption()

  const { L1W2AngleCut, L2W2AngleCut } = useAngleCutMachiningOptions()

  const points = [
    rectX + scaledWidth + 100,
    isFront && L1W2AngleCut
      ? rectY + scale(L1W2AngleCut?.options.from.y)
      : isBack && L2W2AngleCut
      ? rectY + scale(L2W2AngleCut?.options.from.y)
      : rectY,
    rectX + scaledWidth + 100,
    isFront && L2W2AngleCut
      ? rectY + scaledHeight - scale(L2W2AngleCut?.options.from.y)
      : isBack && L1W2AngleCut
      ? rectY + scaledHeight - scale(L1W2AngleCut?.options.from.y)
      : rectY + scaledHeight
  ]

  const lines = {
    top: {
      x: rectX + scaledWidth + 100,
      y:
        isFront && L1W2AngleCut
          ? rectY + scale(L1W2AngleCut?.options.from.y)
          : isBack && L2W2AngleCut
          ? rectY + scale(L2W2AngleCut?.options.from.y)
          : rectY
    },
    bottom: {
      x: rectX + scaledWidth + 100,
      y:
        isFront && L2W2AngleCut
          ? rectY + scaledHeight - scale(L2W2AngleCut?.options.from.y)
          : isBack && L1W2AngleCut
          ? rectY + scaledHeight - scale(L1W2AngleCut?.options.from.y)
          : rectY + scaledHeight
    }
  }

  const textBgY =
    rectY +
    scaledHeight / 2 -
    35 +
    (isFront
      ? (L1W2AngleCut ? scale(L1W2AngleCut?.options.from.y) : 0) / 2 -
        (L2W2AngleCut ? scale(L2W2AngleCut?.options.from.y) : 0) / 2
      : isBack
      ? (L2W2AngleCut ? scale(L2W2AngleCut?.options.from.y) : 0) / 2 -
        (L1W2AngleCut ? scale(L1W2AngleCut?.options.from.y) : 0) / 2
      : 0)

  const textBgX = rectX + scaledWidth + 95

  const textY =
    rectY +
    scaledHeight / 2 -
    25 +
    (isFront
      ? (L1W2AngleCut ? scale(L1W2AngleCut?.options.from.y) : 0) / 2 -
        (L2W2AngleCut ? scale(L2W2AngleCut?.options.from.y) : 0) / 2
      : isBack
      ? (L2W2AngleCut ? scale(L2W2AngleCut?.options.from.y) : 0) / 2 -
        (L1W2AngleCut ? scale(L1W2AngleCut?.options.from.y) : 0) / 2
      : 0)

  const textX = rectX + scaledWidth + 105

  const text = `${
    dimensions.height -
    (isFront
      ? (L1W2AngleCut ? L1W2AngleCut?.options.from.y : 0) + (L2W2AngleCut ? L2W2AngleCut.options.from.y : 0)
      : isBack
      ? (L2W2AngleCut ? L2W2AngleCut?.options.from.y : 0) + (L1W2AngleCut ? L1W2AngleCut.options.from.y : 0)
      : 0)
  } mm`

  const topAngleCutOnRightVerticalLine = {
    height:
      isFront && L1W2AngleCut
        ? round(scale(L1W2AngleCut?.options.from.y))
        : isBack && L2W2AngleCut
        ? round(scale(L2W2AngleCut?.options.from.y))
        : 0,
    text:
      isFront && L1W2AngleCut
        ? `${L1W2AngleCut?.options.from.y} mm`
        : isBack && L2W2AngleCut
        ? `${L2W2AngleCut?.options.from.y} mm`
        : ''
  }

  const bottomAngleCutOnRightVerticalLine = {
    height:
      isFront && L2W2AngleCut
        ? round(scale(L2W2AngleCut?.options.from.y))
        : isBack && L1W2AngleCut
        ? round(scale(L1W2AngleCut?.options.from.y))
        : 0,
    text:
      isFront && L2W2AngleCut
        ? `${L2W2AngleCut?.options.from.y} mm`
        : isBack && L1W2AngleCut
        ? `${L1W2AngleCut?.options.from.y} mm`
        : ''
  }
  return (
    <>
      <Line points={points} stroke='#7D848C' strokeWidth={1} />
      {topAngleCutOnRightVerticalLine.height + bottomAngleCutOnRightVerticalLine.height < rectY + 10 && (
        <Rect x={textBgX} y={textBgY} width={10} height={70} fill='#fef2f2' />
      )}
      <Rect x={lines.bottom.x} y={lines.bottom.y} height={1} stroke='#7D848C' strokeWidth={10} />
      <Rect x={lines.top.x} y={lines.top.y} height={1} stroke='#7D848C' strokeWidth={10} />
      <Text
        x={
          topAngleCutOnRightVerticalLine?.height + bottomAngleCutOnRightVerticalLine.height > rectY + 10
            ? textX + 15
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

      {!!topAngleCutOnRightVerticalLine?.height && (
        <>
          <Rect x={lines.top.x - 5} y={rectY} width={10} stroke='#7D848C' strokeWidth={1} />
          <Line
            x={lines.top.x}
            y={rectY}
            points={[0, 0, 0, topAngleCutOnRightVerticalLine.height]}
            stroke='#7D848C'
            strokeWidth={1}
          />
          {topAngleCutOnRightVerticalLine.height > 60 && (
            <Rect
              x={textBgX}
              y={rectY + topAngleCutOnRightVerticalLine.height / 2 - 27.5}
              width={10}
              height={55}
              fill='#fef2f2'
            />
          )}
          <Text
            x={topAngleCutOnRightVerticalLine.height > 60 ? textX : textX + 15}
            y={rectY + topAngleCutOnRightVerticalLine.height / 2 - 22.5}
            text={topAngleCutOnRightVerticalLine.text}
            fontSize={12}
            align='center'
            height={60}
            rotation={90}
            fill='#222222'
          />
        </>
      )}
      {!!bottomAngleCutOnRightVerticalLine?.height && (
        <>
          <Rect x={lines.bottom.x - 5} y={rectY + scaledHeight} width={10} stroke='#7D848C' strokeWidth={1} />
          <Line
            x={lines.bottom.x}
            y={rectY + scaledHeight - bottomAngleCutOnRightVerticalLine.height}
            points={[0, 0, 0, bottomAngleCutOnRightVerticalLine.height]}
            stroke='#7D848C'
            strokeWidth={1}
          />
          {bottomAngleCutOnRightVerticalLine.height > 60 && (
            <Rect
              x={textBgX}
              y={rectY + scaledHeight - bottomAngleCutOnRightVerticalLine.height / 2 - 27.5}
              width={10}
              height={55}
              fill='#fef2f2'
            />
          )}
          <Text
            x={bottomAngleCutOnRightVerticalLine.height > 60 ? textX : textX + 15}
            y={rectY + scaledHeight - bottomAngleCutOnRightVerticalLine.height / 2 - 22.5}
            text={bottomAngleCutOnRightVerticalLine.text}
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

export default RightVerticalLine
