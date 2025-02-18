import { useCurrentMachiningOptionStore } from '../components/store/machiningOptionsStore'

export const useCurrentMachiningOption = () => {
  const { currentMachiningOption } = useCurrentMachiningOptionStore()

  const isFront = currentMachiningOption?.view === 'front'

  const isBack = currentMachiningOption?.view === 'back'

  return {
    isFront,
    isBack
  }
}
