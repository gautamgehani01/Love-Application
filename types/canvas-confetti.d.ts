declare module 'canvas-confetti' {
  function confetti(options?: {
    particleCount?: number
    spread?: number
    origin?: { x?: number; y?: number }
    colors?: string[]
    shapes?: ('circle' | 'square' | 'heart')[]
    angle?: number
  }): void
  export default confetti
}

