'use client'

import { useEffect, useState } from 'react'

import { Moon, Sun } from '@phosphor-icons/react'

const ThemeToggle: React.FC = () => {
  const [userPrefersDarkTheme, setUserPrefersDarkTheme] = useState(false)

  function handleThemeOnLoad() {
    const localStorageHasDarkTheme = localStorage.theme === 'dark'

    const localStorageDoesNotHaveThemeItem = !('theme' in localStorage)

    const userPrefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (localStorageHasDarkTheme || (localStorageDoesNotHaveThemeItem && userPrefersDarkTheme)) {
      document.documentElement.classList.add('dark')
      setUserPrefersDarkTheme(true)
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  function handleThemeToggleClick() {
    const localStorageDoesNotHaveThemeItem = !('theme' in localStorage)

    if (userPrefersDarkTheme) {
      setUserPrefersDarkTheme(false)

      localStorageDoesNotHaveThemeItem
        ? localStorage.setItem('theme', 'light')
        : (localStorage.theme = 'light')

      document.documentElement.classList.remove('dark')
    } else {
      setUserPrefersDarkTheme(true)
      localStorage.theme = 'dark'

      localStorageDoesNotHaveThemeItem
        ? localStorage.setItem('theme', 'dark')
        : (localStorage.theme = 'dark')

      document.documentElement.classList.add('dark')
    }
  }

  useEffect(() => {
    handleThemeOnLoad()
  }, [])

  return (
    <button
      onClick={handleThemeToggleClick}
      className="relative flex items-center justify-between w-[60px] h-8 py-0.5 px-2 rounded-full bg-[#0c0f17] dark:bg-[#f7f5f9]"
    >
      <Sun className="text-base sm:text-lg text-[#f7f5f9] dark:text-[#0c0f17]" />
      <Moon className="text-base sm:text-lg text-[#f7f5f9] dark:text-[#0c0f17]" />

      <div
        className={
          userPrefersDarkTheme
            ? 'absolute right-1 h-[26px] w-[26px] rounded-full bg-[#0c0f17]'
            : 'absolute left-1 h-[26px] w-[26px] rounded-full bg-[#f7f5f9]'
        }
      />
    </button>
  )
}

export default ThemeToggle
