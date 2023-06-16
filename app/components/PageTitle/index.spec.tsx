import { screen, render } from '@testing-library/custom'

import PageTitle from './index'

const mockTitle = 'Mock title for testing purpose'

describe('PageTitle', () => {
  it('should render title tag with the correct content', () => {
    render(<PageTitle>{mockTitle}</PageTitle>)

    const heading = screen.getByRole('heading')

    expect(heading.textContent).toBe(mockTitle)
  })
})
