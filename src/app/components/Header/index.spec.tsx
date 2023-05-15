import { render } from '@testing-library/custom'

import Header from './index'

describe('Header component', () => {
  beforeEach(() => render(<Header />))

  it('should be visible for the user when page is loaded', () => {
    const header = document.getElementsByTagName('header')[0]

    expect(header).toBeVisible()
  })
})
