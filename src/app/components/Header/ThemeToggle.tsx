'use client'

import { Moon, Sun } from '@phosphor-icons/react'

const ThemeToggle: React.FC = () => (
  <button className="relative flex items-center justify-between w-[60px] h-8 py-0.5 px-2 rounded-full bg-[#0c0f17]">
    <Sun color="#f7f5f9" size={16} />
    <Moon color="#f7f5f9" size={16} />

    <div className="absolute left-1 h-[26px] w-[26px] rounded-full bg-[#f7f5f9]" />
  </button>
)

export default ThemeToggle
