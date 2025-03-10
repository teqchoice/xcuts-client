import React from 'react'
import { Line } from 'react-konva'
import { useCurrentMachiningOption } from '../../hooks/useCurrentMachiningOption'
import { useAngleCutMachiningOptions } from '../../hooks/useAngleCutMachiningOptions'

type MainLineProps = {
  rectX: number
  rectY: number
  scale: (value: number) => number
  scaledWidth: number
  scaledHeight: number
}

const MainLine = (props: MainLineProps) => {
  const { rectX, rectY, scale, scaledWidth, scaledHeight } = props

  const { isBack, isFront } = useCurrentMachiningOption()

  const { L1W1AngleCut, L1W2AngleCut, L2W1AngleCut, L2W2AngleCut } = useAngleCutMachiningOptions()

  const lineX = rectX

  const lineY = rectY

  const points = [
    // first point
    0,
    isFront && L1W1AngleCut
      ? scale(L1W1AngleCut?.options.from.y)
      : isBack && L2W1AngleCut
      ? scale(L2W1AngleCut?.options.from.y)
      : 0,
    // second point
    isFront && L1W1AngleCut
      ? scale(L1W1AngleCut?.options.from.x)
      : isBack && L2W1AngleCut
      ? scale(L2W1AngleCut?.options.from.x)
      : 0,
    0,
    // third point
    isFront && L1W2AngleCut
      ? scaledWidth - scale(L1W2AngleCut?.options.from.x)
      : isBack && L2W2AngleCut
      ? scaledWidth - scale(L2W2AngleCut?.options.from.x)
      : scaledWidth,
    0,
    // fourth point
    scaledWidth,
    isFront && L1W2AngleCut
      ? scale(L1W2AngleCut?.options.from.y)
      : isBack && L2W2AngleCut
      ? scale(L2W2AngleCut?.options.from.y)
      : 0,
    // fifth point
    scaledWidth,
    isFront && L2W2AngleCut
      ? scaledHeight - scale(L2W2AngleCut?.options.from.y)
      : isBack && L1W2AngleCut
      ? scaledHeight - scale(L1W2AngleCut?.options.from.y)
      : scaledHeight,
    // sixth point
    isFront && L2W2AngleCut
      ? scaledWidth - scale(L2W2AngleCut?.options.from.x)
      : isBack && L1W2AngleCut
      ? scaledWidth - scale(L1W2AngleCut?.options.from.x)
      : scaledWidth,
    scaledHeight,
    // seventh point
    isFront && L2W1AngleCut
      ? scale(L2W1AngleCut?.options.from.x)
      : isBack && L1W1AngleCut
      ? scale(L1W1AngleCut?.options.from.x)
      : 0,
    scaledHeight,
    // eighth point
    0,
    isFront && L2W1AngleCut
      ? scaledHeight - scale(L2W1AngleCut?.options.from.y)
      : isBack && L1W1AngleCut
      ? scaledHeight - scale(L1W1AngleCut?.options.from.y)
      : scaledHeight
  ]

  return <Line x={lineX} y={lineY} points={points} fill='#ffffff' stroke='#7D848C' strokeWidth={1} closed={true} />
}

export default MainLine
