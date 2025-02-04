import React, { useState } from 'react'
import { Stage, Layer, Rect, Line, Text, Circle, Arrow } from 'react-konva'
import FaceBox from './FaceBox'
import Image from 'next/image'
import GrainBox from './GrainBox'
import { useMachiningStore } from '../store/machiningOptionsStore'
import HorizontalLine from './HorizontalLine'
import VerticalLine from './VerticalLine'
import DirectionTile from './DirectionTile'

interface Dimensions {
  width: number // Represents the rectangle's width
  height: number // Represents the rectangle's height
}

const Canvas: React.FC = () => {
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: 2000, // The width of the rectangle
    height: 2000 // The height of the rectangle
  })

  const { currentMachiningOption } = useMachiningStore()

  const isAngledCut = currentMachiningOption?.type === 'angled-cut'

  const angles = isAngledCut ? currentMachiningOption?.options.angleOn.split('-') : []

  const stageWidth = 780
  const stageHeight = 800

  // Scale factor to fit the rectangle within the stage
  const scaleFactor = Math.min(stageWidth / dimensions.width, stageHeight / dimensions.height) * 0.475

  // Scaled width and height
  const scaledWidth = dimensions.width * scaleFactor
  const scaledHeight = dimensions.height * scaleFactor

  // Rectangle position
  const rectX = (stageWidth - scaledWidth) / 2
  const rectY = (stageHeight - scaledHeight) / 2

  return (
    <div className=''>
      <Stage width={stageWidth} height={stageHeight}>
        <Layer>
          {/* main shape */}
          <Line
            x={rectX}
            y={rectY}
            points={[0, 0, scaledWidth, 0, scaledWidth, scaledHeight, 0, scaledHeight]} // Define your custom points
            fill='#ffffff'
            stroke='#7D848C'
            strokeWidth={1}
            closed={true} // Ensures the shape is closed
          />
          {/* bottom line */}
          <HorizontalLine
            linePoints={[rectX, rectY + scaledHeight + 90, rectX + scaledWidth, rectY + scaledHeight + 90]}
            lines={{
              right: {
                x: rectX + scaledWidth / 2 - 35,
                y: rectY + scaledHeight + 85
              },
              left: {
                x: rectX,
                y: rectY + scaledHeight + 85
              }
            }}
            textBgX={rectX + scaledWidth}
            textBgY={rectY + scaledHeight + 85}
            textX={rectX + scaledWidth / 2 - 35}
            textY={rectY + scaledHeight + 85}
            text={`${dimensions.width} mm`}
          />
          {/* right line */}
          <VerticalLine
            linePoints={[rectX + scaledWidth + 90, rectY, rectX + scaledWidth + 90, rectY + scaledHeight]}
            lines={{
              top: {
                x: rectX + scaledWidth + 85,
                y: rectY + scaledHeight / 2 - 35
              },
              bottom: {
                x: rectX + scaledWidth + 90,
                y: rectY
              }
            }}
            text={`${dimensions.height} mm`}
            textBgX={rectX + scaledWidth + 90}
            textBgY={rectY + scaledHeight}
            textX={rectX + scaledWidth + 95}
            textY={rectY + scaledHeight / 2 - 25}
          />

          {/* Label L1 */}
          <DirectionTile
            circleX={rectX + scaledWidth / 2}
            circleY={rectY - 60}
            textX={rectX + scaledWidth / 2 - 7.5}
            textY={rectY - 65}
            text='L1'
            isActive={angles?.includes('L1')}
          />

          {/* Label W1 */}
          <DirectionTile
            circleX={rectX - 60}
            circleY={rectY + scaledHeight / 2}
            textX={rectX - 68.5}
            textY={rectY + scaledHeight / 2 - 5}
            text='W1'
            isActive={angles?.includes('W1')}
          />

          {/* Label W2 */}
          <DirectionTile
            circleX={rectX + scaledWidth + 60}
            circleY={rectY + scaledHeight / 2}
            textX={rectX + scaledWidth + 51.5}
            textY={rectY + scaledHeight / 2 - 5}
            text='W2'
            isActive={angles?.includes('W2')}
          />

          {/* Label L2 */}
          <DirectionTile
            circleX={rectX + scaledWidth / 2}
            circleY={rectY + scaledHeight + 60}
            textX={rectX + scaledWidth / 2 - 7.5}
            textY={rectY + scaledHeight + 55}
            text='L2'
            isActive={angles?.includes('L2')}
          />
        </Layer>
      </Stage>
      <GrainBox />
      <FaceBox />
    </div>
  )
}

export default Canvas
