/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    '~/mdx-components.tsx',
    './mdx-components.tsx',
    '~/posts/*.mdx',
    './posts/*.mdx',
    '~/app/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    '~/app/(pages)/**/*.{js,ts,jsx,tsx}',
    './app/(pages)/**/*.{js,ts,jsx,tsx}',
    '~/app/components/**/*.{js,ts,jsx,tsx}',
    './app/components/**/*.{js,ts,jsx,tsx}',
    '~/test/**/*.{js,ts,jsx,tsx}',
    './test/**/*.{js,ts,jsx,tsx}',
    '!./node_modules'
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-poppins)'],
        body: ['var(--font-inter)']
      },
      borderColor: {
        primary: '#262626' // text-neutral-800
      },
      textColor: {
        primary: '#e4e4e7', // text-zinc-200
        secondary: '#a1a1aa', // text-zinc-400
        other: '#52525b' // text-zinc-500
      },
      backgroundColor: {
        primary: '#0a0a0a', // text-neutral-950
        secondary: '#262626' // text-neutral-800
      },
      keyframes: {
        titlegradient: {
          to: {
            'background-position': '200% 50%'
          }
        }
      },
      backgroundSize: {
        '200%': '200% auto'
      },
      animation: {
        'title-gradient': 'titlegradient 2s linear infinite reverse'
      }
    }
  },
  plugins: []
}
