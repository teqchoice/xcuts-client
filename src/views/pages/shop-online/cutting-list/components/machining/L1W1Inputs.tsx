import { Input } from '@mantine/core'
import { Vector2d } from 'konva/lib/types'
import React, { useCallback, useEffect } from 'react'
import { Line } from 'react-konva'
import { Html } from 'react-konva-utils'
import { useVirtualFromStore } from '../store/useVirtualFromStore'
import { useMachiningStore } from '../store/machiningOptionsStore'
import { useAngleCutMachiningOptions } from '../../hooks/useAngleCutMachiningOptions'
import { useCurrentMachiningOption } from '../../hooks/useCurrentMachiningOption'
import Konva from 'konva'

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

  // const [isInputFocused, setIsInputFocused] = useState(false)
  // const connectingLineRef = useRef<Konva.Line>(null)

  // // Add this effect for the animation
  // useEffect(() => {
  //   if (!connectingLineRef.current) return

  //   let animation: Konva.Animation | undefined

  //   if (isInputFocused) {
  //     animation = new Konva.Animation(frame => {
  //       if (!frame || !connectingLineRef.current) return

  //       const progress = Math.min(frame.time / 750, 1) // 500ms duration
  //       const startY = htmlY + 20 // Start from bottom of input
  //       const endY = rectY + scaledHeight // End at the main line
  //       const currentHeight = (endY - startY) * progress

  //       connectingLineRef.current.points([
  //         0,
  //         0, // start point
  //         0,
  //         currentHeight // end point
  //       ])
  //     }, connectingLineRef.current.getLayer())

  //     animation.start()
  //   } else {
  //     // Animate out
  //     animation = new Konva.Animation(frame => {
  //       if (!frame || !connectingLineRef.current) return

  //       const progress = Math.max(1 - frame.time / 500, 0) // 500ms duration
  //       const startY = htmlY + 20
  //       const endY = lineY
  //       const currentHeight = (endY - startY) * progress

  //       connectingLineRef.current.points([0, 0, 0, currentHeight])
  //     }, connectingLineRef.current.getLayer())

  //     animation.start()
  //   }

  //   return () => {
  //     if (animation) {
  //       animation.stop()
  //     }
  //   }
  // }, [isInputFocused])

  return (
    <>
      {/* y line */}
      <Html groupProps={{ x: yHtmlX, y: yHtmlY }}>
        <Input
          // onFocus={() => {
          //   if (!isInputFocused) {
          //     setIsInputFocused(true)
          //   }
          // }}
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
          value={dimensions.height - (virtualFrom?.y ?? 0)}
          onChange={event =>
            setVirtualFrom({ ...virtualFrom, y: (dimensions.height ?? 0) - +event.currentTarget.value })
          }
          onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) => {
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
          }}
          onBlur={event => {
            // setIsInputFocused(false)
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
          }}
        />
      </Html>
      {/* Add the connecting line */}
      {/* <Line
        ref={connectingLineRef}
        x={htmlX + 20} // Center of input
        y={htmlY + 20} // Bottom of input
        points={[0, 0, 0, 0]} // Initial points
        stroke='#0276BA'
        strokeWidth={1}
        lineCap='round'
        lineJoin='round'
        pointerLength={6}
        pointerWidth={6}
        pointerAtBeginning={false}
        pointerAtEnding={true}
      /> */}
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

      {/* x line */}
      <Html groupProps={{ x: xHtmlX, y: xHtmlY }}>
        <Input
          // onFocus={() => {
          //   if (!isInputFocused) {
          //     setIsInputFocused(true)
          //   }
          // }}
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
          value={dimensions.width - (virtualFrom?.x ?? 0)}
          onChange={event =>
            setVirtualFrom({ ...virtualFrom, x: (dimensions.width ?? 0) - +event.currentTarget.value })
          }
          onKeyUp={(event: React.KeyboardEvent<HTMLInputElement>) => {
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
          }}
          onBlur={event => {
            // setIsInputFocused(false)
            if (isAngledCut) {
              updateCurrentMachiningOption({
                ...currentMachiningOption,
                options: {
                  ...currentMachiningOption.options,
                  from: {
                    ...currentMachiningOption.options.from,
                    x: (dimensions.height ?? 0) - +event.currentTarget.value
                  }
                }
              })
            }
          }}
        />
      </Html>
      {/* Add the connecting line */}
      {/* <Line
        ref={connectingLineRef}
        x={htmlX + 20} // Center of input
        y={htmlY + 20} // Bottom of input
        points={[0, 0, 0, 0]} // Initial points
        stroke='#0276BA'
        strokeWidth={1}
        lineCap='round'
        lineJoin='round'
        pointerLength={6}
        pointerWidth={6}
        pointerAtBeginning={false}
        pointerAtEnding={true}
      /> */}
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
