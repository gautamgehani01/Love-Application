import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AppState {
  theme: 'retro-dark' | 'retro-warm'
  notifications: number
  isMenuOpen: boolean
  toggleTheme: () => void
  incrementNotification: () => void
  toggleMenu: () => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      theme: 'retro-dark',
      notifications: 0,
      isMenuOpen: false,
      toggleTheme: () => set({ theme: get().theme === 'retro-dark' ? 'retro-warm' : 'retro-dark' }),
      incrementNotification: () => set((state) => ({ notifications: state.notifications + 1 })),
      toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
    }),
    {
      name: 'love-app-storage',
    }
  )
)

