'use client'

import { CenteredLayout } from '@/components/layouts/centered'
import { Container } from '@/components/layouts/container'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useLoveStore } from '@/store/use-love-store'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

export default function LandingPage() {
  const { name, setName } = useLoveStore()
  const router = useRouter()

  const handleStart = () => {
    if (name.trim()) {
      router.push('/game')
    }
  }

  return (
    <CenteredLayout>
      <Container className="text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-6 max-w-xl"
        >
          {/* Retro Heading with Definition */}
          <motion.div 
            className="w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <motion.h1 
              className="font-sans text-5xl sm:text-6xl md:text-7xl leading-tight bg-linear-to-r from-[#f4a261] via-[#e76f51] to-[#4ecdc4] bg-clip-text text-transparent drop-shadow-2xl mb-2"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              Hello Cutie
            </motion.h1>
            
            {/* Retro Definition Box */}
            <motion.div 
              className="inline-block px-6 py-3 border-2 border-retro-glow/50 rounded-sm bg-retro-bg/80 backdrop-blur-sm"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p className="font-sans text-xs sm:text-sm text-retro-glow tracking-widest">
                💕 LOVE:SYS V1.0 💕
              </p>
              <p className="font-sans text-xs text-retro-fg-dim mt-1 italic">
                A portal to express your feelings in pixel-perfect style
              </p>
            </motion.div>
          </motion.div>
          
          <motion.p 
            className="text-sm md:text-base text-retro-fg font-sans tracking-wide leading-relaxed max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Please Enter Your Name and Start the game..
          </motion.p>
          
          <motion.div 
            className="flex flex-col gap-5 w-full max-w-md mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {/* Input with Glow */}
            <div className="relative">
              <motion.div
                className="absolute inset-0 rounded-sm bg-linear-to-r from-retro-glow/0 via-retro-glow/20 to-retro-glow/0 blur-lg"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
              <Input
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                placeholder="Enter your name..."
                className="relative z-10 text-lg font-sans text-center bg-retro-bg border-2 border-retro-glow/50 text-retro-fg placeholder-retro-fg-dim focus:border-retro-glow focus:shadow-lg focus:shadow-retro-glow/50"
                autoFocus
              />
            </div>

            {/* Start Button with Enhanced Glow */}
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <motion.div
                className="absolute inset-0 rounded-sm bg-linear-to-r from-retro-accent to-retro-warm blur-xl"
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <Button 
                onClick={handleStart}
                className="relative z-10 w-full text-base sm:text-lg font-sans tracking-widest bg-linear-to-r from-retro-accent to-retro-warm text-retro-bg hover:shadow-lg hover:shadow-retro-accent/50 transition-all duration-300"
                size="lg"
              >
                ▶ START GAME ◀
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Decorative Retro Footer */}
        <motion.div
          className="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="h-0.5 w-12 bg-linear-to-r from-transparent to-retro-glow/50" />
          <div className="text-retro-glow/70 font-sans text-xs tracking-widest">💕</div>
          <div className="h-0.5 w-12 bg-linear-to-l from-transparent to-retro-glow/50" />
        </motion.div>
      </Container>
    </CenteredLayout>
  )
}

