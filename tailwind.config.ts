import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)', 'Arial', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#1d4ed8',
          dark: '#143da9',
        },
        surface: {
          DEFAULT: '#ffffff',
          soft: '#f2f6fc',
        },
        brand: {
          teal: '#1aa5a5',
        },
        navy: '#0f1f3d',
      },
      boxShadow: {
        card: '0 12px 32px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [],
}

export default config
