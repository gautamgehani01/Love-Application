'use client'

export const dynamic = 'force-dynamic';

import { CenteredLayout } from '@/components/layouts/centered'
import { Container } from '@/components/layouts/container'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useLoveStore } from '@/store/use-love-store'
import { useRandomPosition } from '@/hooks/useRandomPosition'
import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const TAUNTS = [
  'Nice try 👀',
  'Not so fast 😏',
  'Destiny says YES 💘',
  "You're fighting fate!",
  'Getting closer...',
  'One more try?',
  'Almost there!',
  'YES is the only answer ❤️',
]

export default function GamePage() {
  const { name, attempts, incrementAttempts, setGameWon } = useLoveStore()
  const { position, triggerMove } = useRandomPosition({ speed: 0.4 + attempts * 0.1 })
  const [currentTaunt, setCurrentTaunt] = useState('')
  const [isShaking, setIsShaking] = useState(false)
  const [noClicks, setNoClicks] = useState(0)
  const [clumsyMessage, setClumsyMessage] = useState('')
  const containerRef = useRef<HTMLDivElement>(null)

  const CLUMSY_MESSAGES = [
    'Oops! Too fast 😅',
    'Hold on, hands off! 🤚',
    'No is feeling shy... 😳',
    'Stop teasing! 😜',
    'Last chance before I flee! 🏃'
  ]

  const handleNoClick = useCallback(() => {
    if (noClicks >= 5) return

    const nextCount = noClicks + 1
    setNoClicks(nextCount)
    setClumsyMessage(CLUMSY_MESSAGES[nextCount - 1] || 'You are playful!')
    incrementAttempts()
  }, [incrementAttempts, noClicks])

  const handleYesClick = useCallback(() => {
    setGameWon(true)
  }, [setGameWon])

  const handleTauntChange = useCallback(() => {
    if (attempts > 0) {
      const taunt = TAUNTS[attempts % TAUNTS.length]
      setCurrentTaunt(taunt)
      setIsShaking(true)
      triggerMove()
      
      const shakeTimer = setTimeout(() => {
        setIsShaking(false)
      }, 500)
      
      return () => clearTimeout(shakeTimer)
    }
  }, [attempts, triggerMove])

  useEffect(() => {
    const timeoutId = setTimeout(handleTauntChange, 0)
    return () => clearTimeout(timeoutId)
  }, [handleTauntChange])

  useEffect(() => {
    if (noClicks >= 5) {
      const fleeInterval = setInterval(() => {
        triggerMove()
      }, 350)
      return () => clearInterval(fleeInterval)
    }
  }, [noClicks, triggerMove])

  return (
    <div className="min-h-screen relative overflow-hidden">
      {isShaking && (
        <motion.div
          className="fixed inset-0 pointer-events-none z-50"
          animate={{ 
            x: [0, 10, -10, 5, -5, 0],
          }}
          transition={{ duration: 0.3 }}
        />
      )}
      
      <CenteredLayout>
        <Container className="relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-12 text-center max-w-lg"
          >
            <motion.h1 
              className="font-pixel text-2xl md:text-3xl leading-tight"
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 0.5, 
                repeat: Infinity, 
                ease: 'easeInOut' 
              }}
            >
              {name}, will you be my Valentine? 💘
            </motion.h1>
            
            {currentTaunt && (
              <motion.p 
                key={currentTaunt}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-lg font-pixel text-retro-accent tracking-wide"
              >
                {currentTaunt}
              </motion.p>
            )}

            <div className="flex flex-col md:flex-row gap-6 w-full items-center justify-center pt-6">
              <Link href="/win">
                <Button 
                  variant="primary" 
                  size="lg"
                  className="w-full md:w-auto min-h-16 font-pixel text-lg px-12"
                  onClick={handleYesClick}
                >
                  YES ❤️
                </Button>
              </Link>
              
              <motion.div
                ref={containerRef}
                className="relative w-full md:w-auto"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px)`,
                }}
                animate={{
                  x: position.x,
                  y: position.y,
                }}
                transition={{
                  type: 'spring',
                  damping: 15,
                  stiffness: 200,
                }}
              >
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={noClicks >= 5 ? undefined : handleNoClick}
                  className={`w-full md:w-auto min-h-16 font-sans text-lg px-12 shadow-retro-glow hover:shadow-retro-glow/75 ${
                    noClicks >= 5
                      ? 'opacity-50 cursor-not-allowed ring-2 ring-retro-accent/70' 
                      : 'opacity-100 cursor-pointer'
                  }`}
                  disabled={noClicks >= 5}
                >
                  NO 😤
                </Button>
                {clumsyMessage && (
                  <p className="mt-2 text-sm text-retro-accent font-sans tracking-wide">
                    {clumsyMessage}
                  </p>
                )}
              </motion.div>
            </div>

            <div className="text-xs text-retro-fg-dim font-pixel uppercase tracking-wider opacity-75">
              Attempts: {attempts} | Speed: {Math.round((0.4 + attempts * 0.1) * 100)}%
            </div>
          </motion.div>
        </Container>
      </CenteredLayout>
    </div>
  )
}

