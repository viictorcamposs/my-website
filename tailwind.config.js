/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    '~/mdx-components.tsx',
    './mdx-components.tsx',
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
        main: ['var(--font-poppins)']
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
