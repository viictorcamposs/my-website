import { screen, render } from '@testing-library/custom'

import About from './page'

describe('About page', () => {
  beforeEach(() => render(<About />))

  it('should render an image with alt attribute equals to Victor Campos', () => {
    const image = screen.getByRole('img')

    expect(image).toBeInTheDocument()
    expect(image).toHaveProperty('alt', 'Victor Campos')
  })

  it('should render a heading element', () => {
    const heading = screen.getByRole('heading')

    expect(heading).toBeInTheDocument()
  })

  it('should render a main element', () => {
    const main = screen.getByRole('main')

    expect(main).toBeInTheDocument()
  })
})
