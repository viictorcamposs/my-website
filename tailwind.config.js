/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    '@/mdx-components.tsx',
    './mdx-components.tsx',
    '@/app/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    '@/app/(pages)/**/*.{js,ts,jsx,tsx}',
    './app/(pages)/**/*.{js,ts,jsx,tsx}',
    '@/app/components/**/*.{js,ts,jsx,tsx}',
    './app/components/**/*.{js,ts,jsx,tsx}',
    '@/test/**/*.{js,ts,jsx,tsx}',
    './test/**/*.{js,ts,jsx,tsx}',
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
