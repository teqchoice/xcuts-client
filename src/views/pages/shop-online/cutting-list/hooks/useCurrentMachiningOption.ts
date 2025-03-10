import { useMachiningStore } from '../store/machiningOptionsStore'

export const useCurrentMachiningOption = () => {
  const { currentMachiningOption } = useMachiningStore()

  const isFront = currentMachiningOption?.view === 'front'

  const isBack = currentMachiningOption?.view === 'back'

  return {
    isFront,
    isBack
  }
}
