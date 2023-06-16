/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    '@/app/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    '@/app/(pages)/**/*.{js,ts,jsx,tsx}',
    './src/app/(pages)/**/*.{js,ts,jsx,tsx}',
    '@/app/components/**/*.{js,ts,jsx,tsx}',
    './src/app/components/**/*.{js,ts,jsx,tsx}',
    '~/test/**/*.{js,ts,jsx,tsx}',
    './src/test/**/*.{js,ts,jsx,tsx}',
    '!./node_modules'
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-poppins)'],
        body: ['var(--font-inter)']
      }
    }
  },
  plugins: []
}
