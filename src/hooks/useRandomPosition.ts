import { useState, useCallback, useEffect } from 'react'

interface Position {
  x: number
  y: number
}

interface UseRandomPositionOptions {
  speed?: number
  boundaryPadding?: number
}

export function useRandomPosition(options: UseRandomPositionOptions = {}) {
  const { speed = 0.3, boundaryPadding = 100 } = options
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 })
  const [targetPosition, setTargetPosition] = useState<Position>({ x: 0, y: 0 })
  const [mousePosition, setMousePosition] = useState<Position>({ x: 0, y: 0 })

  const updateMousePosition = useCallback((clientX: number, clientY: number) => {
    setMousePosition({ x: clientX, y: clientY })
  }, [])

  const getRandomPosition = useCallback(() => {
    return {
      x: Math.random() * (window.innerWidth - 200) + 100,
      y: Math.random() * (window.innerHeight - 200) + 100,
    }
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      updateMousePosition(e.clientX, e.clientY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [updateMousePosition])

  useEffect(() => {
    const interval = setInterval(() => {
      setTargetPosition(getRandomPosition())
    }, 1000 + Math.random() * 2000)

    return () => clearInterval(interval)
  }, [getRandomPosition])

  useEffect(() => {
    const rafId = requestAnimationFrame(() => {
      setPosition(prev => {
        const dx = targetPosition.x - prev.x
        const dy = targetPosition.y - prev.y
        const mouseDx = mousePosition.x - prev.x
        const mouseDy = mousePosition.y - prev.y

        return {
          x: prev.x + (dx * speed) + (mouseDx * 0.05),
          y: prev.y + (dy * speed) + (mouseDy * 0.05),
        }
      })
    })

    return () => cancelAnimationFrame(rafId)
  }, [targetPosition, mousePosition, speed])

  return {
    position,
    triggerMove: getRandomPosition,
  }
}

