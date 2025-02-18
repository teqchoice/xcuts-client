import React from 'react'
import { Line, Rect, Text } from 'react-konva'
import { useCurrentMachiningOption } from '../../hooks/useCurrentMachiningOption'
import { useAngleCutMachiningOptions } from '../../hooks/useAngleCutMachiningOptions'

type LeftVerticalLineProps = {
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

const LeftVerticalLine = (props: LeftVerticalLineProps) => {
  const { rectX, rectY, round, scale, scaledWidth, dimensions, scaledHeight } = props

  const { isBack, isFront } = useCurrentMachiningOption()

  const { L1W2AngleCut, L2W2AngleCut, L1W1AngleCut, L2W1AngleCut } = useAngleCutMachiningOptions()

  const points = [
    rectX - 100,
    isFront && L1W1AngleCut
      ? rectY + scale(L1W1AngleCut?.options.from.y)
      : isBack && L2W1AngleCut
      ? rectY + scale(L2W1AngleCut?.options.from.y)
      : rectY,
    rectX - 100,
    isFront && L2W1AngleCut
      ? rectY + scaledHeight - scale(L2W1AngleCut?.options.from.y)
      : isBack && L1W1AngleCut
      ? rectY + scaledHeight - scale(L1W1AngleCut?.options.from.y)
      : rectY + scaledHeight
  ]

  const lines = {
    top: {
      x: rectX - 100,
      y:
        isFront && L2W1AngleCut
          ? rectY + scaledHeight - scale(L2W1AngleCut?.options.from.y)
          : isBack && L1W1AngleCut
          ? rectY + scaledHeight - scale(L1W1AngleCut?.options.from.y)
          : rectY + scaledHeight
    },
    bottom: {
      x: rectX - 100,
      y:
        isFront && L1W1AngleCut
          ? rectY + scale(L1W1AngleCut?.options.from.y)
          : isBack && L2W1AngleCut
          ? rectY + scale(L2W1AngleCut?.options.from.y)
          : rectY
    }
  }

  const textBgY =
    rectY +
    scaledHeight / 2 -
    35 +
    (isFront
      ? (L1W1AngleCut ? scale(L1W1AngleCut?.options.from.y) : 0) / 2 -
        (L2W1AngleCut ? scale(L2W1AngleCut?.options.from.y) : 0) / 2
      : isBack
      ? (L2W1AngleCut ? scale(L2W1AngleCut?.options.from.y) : 0) / 2 -
        (L1W1AngleCut ? scale(L1W1AngleCut?.options.from.y) : 0) / 2
      : 0)

  const textBgX = rectX - 105

  const textY =
    rectY +
    scaledHeight / 2 -
    25 +
    (isFront
      ? (L1W1AngleCut ? scale(L1W1AngleCut?.options.from.y) : 0) / 2 -
        (L2W1AngleCut ? scale(L2W1AngleCut?.options.from.y) : 0) / 2
      : isBack
      ? (L2W1AngleCut ? scale(L2W1AngleCut?.options.from.y) : 0) / 2 -
        (L1W1AngleCut ? scale(L1W1AngleCut?.options.from.y) : 0) / 2
      : 0)

  const textX = rectX - 95

  const text = `${
    dimensions.height -
    (isFront
      ? (L1W1AngleCut ? L1W1AngleCut?.options.from.y : 0) + (L2W1AngleCut ? L2W1AngleCut.options.from.y : 0)
      : isBack
      ? (L2W1AngleCut ? L2W1AngleCut?.options.from.y : 0) + (L1W1AngleCut ? L1W1AngleCut.options.from.y : 0)
      : 0)
  } mm`

  const topAngleCutOnLeftVerticalLine = {
    height:
      isFront && L1W1AngleCut
        ? round(scale(L1W1AngleCut?.options.from.y))
        : isBack && L2W1AngleCut
        ? round(scale(L2W1AngleCut?.options.from.y))
        : 0,
    text:
      isFront && L1W1AngleCut
        ? `${L1W1AngleCut?.options.from.y} mm`
        : isBack && L2W1AngleCut
        ? `${L2W1AngleCut?.options.from.y} mm`
        : ''
  }

  const bottomAngleCutOnLeftVerticalLine = {
    height:
      isFront && L2W1AngleCut
        ? round(scale(L2W1AngleCut?.options.from.y))
        : isBack && L1W1AngleCut
        ? round(scale(L1W1AngleCut?.options.from.y))
        : 0,
    text:
      isFront && L2W1AngleCut
        ? `${L2W1AngleCut?.options.from.y} mm`
        : isBack && L1W1AngleCut
        ? `${L1W1AngleCut?.options.from.y} mm`
        : ''
  }
  return (
    <>
      <Line points={points} stroke='#7D848C' strokeWidth={1} />
      {topAngleCutOnLeftVerticalLine.height + bottomAngleCutOnLeftVerticalLine.height < rectY + 10 && (
        <Rect x={textBgX} y={textBgY} width={10} height={70} fill='#fad2d4' />
      )}
      <Rect x={lines.bottom.x} y={lines.bottom.y} height={1} stroke='#7D848C' strokeWidth={10} />
      <Rect x={lines.top.x} y={lines.top.y} height={1} stroke='#7D848C' strokeWidth={10} />
      <Text
        x={
          topAngleCutOnLeftVerticalLine?.height + bottomAngleCutOnLeftVerticalLine.height > rectY + 10
            ? textX - 15
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

      {!!topAngleCutOnLeftVerticalLine?.height && (
        <>
          <Rect x={lines.top.x - 5} y={rectY} width={10} stroke='#7D848C' strokeWidth={1} />
          <Line
            x={lines.top.x}
            y={rectY}
            points={[0, 0, 0, topAngleCutOnLeftVerticalLine.height]}
            stroke='#7D848C'
            strokeWidth={1}
          />
          {topAngleCutOnLeftVerticalLine.height > 60 && (
            <Rect
              x={textBgX}
              y={rectY + topAngleCutOnLeftVerticalLine.height / 2 - 27.5}
              width={10}
              height={55}
              fill='#fad2d4'
            />
          )}
          <Text
            x={topAngleCutOnLeftVerticalLine.height > 60 ? textX : textX - 15}
            y={rectY + topAngleCutOnLeftVerticalLine.height / 2 - 22.5}
            text={topAngleCutOnLeftVerticalLine.text}
            fontSize={12}
            align='center'
            height={60}
            rotation={90}
            fill='#222222'
          />
        </>
      )}
      {!!bottomAngleCutOnLeftVerticalLine?.height && (
        <>
          <Rect x={lines.bottom.x - 5} y={rectY + scaledHeight} width={10} stroke='#7D848C' strokeWidth={1} />
          <Line
            x={lines.bottom.x}
            y={rectY + scaledHeight - bottomAngleCutOnLeftVerticalLine.height}
            points={[0, 0, 0, bottomAngleCutOnLeftVerticalLine.height]}
            stroke='#7D848C'
            strokeWidth={1}
          />
          {bottomAngleCutOnLeftVerticalLine.height > 60 && (
            <Rect
              x={textBgX}
              y={rectY + scaledHeight - bottomAngleCutOnLeftVerticalLine.height / 2 - 27.5}
              width={10}
              height={55}
              fill='#fad2d4'
            />
          )}
          <Text
            x={bottomAngleCutOnLeftVerticalLine.height > 60 ? textX : textX - 15}
            y={rectY + scaledHeight - bottomAngleCutOnLeftVerticalLine.height / 2 - 22.5}
            text={bottomAngleCutOnLeftVerticalLine.text}
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

export default LeftVerticalLine
