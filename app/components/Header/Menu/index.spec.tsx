import userEvent from '@testing-library/user-event'
import { screen, render } from '@testing-library/custom'

import Mobile from './index'

describe('Mobile navigation', () => {
  beforeEach(() => render(<Mobile />))

  it('should not have the Menu component in the document', () => {
    const menu = document.getElementsByTagName('dialog')[0]

    expect(menu).toBeUndefined()
  })

  it('should load the Menu component in the document when user clicks the button', async () => {
    const button = screen.getByRole('button')

    await userEvent.click(button)

    const menu = screen.getByRole('dialog')

    expect(menu).toBeInTheDocument()
  })

  it('should close the menu if the user clicks the button twice', async () => {
    const button = screen.getByRole('button')

    await userEvent.click(button)

    const menu = screen.getByRole('dialog')

    expect(menu).toBeVisible()

    await userEvent.click(button)

    expect(menu).not.toBeVisible()
  })
})
