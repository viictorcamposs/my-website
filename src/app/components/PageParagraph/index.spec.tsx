import { screen, render } from '@testing-library/custom'

import PageParagraph from './index'

const mockParagraph = 'Mock paragraph for testing purpose'

describe('PageParagraph', () => {
  it('should render paragraph tag with the correct content', () => {
    render(<PageParagraph>{mockParagraph}</PageParagraph>)

    const paragraph = screen.getByText(mockParagraph)

    expect(paragraph).toBeInTheDocument()
  })
})
