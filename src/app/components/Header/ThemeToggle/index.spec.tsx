import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/custom'

import ThemeToggle from './index'

function renderThemeToggle() {
  render(<ThemeToggle />)
}

function setDarkThemePreference(theme: 'dark' | 'light') {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: theme === 'dark' ? true : false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn()
    }))
  })
}

describe('ThemeToggle', () => {
  afterEach(() => window.localStorage.clear())

  it('should set application theme according to the user (prefers-color-scheme: dark)', () => {
    {
      setDarkThemePreference('dark')

      renderThemeToggle()

      expect(document.documentElement).toHaveClass('dark')
    }

    {
      setDarkThemePreference('light')

      renderThemeToggle()

      expect(document.documentElement).not.toHaveClass('dark')
    }
  })

  it('should change the application theme when user clicks the theme toggle button', async () => {
    setDarkThemePreference('light')

    renderThemeToggle()

    const button = screen.getByRole('button')

    await userEvent.click(button)

    const htmlElement = document.documentElement

    expect(htmlElement).toHaveClass('dark')

    await userEvent.click(button)

    expect(htmlElement).not.toHaveClass('dark')
  })

  it('should add the theme property in localStorage if user clicks the toggle button', async () => {
    setDarkThemePreference('dark')

    renderThemeToggle()

    await userEvent.click(screen.getByRole('button'))

    expect(window.localStorage).toHaveProperty('theme', 'light')
  })
})
