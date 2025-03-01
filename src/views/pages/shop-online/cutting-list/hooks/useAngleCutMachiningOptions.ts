import { useMachiningStore } from '../store/machiningOptionsStore'
import { useCurrentMachiningOption } from './useCurrentMachiningOption'

export const useAngleCutMachiningOptions = () => {
  const { currentMachiningOption, machiningOptions } = useMachiningStore()

  const isAngledCut = currentMachiningOption?.type === 'angled-cut'

  const angles = isAngledCut ? currentMachiningOption?.options.angleOn.split('-') : []

  const angleCutMachiningOptions = machiningOptions?.filter(option => option.type === 'angled-cut') ?? []

  const L1W1AngleCut = angleCutMachiningOptions?.find(option => option.options.angleOn === 'L1-W1')

  const L1W2AngleCut = angleCutMachiningOptions?.find(option => option.options.angleOn === 'L1-W2')

  const L2W1AngleCut = angleCutMachiningOptions?.find(option => option.options.angleOn === 'L2-W1')

  const L2W2AngleCut = angleCutMachiningOptions?.find(option => option.options.angleOn === 'L2-W2')

  const isL1W1 = angles?.includes('L1') && angles?.includes('W1')

  const isL1W2 = angles?.includes('L1') && angles?.includes('W2')

  const isL2W1 = angles?.includes('L2') && angles?.includes('W1')

  const isL2W2 = angles?.includes('L2') && angles?.includes('W2')

  const L1 = angles?.includes('L1')

  const L2 = angles?.includes('L2')

  const W1 = angles?.includes('W1')

  const W2 = angles?.includes('W2')

  const currentAngleCutX = isAngledCut ? currentMachiningOption.options.from.x : 0

  const currentAngleCutY = isAngledCut ? currentMachiningOption.options.from.y : 0

  const currentAngleCutHypotenuse = isAngledCut
    ? Math.sqrt(currentAngleCutX * currentAngleCutX + currentAngleCutY * currentAngleCutY)
    : 0

  const currentAngleCutDegree = isAngledCut
    ? Math.asin(currentAngleCutX / currentAngleCutHypotenuse) * (180 / Math.PI)
    : 0

  return {
    L1W1AngleCut,
    L1W2AngleCut,
    L2W1AngleCut,
    L2W2AngleCut,
    angles,
    isL1W1,
    isL1W2,
    isL2W1,
    isL2W2,
    L1,
    L2,
    W1,
    W2,
    currentAngleCutX,
    currentAngleCutY,
    currentAngleCutHypotenuse,
    currentAngleCutDegree
  }
}
