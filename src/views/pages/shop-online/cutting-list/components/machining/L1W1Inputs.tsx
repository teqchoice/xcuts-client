import { Input } from '@mantine/core'
import { Vector2d } from 'konva/lib/types'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Arrow, Line } from 'react-konva'
import { Html } from 'react-konva-utils'
import { useVirtualFromStore } from '../store/useVirtualFromStore'
import { useMachiningStore } from '../store/machiningOptionsStore'
import { useAngleCutMachiningOptions } from '../../hooks/useAngleCutMachiningOptions'
import { useCurrentMachiningOption } from '../../hooks/useCurrentMachiningOption'
import Konva from 'konva'
import { Spring, animated, useSpring } from '@react-spring/konva'

const inputStyles = {
  input: {
    padding: '2px',
    minHeight: '20px',
    height: '20px',
    borderRadius: '0px',
    textAlign: 'center' as 'center'
  }
}

type L1W1InputsProps = {
  rectX: number
  rectY: number
  scaledHeight: number
  scaledWidth: number
  dimensions: {
    height: number
    width: number
  }
  scaleUp: (value: number) => number
  round: (value: number) => number
  scale: (value: number) => number
}

const L1W1Inputs = (props: L1W1InputsProps) => {
  const [yAnimationFlag, setYAnimationFlag] = useState(false)

  const [xAnimationFlag, setXAnimationFlag] = useState(false)

  const { dimensions, rectX, rectY, scaledHeight, scaleUp, round, scale, scaledWidth } = props

  const { currentMachiningOption, updateCurrentMachiningOption } = useMachiningStore()

  const { isL1W1, isL1W2, isL2W1, isL2W2 } = useAngleCutMachiningOptions()

  const { isBack, isFront } = useCurrentMachiningOption()

  const { virtualFrom, setVirtualFrom } = useVirtualFromStore()

  const isAngledCut = currentMachiningOption?.type === 'angled-cut'

  const currentAngleCutY = isAngledCut ? currentMachiningOption.options.from.y : 0

  const currentAngleCutX = isAngledCut ? currentMachiningOption.options.from.x : 0

  const yDragBoundFunc = useCallback(
    (pos: Vector2d) => {
      const newY = Math.max(rectY - 10, Math.min(pos.y, rectY + scaledHeight - 10))

      const distanceFromMainLineTop = newY - rectY + 10

      const scaledDistanceFromTop = scaleUp(distanceFromMainLineTop)

      if (isAngledCut) {
        const yValue =
          (isFront && (isL1W1 || isL1W2)) || (isBack && (isL2W1 || isL2W2))
            ? round(scaledDistanceFromTop)
            : round(dimensions.height - scaledDistanceFromTop)

        updateCurrentMachiningOption({
          ...currentMachiningOption,
          options: {
            ...currentMachiningOption.options,
            from: {
              ...currentMachiningOption.options.from,
              y: yValue
            }
          }
        })
      }

      const xPosition =
        (isFront && (isL1W1 || isL2W1)) || (isBack && (isL1W1 || isL2W1)) ? rectX - 22 : rectX + scaledWidth + 22

      return {
        x: xPosition,
        y: newY
      }
    },
    [scaledHeight, updateCurrentMachiningOption, currentMachiningOption]
  )

  const xDragBoundFunc = useCallback(
    (pos: Vector2d) => {
      const newX = Math.max(rectX - 10, Math.min(pos.x, rectX + scaledWidth - 10))

      const distanceFromMainLineTop = newX - rectX + 10

      const scaledDistanceFromTop = scaleUp(distanceFromMainLineTop)

      if (isAngledCut) {
        const xValue =
          (isFront && (isL1W1 || isL2W1)) || (isBack && (isL1W1 || isL2W1))
            ? round(scaledDistanceFromTop)
            : round(dimensions.width - scaledDistanceFromTop)

        updateCurrentMachiningOption({
          ...currentMachiningOption,
          options: {
            ...currentMachiningOption.options,
            from: {
              ...currentMachiningOption.options.from,
              x: xValue
            }
          }
        })
      }

      const yPosition =
        (isFront && (isL1W1 || isL1W2)) || (isBack && (isL2W1 || isL2W2)) ? rectY - 22 : rectY + scaledHeight + 20

      return {
        x: newX,
        y: yPosition
      }
    },
    [scaledWidth, updateCurrentMachiningOption, currentMachiningOption]
  )

  useEffect(() => {
    if (currentMachiningOption && isAngledCut) {
      console.log(currentMachiningOption)
      setVirtualFrom({
        x: currentMachiningOption.options.from.x,
        y: currentMachiningOption.options.from.y
      })
    }
  }, [currentMachiningOption])

  const yHtmlX =
    (isFront && (isL1W1 || isL2W1)) || (isBack && (isL1W1 || isL2W1)) ? rectX - 65 : rectX + scaledWidth + 25

  const yHtmlY =
    (isFront && (isL1W1 || isL1W2)) || (isBack && (isL2W1 || isL2W2))
      ? rectY + scale(currentAngleCutY ?? 0) - 10
      : rectY + scaledHeight - scale(currentAngleCutY ?? 0) - 10

  const yLineX =
    (isFront && (isL1W1 || isL2W1)) || (isBack && (isL1W1 || isL2W1)) ? rectX - 22 : rectX + scaledWidth + 22

  const yLineY =
    (isFront && (isL1W1 || isL1W2)) || (isBack && (isL2W1 || isL2W2))
      ? rectY + scale(currentAngleCutY ?? 0) - 10
      : rectY + scaledHeight - scale(currentAngleCutY ?? 0) - 10

  const yLineScaleX = (isFront && (isL1W2 || isL2W2)) || (isBack && (isL1W2 || isL2W2)) ? -1 : 1

  const xHtmlX =
    (isFront && (isL1W1 || isL2W1)) || (isBack && (isL1W1 || isL2W1))
      ? rectX + scale(currentAngleCutX ?? 0) - 20
      : rectX + scaledWidth - scale(currentAngleCutX ?? 0) - 20

  const xHtmlY =
    (isFront && (isL1W1 || isL1W2)) || (isBack && (isL2W1 || isL2W2)) ? rectY - 45 : rectY + scaledHeight + 22

  const xLineX =
    (isFront && (isL1W1 || isL2W1)) || (isBack && (isL1W1 || isL2W1))
      ? rectX + scale(currentAngleCutX ?? 0) - 10
      : rectX + scaledWidth - scale(currentAngleCutX ?? 0) - 10

  const xLineY =
    (isFront && (isL1W1 || isL1W2)) || (isBack && (isL2W1 || isL2W2)) ? rectY - 22 : rectY + scaledHeight + 20

  const xLineScaleX = (isFront && (isL1W1 || isL1W2)) || (isBack && (isL2W1 || isL2W2)) ? 1 : -1

  const handleYInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setYAnimationFlag(false)
    if (isAngledCut) {
      updateCurrentMachiningOption({
        ...currentMachiningOption,
        options: {
          ...currentMachiningOption.options,
          from: {
            ...currentMachiningOption.options.from,
            y: (dimensions.height ?? 0) - +event.currentTarget.value
          }
        }
      })
    }
  }

  const handleYKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (isAngledCut) {
        updateCurrentMachiningOption({
          ...currentMachiningOption,
          options: {
            ...currentMachiningOption.options,
            from: {
              ...currentMachiningOption.options.from,
              y: (dimensions.height ?? 0) - +event.currentTarget.value
            }
          }
        })
      }
    }
  }

  const handleXInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setXAnimationFlag(false)
    if (isAngledCut) {
      updateCurrentMachiningOption({
        ...currentMachiningOption,
        options: {
          ...currentMachiningOption.options,
          from: {
            ...currentMachiningOption.options.from,
            x: (dimensions.width ?? 0) - +event.currentTarget.value
          }
        }
      })
    }
  }

  const handleXKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (isAngledCut) {
        updateCurrentMachiningOption({
          ...currentMachiningOption,
          options: {
            ...currentMachiningOption.options,
            from: {
              ...currentMachiningOption.options.from,
              x: (dimensions.width ?? 0) - +event.currentTarget.value
            }
          }
        })
      }
    }
  }

  const YLineAnimation = useSpring({
    from: {
      lineX: 0,
      shadowBlur: 0,
      lineHeight: 0,
      arrowHeight: 0,
      fill: 'transparent',
      arrowPoints: [0, 0],
      linePoints: [0, 0]
    },
    to: {
      lineX: 0,
      shadowBlur: 0,
      fill: '#D1D1D1',
      width: 1.5,
      lineHeight: yHtmlY,

      linePoints: [
        0,
        0,
        0,
        yAnimationFlag
          ? (isFront && (isL1W1 || isL1W2)) || (isBack && (isL2W1 || isL2W2))
            ? rectY + scaledHeight - yHtmlY
            : rectY - yHtmlY
          : 0
      ],
      arrowHeight: yAnimationFlag
        ? (isFront && (isL1W1 || isL1W2)) || (isBack && (isL2W1 || isL2W2))
          ? rectY + scaledHeight - 8
          : rectY + 8
        : yHtmlY,
      arrowPoints: yAnimationFlag
        ? (isFront && (isL1W1 || isL1W2)) || (isBack && (isL2W1 || isL2W2))
          ? [0, 0, 8, 8, 16, 0]
          : [0, 0, 8, -8, 16, 0]
        : [0, 0]
    }
  })

  const XLineAnimation = useSpring({
    from: {
      lineX: 0,
      shadowBlur: 0,
      lineHeight: 0,
      arrowHeight: 0,
      fill: 'transparent',
      arrowPoints: [0, 0],
      linePoints: [0, 0]
    },
    to: {
      lineX: 0,
      shadowBlur: 0,
      fill: '#D1D1D1',
      width: 1.5,
      lineHeight: xHtmlX,

      linePoints: [
        0,
        (isFront && (isL1W1 || isL1W2)) || (isBack && (isL2W1 || isL2W2))
          ? 0
          : (isFront && (isL2W1 || isL2W2)) || (isBack && (isL1W1 || isL1W2))
          ? scaledHeight + 67
          : 0,

        xAnimationFlag
          ? (isFront && (isL1W1 || isL2W1)) || (isBack && (isL1W1 || isL2W1))
            ? rectX + scaledWidth - xHtmlX
            : rectX - xHtmlX
          : 0,
        (isFront && (isL1W1 || isL1W2)) || (isBack && (isL2W1 || isL2W2))
          ? 0
          : (isFront && (isL2W1 || isL2W2)) || (isBack && (isL1W1 || isL1W2))
          ? scaledHeight + 67
          : 0
      ],
      arrowHeight: xAnimationFlag
        ? (isFront && (isL1W1 || isL2W1)) || (isBack && (isL1W1 || isL2W1))
          ? rectX + scaledWidth
          : rectX
        : xHtmlX,
      arrowPoints: xAnimationFlag
        ? (isFront && (isL1W1 || isL2W1)) || (isBack && (isL1W1 || isL2W1))
          ? [-8, 8, 0, 0, -8, -8]
          : [8, -8, 0, 0, 8, 8]
        : [0, 0]
    }
  })

  if (!currentMachiningOption) return null

  return (
    <>
      {/* y line */}
      <Html groupProps={{ x: yHtmlX, y: yHtmlY }}>
        <Input
          onClick={() => setYAnimationFlag(true)}
          type='text'
          w={40}
          h={20}
          styles={inputStyles}
          value={dimensions.height - (virtualFrom?.y ?? 0)}
          onChange={event =>
            setVirtualFrom({ ...virtualFrom, y: (dimensions.height ?? 0) - +event.currentTarget.value })
          }
          onKeyUp={handleYKeyUp}
          onBlur={handleYInputBlur}
        />
      </Html>

      <Line
        x={yLineX}
        y={yLineY}
        points={[15, 10, 0, 20, 0, 0]}
        fill='#0276BA'
        closed
        draggable
        dragBoundFunc={yDragBoundFunc}
        scaleX={yLineScaleX}
      />
      {/* @ts-ignore */}
      <animated.Line
        x={yHtmlX + 21}
        points={YLineAnimation.linePoints}
        y={YLineAnimation.lineHeight}
        stroke='#9C989E'
        strokeWidth={yAnimationFlag ? 1 : 0}
      />
      {/* @ts-ignore */}
      <animated.Line
        x={yHtmlX + 13}
        y={YLineAnimation.arrowHeight}
        points={YLineAnimation.arrowPoints}
        stroke='#9C989E'
        strokeWidth={yAnimationFlag ? 1 : 0}
      />
      {/* x line */}
      <Html groupProps={{ x: xHtmlX, y: xHtmlY }}>
        <Input
          onClick={() => setXAnimationFlag(true)}
          type='text'
          w={40}
          h={20}
          styles={inputStyles}
          value={dimensions.width - (virtualFrom?.x ?? 0)}
          onChange={event =>
            setVirtualFrom({ ...virtualFrom, x: (dimensions.width ?? 0) - +event.currentTarget.value })
          }
          onKeyUp={handleXKeyUp}
          onBlur={handleXInputBlur}
        />
      </Html>
      {/* @ts-ignore */}
      <animated.Line
        x={XLineAnimation.lineHeight}
        points={XLineAnimation.linePoints}
        y={rectY - 35}
        stroke='#9C989E'
        strokeWidth={xAnimationFlag ? 1 : 0}
      />
      {/* @ts-ignore */}
      <animated.Line
        x={XLineAnimation.arrowHeight}
        y={
          (isFront && (isL1W1 || isL1W2)) || (isBack && (isL2W1 || isL2W2))
            ? rectY - 35
            : (isFront && (isL2W1 || isL2W2)) || (isBack && (isL1W1 || isL1W2))
            ? rectY + scaledHeight + 32
            : 0
        }
        points={XLineAnimation.arrowPoints}
        stroke='#9C989E'
        strokeWidth={xAnimationFlag ? 1 : 0}
      />

      <Line
        x={xLineX}
        y={xLineY}
        points={[0, 0, 20, 0, 10, 15]}
        fill='#0276BA'
        closed
        draggable
        dragBoundFunc={xDragBoundFunc}
        scaleY={xLineScaleX}
      />
    </>
  )
}

export default L1W1Inputs
