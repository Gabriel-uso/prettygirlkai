/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        script: ['"Mrs Saint Delafield"', 'cursive'],
        mono: ['"Space Mono"', 'monospace'],
        sans: ['"Inter Tight"', 'system-ui', 'sans-serif'],
      },
      colors: {
        paper: '#f5efe4',
        cream: '#fff9ee',
        ink: '#1f1a17',
        rust: '#7d1718',
        blueInk: '#1b2c75',
        blush: '#e9a7b8',
        sage: '#567047',
        gold: '#d8a957',
      },
    },
  },
  plugins: [],
}
