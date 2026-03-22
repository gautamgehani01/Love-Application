import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        retro: {
          100: '#f8f9fa',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#6c757d',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
          glow: '#4ecdc4',
          accent: '#f4a261',
          warm: '#e76f51',
          fg: '#e0e6ed',
          'fg-dim': '#a0a8b8',
          bg: {
            dark: '#0f0f23',
            gradientStart: '#1a1a2e',
            gradientEnd: '#16213e',
          }
        }
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
      },
      spacing: {
        '1.5': '0.375rem',  // 6px
        '3': '0.75rem',     // 12px
        '4.5': '1.125rem',  // 18px
        '6': '1.5rem',      // 24px
        '9': '2.25rem',     // 36px
        '12': '3rem',       // 48px
      },
      borderRadius: {
        'xl': '0.75rem',  // 12px
      },
      boxShadow: {
        'retro-glow': '0 0 20px rgba(78, 205, 196, 0.3)',
        'button-glow': '0 4px 14px 0 rgb(78 205 196 / 0.25)',
      },
      animation: {
        'glow-pulse': 'glowPulse 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glowPulse: {
          '0%': { boxShadow: '0 0 20px 0 rgba(78, 205, 196, 0.3)' },
          '100%': { boxShadow: '0 0 40px 0 rgba(78, 205, 196, 0.5)' },
        }
      }
    },
  },
  plugins: [],
}

export default config

