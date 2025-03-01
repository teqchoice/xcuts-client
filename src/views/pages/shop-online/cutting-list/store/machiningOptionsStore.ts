import { create } from 'zustand'

export type MachiningOption =
  | {
      id: string
      type: 'angled-cut'
      selected: boolean
      options: {
        angleOn: 'L1-W1' | 'L1-W2' | 'L2-W1' | 'L2-W2'
        from: { x: number; y: number }
        edging: any
      }
      view: 'back' | 'front'
    }
  | { id: string; selected: boolean; type: 'groove'; depth: number; width: number; view: 'back' | 'front' }
  | { id: string; selected: boolean; type: '5mm'; diameter: number; view: 'back' | 'front' }
  | { id: string; selected: boolean; type: '7.5mm'; radius: number; view: 'back' | 'front' }

export type Store = {
  machiningOptions: MachiningOption[] | null
  currentMachiningOption: MachiningOption | null
  addMachiningOption: (option: MachiningOption) => void
  removeMachiningOption: (id: string) => void
  setCurrentMachiningOption: (id: string) => void
  updateCurrentMachiningOption: (option: MachiningOption) => void
  disableAllMachiningOptions: () => void
  removeAllMachiningOptions: () => void
}

export const useMachiningStore = create<Store>()((set, get) => ({
  machiningOptions: null,
  currentMachiningOption: null,

  addMachiningOption: option =>
    set(state => {
      if (option.type === 'angled-cut') {
        const existingAngledCuts = state.machiningOptions?.filter(item => item.type === 'angled-cut') as Extract<
          MachiningOption,
          { type: 'angled-cut' }
        >[]

        const angleOnValues: (typeof option.options.angleOn)[] = ['L1-W1', 'L1-W2', 'L2-W1', 'L2-W2']
        const usedAngleOnValues = new Set(existingAngledCuts?.map(item => item.options.angleOn))
        const nextAvailableAngleOn = angleOnValues.find(value => !usedAngleOnValues.has(value))

        if (!nextAvailableAngleOn) {
          console.warn('No available angleOn values left.')
          return state
        }

        const updatedOption = {
          ...option,
          options: { ...option.options, angleOn: nextAvailableAngleOn }
        }

        const updatedMachiningOptions = state.machiningOptions
          ? [updatedOption, ...state.machiningOptions]
          : [updatedOption]

        return {
          machiningOptions: updatedMachiningOptions,
          currentMachiningOption: updatedMachiningOptions.find(item => item.selected) ?? null
        }
      }

      const updatedMachiningOptions = state.machiningOptions ? [option, ...state.machiningOptions] : [option]

      return {
        machiningOptions: updatedMachiningOptions,
        currentMachiningOption: updatedMachiningOptions.find(item => item.selected) ?? null
      }
    }),

  removeMachiningOption: id =>
    set(state => {
      const updatedMachiningOptions =
        state.machiningOptions && state.machiningOptions.length > 1
          ? state.machiningOptions.filter(item => item.id !== id)
          : null

      return {
        machiningOptions: updatedMachiningOptions,
        currentMachiningOption: updatedMachiningOptions?.find(item => item.selected) ?? null
      }
    }),

  setCurrentMachiningOption: id =>
    set(state => {
      const updatedMachiningOptions = state.machiningOptions
        ? state.machiningOptions.map(item => ({ ...item, selected: item.id === id }))
        : null

      return {
        machiningOptions: updatedMachiningOptions,
        currentMachiningOption: updatedMachiningOptions?.find(item => item.selected) ?? null
      }
    }),

  updateCurrentMachiningOption: option =>
    set(state => {
      if (!state.currentMachiningOption) return state

      if (state.currentMachiningOption.type === 'angled-cut' && option.type === 'angled-cut') {
        const updatedMachiningOptions =
          state.machiningOptions?.map(item =>
            item.type === 'angled-cut' && item.id === state.currentMachiningOption?.id
              ? { ...item, ...option, options: { ...item.options, ...option.options } }
              : item
          ) ?? null

        return {
          machiningOptions: updatedMachiningOptions,
          currentMachiningOption:
            updatedMachiningOptions?.find(item => item.id === state.currentMachiningOption?.id) ?? null
        }
      }
      return state
    }),

  disableAllMachiningOptions: () =>
    set(state => {
      const updatedMachiningOptions = state.machiningOptions
        ? state.machiningOptions.map(item => ({ ...item, selected: false }))
        : null

      return {
        machiningOptions: updatedMachiningOptions,
        currentMachiningOption: null
      }
    }),
  removeAllMachiningOptions: () =>
    set(() => ({
      machiningOptions: null,
      currentMachiningOption: null
    }))
}))
