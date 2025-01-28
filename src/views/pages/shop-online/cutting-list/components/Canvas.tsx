import React, { useState } from 'react'
import { Stage, Layer, Rect, Line, Text, Circle } from 'react-konva'

interface Dimensions {
  width: number // Represents the rectangle's width
  height: number // Represents the rectangle's height
}

const Canvas: React.FC = () => {
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: 2000, // The width of the rectangle
    height: 2000 // The height of the rectangle
  })

  const stageWidth = 800
  const stageHeight = 800

  // Scale factor to fit the rectangle within the stage
  const scaleFactor = Math.min(stageWidth / dimensions.width, stageHeight / dimensions.height) * 0.5

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
          <Line
            points={[rectX, rectY + scaledHeight + 90, rectX + scaledWidth, rectY + scaledHeight + 90]}
            stroke='#7D848C'
            strokeWidth={1}
          />
          <Rect x={rectX + scaledWidth / 2 - 35} y={rectY + scaledHeight + 85} width={70} height={10} fill='#fad2d4' />
          <Rect x={rectX} y={rectY + scaledHeight + 85} height={10} stroke='#7D848C' strokeWidth={1} />
          <Rect x={rectX + scaledWidth} y={rectY + scaledHeight + 85} height={10} stroke='#7D848C' strokeWidth={1} />
          <Text
            x={rectX + scaledWidth / 2 - 35}
            y={rectY + scaledHeight + 85}
            text={`${dimensions.width} mm`}
            width={70}
            fontSize={12}
            align='center'
            fill='#222222'
          />
          {/* right line */}
          <Line
            points={[rectX + scaledWidth + 90, rectY, rectX + scaledWidth + 90, rectY + scaledHeight]}
            stroke='#7D848C'
            strokeWidth={1}
          />
          <Rect x={rectX + scaledWidth + 85} y={rectY + scaledHeight / 2 - 35} width={10} height={70} fill='#fad2d4' />
          <Rect x={rectX + scaledWidth + 90} y={rectY} height={1} stroke='#7D848C' strokeWidth={10} />
          <Rect x={rectX + scaledWidth + 90} y={rectY + scaledHeight} height={1} stroke='#7D848C' strokeWidth={10} />
          <Text
            x={rectX + scaledWidth + 95}
            y={rectY + scaledHeight / 2 - 25}
            text={`${dimensions.height} mm`}
            fontSize={12}
            align='center'
            height={70}
            rotation={90}
            fill='#222222'
          />

          {/* Label L1 */}
          <Circle x={rectX + scaledWidth / 2} y={rectY - 60} radius={15} strokeWidth={1} stroke='#7D848C' />
          <Text x={rectX + scaledWidth / 2 - 7.5} y={rectY - 65} text='L1' fontSize={12} fill='#000' />

          {/* Label W1 */}
          <Circle x={rectX - 60} y={rectY + scaledHeight / 2} radius={15} strokeWidth={1} stroke='#7D848C' />
          <Text x={rectX - 68.5} y={rectY + scaledHeight / 2 - 5} text='W1' fontSize={12} fill='#000' />

          {/* Label W2 */}
          <Circle
            x={rectX + scaledWidth + 60}
            y={rectY + scaledHeight / 2}
            radius={15}
            strokeWidth={1}
            stroke='#7D848C'
          />
          <Text x={rectX + scaledWidth + 51.5} y={rectY + scaledHeight / 2 - 5} text='W2' fontSize={12} fill='#000' />

          {/* Label L2 */}
          <Circle
            x={rectX + scaledWidth / 2}
            y={rectY + scaledHeight + 60}
            radius={15}
            strokeWidth={1}
            stroke='#7D848C'
          />
          <Text x={rectX + scaledWidth / 2 - 7.5} y={rectY + scaledHeight + 55} text='L2' fontSize={12} fill='#000' />

          {/* Top-left square */}
          <Rect x={10} y={30} width={100} height={100} stroke='#000000' strokeWidth={1} />
          <Text x={10} y={10} text='Grain direction' fontSize={12} lineHeight={1.5} fill='#222222' />
          <Line
            x={20}
            y={20}
            points={[15, 50, 150, 0, 200, 100, 0, 100]}
            fill='#ffffff'
            stroke='#7D848C'
            strokeWidth={1}
          />
          {/* Bottom-left square */}
          <Text x={10} y={670} text='Panel shows' fontSize={12} lineHeight={1.5} fill='#222222' />
          <Rect x={10} y={690} width={100} height={100} stroke='#000000' strokeWidth={1} />
          <Text x={17.5} y={705} text='FRONT' fontSize={24} lineHeight={1.5} fill='#707070' />
          <Text x={35} y={745} text='FACE' fontSize={18} lineHeight={1.5} fill='#707070' />
        </Layer>
      </Stage>
    </div>
  )
}

export default Canvas
