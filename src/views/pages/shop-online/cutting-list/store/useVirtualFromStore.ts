import { create } from 'zustand'

type VirtualFrom = { x?: number; y?: number }

export const useVirtualFromStore = create<{
  virtualFrom: VirtualFrom | null
  setVirtualFrom: (virtualFrom: VirtualFrom) => void
}>(set => ({
  virtualFrom: null,

  setVirtualFrom: virtualFrom => set({ virtualFrom })
}))
