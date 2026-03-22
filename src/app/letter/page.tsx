'use client'

export const dynamic = 'force-dynamic';

import { CenteredLayout } from '@/components/layouts/centered'
import { Container } from '@/components/layouts/container'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useLoveStore } from '@/store/use-love-store'

const LOVE_LETTER = `My dearest {{name}},

From the moment I saw you, my heart knew you were the one. 
Every smile, every laugh, every moment with you feels like a dream I never want to wake from.

Your kindness, your beauty, your incredible spirit - they light up my world brighter than any star.

Being with you makes me the happiest I've ever been. 
You've captured my heart completely, and I want to spend every day making you as happy as you make me.

Will you be my Valentine? Forever and always?

With all my love,
Your Secret Admirer 💘`

export default function LetterPage() {
  const { name } = useLoveStore()
  const [displayedText, setDisplayedText] = useState('')
  const [cursorVisible, setCursorVisible] = useState(true)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let index = 0
    const text = LOVE_LETTER.replace('{{name}}', name)

    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1))
        index++
      } else {
        setIsComplete(true)
        clearInterval(timer)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [name])

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setCursorVisible(visible => !visible)
    }, 500)

    return () => clearInterval(blinkInterval)
  }, [])

  return (
    <CenteredLayout className="overflow-hidden">
      <Container className="max-w-3xl">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-12 min-h-screen pb-24"
        >
          <motion.div 
            className="font-pixel text-3xl text-retro-accent uppercase tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Love Letter 📜
          </motion.div>

          <div className="w-full max-w-2xl bg-retro-900/30 backdrop-blur-xl rounded-2xl border border-retro-700/50 p-9 md:p-12 space-y-6">
            <div className="prose prose-invert max-w-none">
              <p className="font-mono text-lg md:text-xl leading-relaxed whitespace-pre-wrap">
                {displayedText}
                {!isComplete && (
                  <span className="inline-block w-3 h-6 bg-retro-glow animate-glow-pulse">
                    {cursorVisible ? '█' : ''}
                  </span>
                )}
              </p>
            </div>
            
            <AnimatePresence>
              {isComplete && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex flex-col items-center gap-6 pt-12"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      variant="primary" 
                      size="lg"
                      className="font-pixel text-xl px-12 py-4 min-h-15"
                    >
                      💘 Print This Letter 💘
                    </Button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </Container>
    </CenteredLayout>
  )
}

