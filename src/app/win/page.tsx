'use client'

export const dynamic = 'force-dynamic';

import { CenteredLayout } from '@/components/layouts/centered'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import { useEffect } from 'react'
import Link from 'next/link'

export default function WinPage() {
  useEffect(() => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#F26076', '#FF9760', '#FFD150', '#4ecdc4']
    })

    const interval = setInterval(() => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 1 },
        colors: ['#FF6B9D', '#FF8E53'],
        shapes: ['heart']
      })
      
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 1 },
        colors: ['#FF6B9D', '#FF8E53'],
        shapes: ['heart']
      })
    }, 800)

    return () => clearInterval(interval)
  }, [])

  return (
    <CenteredLayout className="overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          type: 'spring', 
          duration: 1, 
          bounce: 0.4 
        }}
        className="flex flex-col items-center gap-12 text-center max-w-2xl px-6 pt-24"
      >
        <motion.div 
          className="font-sans text-5xl md:text-7xl leading-tight whitespace-nowrap drop-shadow-2xl bg-linear-to-r from-retro-accent via-retro-warm to-retro-glow text-retro-fg"
          animate={{ 
            scale: [1, 1.2, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            ease: 'easeInOut' 
          }}
        >
          YEYE! YOU WON ❤️
        </motion.div>

        <motion.h2 
          className="font-sans text-2xl md:text-3xl text-retro-accent drop-shadow-lg whitespace-nowrap"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          You unlocked: My Heart 💘
        </motion.h2>

        <motion.div 
          className="flex flex-col items-center gap-6 opacity-90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Link href="/letter">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="primary" 
                size="lg"
                className="w-full max-w-xs min-h-16 font-pixel text-xl px-12 shadow-button-glow hover:shadow-retro-glow"
              >
                Read Love Letter 📜
              </Button>
            </motion.div>
          </Link>
          
          <Link href="/">
            <Button 
              variant="ghost"
              className="font-pixel text-lg"
            >
              Play Again 🎮
            </Button>
          </Link>
        </motion.div>

        <div className="flex flex-wrap gap-2 pt-12">
          <span className="text-xs text-retro-fg-dim font-pixel uppercase tracking-wider">Powered by</span>
          <span className="text-xs text-retro-accent font-pixel uppercase tracking-wider">Next.js + Framer Motion</span>
        </div>
      </motion.div>
    </CenteredLayout>
  )
}

