import { Stage, Layer } from 'react-konva'
import FaceBox from './FaceBox'
import GrainBox from './GrainBox'
import DirectionTile from './DirectionTile'
import useCuttingListStore from '../store/cuttingListStore'
import L1W1Inputs from './L1W1Inputs'
import { useAngleCutMachiningOptions } from '../../hooks/useAngleCutMachiningOptions'
import { useCurrentMachiningOption } from '../../hooks/useCurrentMachiningOption'
import MainLine from './MainLine'
import AngleCutRect from './AngleCutRect'
import TopHorizontalLine from './TopHorizontalLine'
import BottomHorizontalLine from './BottomHorizontalLine'
import RightVerticalLine from './RightVerticalLine'
import LeftVerticalLine from './LeftVerticalLine'
import { useMachiningStore } from '../store/machiningOptionsStore'

const Canvas: React.FC = () => {
  const { currentMachiningOption } = useMachiningStore()

  const { currentDecor } = useCuttingListStore()

  const { L1, L2, W1, W2 } = useAngleCutMachiningOptions()

  const { isFront } = useCurrentMachiningOption()

  const dimensions = {
    width: currentDecor?.inputLength ?? 2000,
    height: currentDecor?.inputWidth ?? 2000
  }

  const isAngledCut = currentMachiningOption?.type === 'angled-cut'

  const stageWidth = 800
  const stageHeight = 800

  // Scale factor to fit the rectangle within the stage
  const scaleFactor = Math.min(stageWidth / dimensions.width, stageHeight / dimensions.height) * 0.4

  const scale = (number: number = 0) => scaleFactor * number

  const scaleUp = (number: number = 0) => number / scaleFactor

  const round = (number: number) => Math.round(number)

  // Scaled width and height
  const scaledWidth = scale(dimensions.width)
  const scaledHeight = scale(dimensions.height)

  // Rectangle position
  const rectX = (stageWidth - scaledWidth) / 2
  const rectY = (stageHeight - scaledHeight) / 2

  return (
    <div className=''>
      <Stage width={stageWidth} height={stageHeight}>
        <Layer>
          {/* main shape */}
          <MainLine rectX={rectX} rectY={rectY} scale={scale} scaledHeight={scaledHeight} scaledWidth={scaledWidth} />

          {isAngledCut && (
            <AngleCutRect
              rectX={rectX}
              rectY={rectY}
              scale={scale}
              scaledHeight={scaledHeight}
              scaledWidth={scaledWidth}
            />
          )}
          {/* top line */}
          {isAngledCut && (
            <TopHorizontalLine
              dimensions={dimensions}
              rectX={rectX}
              rectY={rectY}
              round={round}
              scale={scale}
              scaledWidth={scaledWidth}
            />
          )}

          {/* bottom line */}
          <BottomHorizontalLine
            dimensions={dimensions}
            rectX={rectX}
            rectY={rectY}
            round={round}
            scale={scale}
            scaledWidth={scaledWidth}
            scaledHeight={scaledHeight}
          />

          {/* right line */}
          <RightVerticalLine
            dimensions={dimensions}
            rectX={rectX}
            rectY={rectY}
            round={round}
            scale={scale}
            scaledWidth={scaledWidth}
            scaledHeight={scaledHeight}
          />

          {/* left line */}
          {isAngledCut && (
            <LeftVerticalLine
              dimensions={dimensions}
              rectX={rectX}
              rectY={rectY}
              round={round}
              scale={scale}
              scaledWidth={scaledWidth}
              scaledHeight={scaledHeight}
            />
          )}

          {/* Label L1 */}
          <DirectionTile
            circleX={rectX + scaledWidth / 2}
            circleY={rectY - 70}
            textX={rectX + scaledWidth / 2 - 7.5}
            textY={rectY - 75}
            text={isFront ? 'L1' : 'L2'}
            isActive={isFront ? L1 : L2}
          />

          {/* Label W1 */}
          <DirectionTile
            circleX={rectX - 70}
            circleY={rectY + scaledHeight / 2}
            textX={rectX - 78.5}
            textY={rectY + scaledHeight / 2 - 5}
            text='W1'
            isActive={W1}
          />

          {/* Label W2 */}
          <DirectionTile
            circleX={rectX + scaledWidth + 70}
            circleY={rectY + scaledHeight / 2}
            textX={rectX + scaledWidth + 61.5}
            textY={rectY + scaledHeight / 2 - 5}
            text='W2'
            isActive={W2}
          />

          {/* Label L2 */}
          <DirectionTile
            circleX={rectX + scaledWidth / 2}
            circleY={rectY + scaledHeight + 70}
            textX={rectX + scaledWidth / 2 - 7.5}
            textY={rectY + scaledHeight + 65}
            text={isFront ? 'L2' : 'L1'}
            isActive={isFront ? L2 : L1}
          />
          <L1W1Inputs
            dimensions={dimensions}
            rectX={rectX}
            rectY={rectY}
            round={round}
            scale={scale}
            scaleUp={scaleUp}
            scaledHeight={scaledHeight}
            scaledWidth={scaledWidth}
          />
          {/* <Html groupProps={{ x: rectX - 70, y: rectY - 50 }}>
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
            />
          </Html> */}
        </Layer>
      </Stage>
      <GrainBox />
      <FaceBox />
    </div>
  )
}

export default Canvas
