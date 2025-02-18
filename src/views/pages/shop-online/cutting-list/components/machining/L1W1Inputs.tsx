import { Input } from '@mantine/core'
import { Vector2d } from 'konva/lib/types'
import React, { memo, useCallback } from 'react'
import { Line } from 'react-konva'
import { Html } from 'react-konva-utils'
import { useCurrentMachiningOptionStore } from '../store/machiningOptionsStore'

type L1W1InputsProps = {
  rectX: number
  rectY: number
  scaledHeight: number
  dimensions: {
    height: number
    width: number
  }
  scaleUp: (value: number) => number
  round: (value: number) => number
  scale: (value: number) => number
}

const L1W1Inputs = (props: L1W1InputsProps) => {
  const { dimensions, rectX, rectY, scaledHeight, scaleUp, round, scale } = props

  const { currentMachiningOption, updateCurrentMachiningOption } = useCurrentMachiningOptionStore()

  const isAngledCut = currentMachiningOption?.type === 'angled-cut'

  const currentAngleCutY = isAngledCut ? currentMachiningOption.options.from.y : 0

  const dragBoundFunc = useCallback(
    (pos: Vector2d) => {
      const newY = Math.max(rectY - 10, Math.min(pos.y, rectY + scaledHeight - 10))

      const distanceFromMainLineTop = newY - rectY + 10

      const scaledDistanceFromTop = scaleUp(distanceFromMainLineTop)

      if (isAngledCut) {
        updateCurrentMachiningOption({
          ...currentMachiningOption,
          options: {
            ...currentMachiningOption.options,
            from: {
              ...currentMachiningOption.options.from,
              y: round(scaledDistanceFromTop)
            }
          }
        })
      }

      return {
        x: rectX - 22,
        y: newY
      }
    },
    [scaledHeight, updateCurrentMachiningOption, currentMachiningOption]
  )

  return (
    <>
      <Html groupProps={{ x: rectX - 65, y: rectY + scale(currentAngleCutY) - 10 }}>
        <Input
          type='text'
          w={40}
          h={20}
          styles={{
            input: {
              padding: '2px',
              minHeight: '20px',
              height: '20px',
              borderRadius: '0px',
              textAlign: 'center'
            }
          }}
          value={dimensions.height - currentAngleCutY}
        />
      </Html>
      <Line
        x={rectX - 22}
        y={rectY + scale(currentAngleCutY) - 10}
        points={[15, 10, 0, 20, 0, 0]}
        fill='#0276BA'
        closed
        draggable
        dragBoundFunc={dragBoundFunc}
      />
    </>
  )
}

export default memo(L1W1Inputs)
