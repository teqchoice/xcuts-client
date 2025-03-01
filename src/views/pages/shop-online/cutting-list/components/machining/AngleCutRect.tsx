import React from 'react'
import { Rect, Text } from 'react-konva'
import { useAngleCutMachiningOptions } from '../../hooks/useAngleCutMachiningOptions'
import { useCurrentMachiningOption } from '../../hooks/useCurrentMachiningOption'
import { useMachiningStore } from '../../store/machiningOptionsStore'

type AngleCutRectProps = {
  rectX: number
  scaledWidth: number
  rectY: number
  scaledHeight: number
  scale: (value: number) => number
}

const AngleCutRect = (props: AngleCutRectProps) => {
  const { rectX, scaledWidth, rectY, scaledHeight, scale } = props

  const {
    isL1W1,
    isL1W2,
    isL2W2,
    isL2W1,
    angles,
    currentAngleCutDegree,
    currentAngleCutY,
    currentAngleCutHypotenuse,
    currentAngleCutX
  } = useAngleCutMachiningOptions()

  const { currentMachiningOption } = useMachiningStore()

  const { isFront } = useCurrentMachiningOption()

  const isAngledCut = currentMachiningOption?.type === 'angled-cut'

  const angleCutRectScaleX = isL1W1 || isL2W1 || !angles.length ? 1 : -1

  const angleCutRectScaleY = isAngledCut
    ? isL1W1 || isL1W2 || !angles.length
      ? isFront
        ? 1
        : -1
      : isFront
      ? -1
      : 1
    : 1

  const angleCutRectX = isL1W2 || isL2W2 ? rectX + scaledWidth : rectX

  const angleCutRectY = isAngledCut
    ? isFront
      ? isL2W1 || isL2W2
        ? rectY + scaledHeight - scale(currentAngleCutY)
        : rectY + scale(currentAngleCutY)
      : isL1W2 || isL1W1
      ? rectY + scaledHeight - scale(currentAngleCutY)
      : rectY + scale(currentAngleCutY)
    : 0

  const angleCutRectRotation = isAngledCut
    ? isFront
      ? isL1W1 || isL2W2
        ? 270 + currentAngleCutDegree
        : isL1W2 || isL2W1
        ? 90 - currentAngleCutDegree
        : 0
      : isL1W1 || isL2W2
      ? 90 - currentAngleCutDegree
      : isL1W2 || isL2W1
      ? 270 + currentAngleCutDegree
      : 0
    : 0

  // angle cut text

  const angleCutTextX = isAngledCut
    ? isL1W2 || isL2W2
      ? rectX + scaledWidth - scale(currentAngleCutX) / 2
      : rectX + scale(currentAngleCutX) / 2
    : 0

  const angleCutTextY = isAngledCut
    ? isFront
      ? isL2W1 || isL2W2
        ? rectY + scaledHeight - scale(currentAngleCutY) / 2 - 5
        : rectY + scale(currentAngleCutY) / 2
      : isL1W2 || isL1W1
      ? rectY + scaledHeight - scale(currentAngleCutY) / 2 - 5
      : rectY + scale(currentAngleCutY) / 2
    : 0

  const angleCutTextOffsetY = isAngledCut
    ? isFront
      ? isL2W1 || isL2W2
        ? scale(200)
        : -scale(140)
      : isL1W2 || isL1W1
      ? scale(200)
      : -scale(140)
    : 0
  return (
    <>
      <Rect
        x={angleCutRectX}
        y={angleCutRectY}
        height={scale(120)}
        width={scale(currentAngleCutHypotenuse)}
        stroke='#3592C8'
        strokeWidth={1}
        scaleY={angleCutRectScaleY}
        scaleX={angleCutRectScaleX}
        rotation={angleCutRectRotation}
      />
      <Text
        x={angleCutTextX}
        y={angleCutTextY}
        text={`${Math.round(currentAngleCutHypotenuse)}`}
        fontSize={12}
        fill='#3592C8'
        align='center'
        width={200}
        offsetX={100}
        offsetY={angleCutTextOffsetY}
        rotation={angleCutRectRotation}
      />
    </>
  )
}

export default AngleCutRect
