import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface LoveState {
  name: string
  attempts: number
  setName: (name: string) => void
  incrementAttempts: () => void
  resetAttempts: () => void
  isGameWon: boolean
  setGameWon: (won: boolean) => void
}

export const useLoveStore = create<LoveState>()(
  persist(
    (set) => ({
      name: '',
      attempts: 0,
      isGameWon: false,
      setName: (name) => set({ name }),
      incrementAttempts: () => set((state) => ({ attempts: state.attempts + 1 })),
      resetAttempts: () => set({ attempts: 0 }),
      setGameWon: (won) => set({ isGameWon: won }),
    }),
    {
      name: 'love-game-storage',
    }
  )
)

