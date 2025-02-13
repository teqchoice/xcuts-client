import React, { useState } from 'react'
import { Stage, Layer, Rect, Line, Text, Circle, Arrow } from 'react-konva'
import FaceBox from './FaceBox'
import Image from 'next/image'
import GrainBox from './GrainBox'
import { useMachiningStore } from '../store/machiningOptionsStore'
import HorizontalLine from './HorizontalLine'
import VerticalLine from './VerticalLine'
import DirectionTile from './DirectionTile'
import AngleCutHorizontalLine from './AngleCutHorizontalLine'
import useCuttingListStore from '../store/cuttingListStore'

interface Dimensions {
  width: number // Represents the rectangle's width
  height: number // Represents the rectangle's height
}

const Canvas: React.FC = () => {
  const { currentMachiningOption, machiningOptions } = useMachiningStore()

  const { currentDecor } = useCuttingListStore()

  const dimensions = {
    width: currentDecor?.inputLength ?? 2000,
    height: currentDecor?.inputWidth ?? 2000
  }

  // const [dimensions, setDimensions] = useState<Dimensions>({
  //   width: 2000, // The width of the rectangle
  //   height: 2000 // The height of the rectangle
  // })

  const isAngledCut = currentMachiningOption?.type === 'angled-cut'

  const angles = isAngledCut ? currentMachiningOption?.options.angleOn.split('-') : []

  const stageWidth = 800
  const stageHeight = 800

  // Scale factor to fit the rectangle within the stage
  const scaleFactor = Math.min(stageWidth / dimensions.width, stageHeight / dimensions.height) * 0.4

  const scale = (number: number = 0) => scaleFactor * number

  // Scaled width and height
  const scaledWidth = scale(dimensions.width)
  const scaledHeight = scale(dimensions.height)

  // Rectangle position
  const rectX = (stageWidth - scaledWidth) / 2
  const rectY = (stageHeight - scaledHeight) / 2

  const currentAngleCutX = isAngledCut ? currentMachiningOption.options.from.x : 0

  const currentAngleCutY = isAngledCut ? currentMachiningOption.options.from.y : 0

  const currentAngleCutHypotenuse = isAngledCut
    ? Math.sqrt(currentAngleCutX * currentAngleCutX + currentAngleCutY * currentAngleCutY)
    : 0

  const currentAngleCutDegree = isAngledCut
    ? Math.asin(currentAngleCutX / currentAngleCutHypotenuse) * (180 / Math.PI)
    : 0

  const isL1W1 = angles?.includes('L1') && angles?.includes('W1')

  const isL1W2 = angles?.includes('L1') && angles?.includes('W2')

  const isL2W1 = angles?.includes('L2') && angles?.includes('W1')

  const isL2W2 = angles?.includes('L2') && angles?.includes('W2')

  const L1 = angles?.includes('L1')

  const L2 = angles?.includes('L2')

  const W1 = angles?.includes('W1')

  const W2 = angles?.includes('W2')

  const isFront = currentMachiningOption?.view === 'front'

  const isBack = currentMachiningOption?.view === 'back'

  const angleCutMachiningOptions = machiningOptions?.filter(option => option.type === 'angled-cut') ?? []

  const L1W1AngleCut = angleCutMachiningOptions?.find(option => option.options.angleOn === 'L1-W1')

  const L1W2AngleCut = angleCutMachiningOptions?.find(option => option.options.angleOn === 'L1-W2')

  const L2W1AngleCut = angleCutMachiningOptions?.find(option => option.options.angleOn === 'L2-W1')

  const L2W2AngleCut = angleCutMachiningOptions?.find(option => option.options.angleOn === 'L2-W2')

  // main line

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

  // const lineScaleX = isL1W1 || isL2W1 || !angles.length ? 1 : -1

  // const lineScaleY = isAngledCut ? (isL1W1 || isL1W2 || !angles.length ? (isFront ? 1 : -1) : isFront ? -1 : 1) : 1

  // const lineX = isAngledCut ? (isL1W2 || isL2W2 ? rectX + scaledWidth : rectX) : rectX

  const lineX = rectX

  // const lineY = isAngledCut
  //   ? isFront
  //     ? isL2W1 || isL2W2
  //       ? rectY + scaledHeight
  //       : rectY
  //     : isL1W2 || isL1W1
  //     ? rectY + scaledHeight
  //     : rectY
  //   : rectY

  const lineY = rectY

  // angle cut rect

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
        ? rectY + scaledHeight - scale(currentAngleCutY) / 2
        : rectY + scale(currentAngleCutY) / 2
      : isL1W2 || isL1W1
      ? rectY + scaledHeight - scale(currentAngleCutY) / 2
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

  // top line

  const topHorizontalLinePoints = [
    isFront && L1W1AngleCut
      ? rectX + scale(L1W1AngleCut?.options.from.x)
      : isBack && L2W1AngleCut
      ? rectX + scale(L2W1AngleCut?.options.from.x)
      : rectX,
    rectY - 90,
    isFront && L1W2AngleCut
      ? rectX + scaledWidth - scale(L1W2AngleCut?.options?.from?.x)
      : isBack && L2W2AngleCut
      ? rectX + scaledWidth - scale(L2W2AngleCut?.options?.from?.x)
      : rectX + scaledWidth,
    rectY - 90
  ]

  const topHorizontalLineLinesCoordinates = {
    right: {
      x:
        isFront && L1W2AngleCut
          ? rectX + scaledWidth - scale(L1W2AngleCut?.options.from.x)
          : isBack && L2W2AngleCut
          ? rectX + scaledWidth - scale(L2W2AngleCut?.options.from.x)
          : rectX + scaledWidth,
      y: rectY - 95
    },
    left: {
      x:
        isFront && L1W1AngleCut
          ? rectX + scale(L1W1AngleCut?.options.from.x)
          : isBack && L2W1AngleCut
          ? rectX + scale(L2W1AngleCut?.options.from.x)
          : rectX,
      y: rectY - 95
    }
  }

  const topHorizontalLineTextBgX =
    rectX +
    scaledWidth / 2 -
    35 +
    (isFront && L1W1AngleCut
      ? scale(L1W1AngleCut?.options.from.x) / 2 - (L1W2AngleCut ? scale(L1W2AngleCut.options.from.x) / 2 : 0)
      : isBack && L2W1AngleCut
      ? scale(L2W1AngleCut?.options.from.x) / 2 - (L2W2AngleCut ? scale(L2W2AngleCut.options.from.x) / 2 : 0)
      : 0)

  const topHorizontalLineTextX =
    rectX +
    scaledWidth / 2 -
    35 +
    (isFront && L1W1AngleCut
      ? scale(L1W1AngleCut?.options.from.x) / 2 - (L1W2AngleCut ? scale(L1W2AngleCut.options.from.x) / 2 : 0)
      : isBack && L2W1AngleCut
      ? scale(L2W1AngleCut?.options.from.x) / 2 - (L2W2AngleCut ? scale(L2W2AngleCut.options.from.x) / 2 : 0)
      : 0)

  const topHorizontalLineText = `${
    dimensions.width -
    (isFront && L1W1AngleCut
      ? L1W1AngleCut?.options.from.x + (L1W2AngleCut ? L1W2AngleCut.options.from.x : 0)
      : isBack && L2W1AngleCut
      ? L2W1AngleCut?.options.from.x + (L2W2AngleCut ? L2W2AngleCut.options.from.x : 0)
      : 0)
  } mm`

  // bottom line

  const bottomHorizontalLinePoints = [
    isFront && L2W1AngleCut
      ? rectX + scale(L2W1AngleCut?.options.from.x)
      : isBack && L1W1AngleCut
      ? rectX + scale(L1W1AngleCut?.options.from.x)
      : rectX,
    rectY + scaledHeight + 90,
    isFront && L2W2AngleCut
      ? rectX + scaledWidth - scale(L2W2AngleCut?.options.from.x)
      : isBack && L1W2AngleCut
      ? rectX + scaledWidth - scale(L1W2AngleCut?.options.from.x)
      : rectX + scaledWidth,
    rectY + scaledHeight + 90
  ]

  const bottomHorizontalLineLinesCoordinates = {
    right: {
      x:
        isFront && L2W2AngleCut
          ? rectX + scaledWidth - scale(L2W2AngleCut?.options.from.x)
          : isBack && L1W2AngleCut
          ? rectX + scaledWidth - scale(L1W2AngleCut?.options.from.x)
          : rectX + scaledWidth,
      y: rectY + scaledHeight + 85
    },
    left: {
      x:
        isFront && L2W1AngleCut
          ? rectX + scale(L2W1AngleCut?.options.from.x)
          : isBack && L1W1AngleCut
          ? rectX + scale(L1W1AngleCut?.options.from.x)
          : rectX,
      y: rectY + scaledHeight + 85
    }
  }

  const bottomHorizontalLineTextBgX =
    rectX +
    scaledWidth / 2 -
    35 +
    (isFront && L2W1AngleCut
      ? scale(L2W1AngleCut?.options.from.x) / 2 - (L2W2AngleCut ? scale(L2W2AngleCut.options.from.x) / 2 : 0)
      : isBack && L1W1AngleCut
      ? scale(L1W1AngleCut?.options.from.x) / 2 - (L1W2AngleCut ? scale(L1W2AngleCut.options.from.x) / 2 : 0)
      : 0)

  const bottomHorizontalLineTextX =
    rectX +
    scaledWidth / 2 -
    35 +
    (isFront && L2W1AngleCut
      ? scale(L2W1AngleCut?.options.from.x) / 2 - (L2W2AngleCut ? scale(L2W2AngleCut.options.from.x) / 2 : 0)
      : isBack && L1W1AngleCut
      ? scale(L1W1AngleCut?.options.from.x) / 2 - (L1W2AngleCut ? scale(L1W2AngleCut.options.from.x) / 2 : 0)
      : 0)

  const bottomHorizontalLineText = `${
    dimensions.width -
    (isFront && L2W1AngleCut
      ? L2W1AngleCut?.options.from.x + (L2W2AngleCut ? L2W2AngleCut.options.from.x : 0)
      : isBack && L1W1AngleCut
      ? L1W1AngleCut?.options.from.x + (L1W2AngleCut ? L1W2AngleCut.options.from.x : 0)
      : 0)
  } mm`

  // right line

  const rightVerticalLinePoints = [
    rectX + scaledWidth + 90,
    rectY + (isAngledCut && ((isFront && isL1W2) || (isBack && isL2W2)) ? scale(currentAngleCutY) : 0),
    rectX + scaledWidth + 90,
    rectY + scaledHeight - (isAngledCut && ((isFront && isL2W2) || (isBack && isL1W2)) ? scale(currentAngleCutY) : 0)
  ]

  const rightVerticalLineCoordinates = {
    top: {
      x: rectX + scaledWidth + 90,
      y:
        rectY +
        scaledHeight -
        (isAngledCut && ((isFront && isL2W2) || (isBack && isL1W2)) ? scale(currentAngleCutY) : 0)
    },
    bottom: {
      x: rectX + scaledWidth + 90,
      y: rectY + (isAngledCut && ((isFront && isL1W2) || (isBack && isL2W2)) ? scale(currentAngleCutY) : 0)
    }
  }

  const rightVerticalLineTextBgY =
    rectY +
    scaledHeight / 2 -
    35 +
    (isAngledCut
      ? (isFront && isL1W2) || (isBack && isL2W2)
        ? scale(currentAngleCutY) / 2
        : (isFront && isL2W2) || (isBack && isL1W2)
        ? -scale(currentAngleCutY) / 2
        : 0
      : 0)

  const rightVerticalLineTextY =
    rectY +
    scaledHeight / 2 -
    25 +
    (isAngledCut
      ? (isFront && isL1W2) || (isBack && isL2W2)
        ? scale(currentAngleCutY) / 2
        : (isFront && isL2W2) || (isBack && isL1W2)
        ? -scale(currentAngleCutY) / 2
        : 0
      : 0)

  const rightVerticalLineText = `${dimensions.height - (isAngledCut && W2 && (L1 || L2) ? currentAngleCutY : 0)} mm`

  // left line

  const leftVerticalLinePoints = [
    rectX - 90,
    rectY + (isAngledCut && ((isFront && isL1W1) || (isBack && isL2W1)) ? scale(currentAngleCutY) : 0),
    rectX - 90,
    rectY + scaledHeight - (isAngledCut && ((isFront && isL2W1) || (isBack && isL1W1)) ? scale(currentAngleCutY) : 0)
  ]

  const leftVerticalLineCoordinates = {
    top: {
      x: rectX - 90,
      y:
        rectY +
        scaledHeight -
        (isAngledCut && ((isFront && isL2W1) || (isBack && isL1W1)) ? scale(currentAngleCutY) : 0)
    },
    bottom: {
      x: rectX - 90,
      y: rectY + (isAngledCut && ((isFront && isL1W1) || (isBack && isL2W1)) ? scale(currentAngleCutY) : 0)
    }
  }
  const leftVerticalLineTextBgY =
    rectY +
    scaledHeight / 2 -
    35 +
    (isAngledCut
      ? (isFront && isL1W1) || (isBack && isL2W1)
        ? scale(currentAngleCutY) / 2
        : (isFront && isL2W1) || (isBack && isL1W1)
        ? -scale(currentAngleCutY) / 2
        : 0
      : 0)

  const leftVerticalLineTextY =
    rectY +
    scaledHeight / 2 -
    25 +
    (isAngledCut
      ? (isFront && isL1W1) || (isBack && isL2W1)
        ? scale(currentAngleCutY) / 2
        : (isFront && isL2W1) || (isBack && isL1W1)
        ? -scale(currentAngleCutY) / 2
        : 0
      : 0)

  const leftVerticalLineText = `${dimensions.height - (isAngledCut && W1 && (L1 || L2) ? currentAngleCutY : 0)} mm`

  return (
    <div className=''>
      <Stage width={stageWidth} height={stageHeight}>
        <Layer>
          {/* main shape */}
          <Line
            x={lineX}
            y={lineY}
            points={points}
            fill='#ffffff'
            stroke='#7D848C'
            strokeWidth={1}
            closed={true}
            // scaleX={lineScaleX}
            // scaleY={lineScaleY}
          />

          {isAngledCut && (
            <>
              <Rect
                x={angleCutRectX}
                y={angleCutRectY}
                height={scale(120)}
                width={scale(currentAngleCutHypotenuse)}
                stroke='blue'
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
                fill='blue'
                align='center'
                width={scale(Math.round(currentAngleCutHypotenuse))}
                offsetX={scale(Math.round(currentAngleCutHypotenuse)) / 2}
                offsetY={angleCutTextOffsetY}
                rotation={angleCutRectRotation}
              />
            </>
          )}

          {/* angle cut top line */}

          {/* {isAngledCut && (
            <AngleCutHorizontalLine
              linePoints={angleCutTopHorizontalLinePoints}
              lines={{
                right: {
                  x: 0,
                  y: 0
                },
                left: {
                  x: rectX,
                  y: rectY - 95
                }
              }}
              textBgX={rectX - 35 + (scaleFactor * currentAngleCutX) / 2}
              textBgY={rectY - 95}
              textX={rectX - 35 + (scaleFactor * currentAngleCutX) / 2}
              textY={rectY - 95}
              text={`${currentAngleCutX} mm`}
              width={scaleFactor * currentAngleCutX}
            />
          )} */}

          {/* top line */}
          {isAngledCut && (
            <HorizontalLine
              linePoints={topHorizontalLinePoints}
              lines={topHorizontalLineLinesCoordinates}
              textBgX={topHorizontalLineTextBgX}
              textBgY={rectY - 95}
              textX={topHorizontalLineTextX}
              textY={rectY - 95}
              text={topHorizontalLineText}
            />
          )}

          {/* bottom line */}
          <HorizontalLine
            linePoints={bottomHorizontalLinePoints}
            lines={bottomHorizontalLineLinesCoordinates}
            textBgX={bottomHorizontalLineTextBgX}
            textBgY={rectY + scaledHeight + 85}
            textX={bottomHorizontalLineTextX}
            textY={rectY + scaledHeight + 85}
            text={bottomHorizontalLineText}
          />

          {/* right line */}
          <VerticalLine
            linePoints={rightVerticalLinePoints}
            lines={rightVerticalLineCoordinates}
            text={rightVerticalLineText}
            textBgX={rectX + scaledWidth + 85}
            textBgY={rightVerticalLineTextBgY}
            textX={rectX + scaledWidth + 95}
            textY={rightVerticalLineTextY}
          />

          {/* right line */}
          {isAngledCut && (
            <VerticalLine
              linePoints={leftVerticalLinePoints}
              lines={leftVerticalLineCoordinates}
              text={leftVerticalLineText}
              textBgX={rectX - 95}
              textBgY={leftVerticalLineTextBgY}
              textX={rectX - 85}
              textY={leftVerticalLineTextY}
            />
          )}

          {/* Label L1 */}
          <DirectionTile
            circleX={rectX + scaledWidth / 2}
            circleY={rectY - 60}
            textX={rectX + scaledWidth / 2 - 7.5}
            textY={rectY - 65}
            text={isFront ? 'L1' : 'L2'}
            isActive={isFront ? L1 : L2}
          />

          {/* Label W1 */}
          <DirectionTile
            circleX={rectX - 60}
            circleY={rectY + scaledHeight / 2}
            textX={rectX - 68.5}
            textY={rectY + scaledHeight / 2 - 5}
            text='W1'
            isActive={W1}
          />

          {/* Label W2 */}
          <DirectionTile
            circleX={rectX + scaledWidth + 60}
            circleY={rectY + scaledHeight / 2}
            textX={rectX + scaledWidth + 51.5}
            textY={rectY + scaledHeight / 2 - 5}
            text='W2'
            isActive={W2}
          />

          {/* Label L2 */}
          <DirectionTile
            circleX={rectX + scaledWidth / 2}
            circleY={rectY + scaledHeight + 60}
            textX={rectX + scaledWidth / 2 - 7.5}
            textY={rectY + scaledHeight + 55}
            text={isFront ? 'L2' : 'L1'}
            isActive={isFront ? L2 : L1}
          />
        </Layer>
      </Stage>
      <GrainBox />
      <FaceBox />
    </div>
  )
}

export default Canvas
