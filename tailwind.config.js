/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      black: '#000000',
      sapphire: {
        DEFAULT: '#0D1B2A',
        light: '#1B263B',
        dark: '#060D15'
      },
      royal: {
        DEFAULT: '#4B0082',
        light: '#6B00B8',
        dark: '#2B004C'
      },
      gold: {
        DEFAULT: '#FFD700',
        light: '#FFE44D',
        dark: '#B89B00'
      },
      ivory: {
        DEFAULT: '#FDFDFD',
        light: '#FFFFFF',
        dark: '#F0F0F0'
      },
      slate: {
        DEFAULT: '#1C1C1E',
        light: '#2C2C2E',
        dark: '#0C0C0E'
      }
    },
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif']
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem'
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'royal': '0 4px 20px 0 rgba(75, 0, 130, 0.25)',
        'gold': '0 4px 20px 0 rgba(255, 215, 0, 0.25)'
      },
      backdropBlur: {
        'glass': '4px',
        'royal': '8px'
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      }
    },
  },
  plugins: [],
}