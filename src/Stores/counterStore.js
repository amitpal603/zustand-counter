import {create} from 'zustand'

 // create store using zustand

  export const useCounterStore = create((set) => ({
    count: 0,
    increment: () => set((state) => ({count: state.count + 1})),
    decrement: () => set((state) => ({count: state.count > 0 ? state.count -1 : 0})),
    reset: () => set((state) => ({count: 0}))
 }))