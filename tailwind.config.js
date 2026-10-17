/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#050505',
          900: '#0c0c0c',
          850: '#121212',
          800: '#18181b',
          700: '#27272a',
        },
        stone: {
          light: '#f4f4f0',
          muted: '#a1a1aa',
          subtle: '#71717a',
          faint: '#3f3f46',
        }
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        serif: ['"Instrument Serif"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
