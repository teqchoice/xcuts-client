import { components } from '@/core/api-shop/v1'
import { uid } from 'radash'
import { create } from 'zustand'

type Decor = components['schemas']['ItemsDecors'] & {
  inputThickness?: string
  inputLength?: number
  inputWidth?: number
  inputQuantity?: number
  inputDescription?: string
}

type CuttingListStore = {
  currentDecor: Decor | null
  addedDecors: Decor[]
  setCurrentDecor: (id: string) => void
  addDecor: (decor: Decor) => void
  removeDecor: (id: string) => void
  updateDecor: (id: string, updatedDecor: Partial<Decor>) => void
}

const useCuttingListStore = create<CuttingListStore>((set, get) => ({
  currentDecor: null,
  addedDecors: [...Array(5)]?.map(() => ({ id: uid(10) })),
  setCurrentDecor: decor => set({ currentDecor: get().addedDecors?.find(addedDecor => addedDecor.id === decor) }),
  addDecor: decor => set(state => ({ addedDecors: [...state.addedDecors, decor] })),
  removeDecor: id => set(state => ({ addedDecors: state.addedDecors.filter(decor => decor.id !== id) })),
  updateDecor: (id, updatedDecor) =>
    set(state => ({
      addedDecors: state.addedDecors.map(decor => (decor.id === id ? { ...decor, ...updatedDecor } : decor))
    }))
}))

export default useCuttingListStore
