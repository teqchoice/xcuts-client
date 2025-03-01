import { create } from 'zustand'

interface InputErrorState {
  xInputError: { max: boolean; min: boolean }
  yInputError: { max: boolean; min: boolean }
  setXInputError: (error: { max: boolean; min: boolean }) => void
  setYInputError: (error: { max: boolean; min: boolean }) => void
}

const useAngledCutInputValidationStore = create<InputErrorState>(set => ({
  xInputError: { max: false, min: false },
  yInputError: { max: false, min: false },
  setXInputError: error => set({ xInputError: error }),
  setYInputError: error => set({ yInputError: error })
}))

export default useAngledCutInputValidationStore
