import { screen, render } from '@testing-library/custom'

import PageParagraph from './index'

const mockParagraph = 'Mock paragraph for testing purpose'

interface IPageParagraph {
  children: React.ReactNode
  addClassName?: string
}

function renderPageParagraph({ children, addClassName = '' }: IPageParagraph) {
  render(<PageParagraph addClassName={addClassName}>{children}</PageParagraph>)
}

describe('PageParagraph', () => {
  it('should render correct content passed as props.children', () => {
    renderPageParagraph({ children: mockParagraph })

    const pageParagraph = screen.getByText(mockParagraph)

    expect(pageParagraph).toBeInTheDocument()
  })

  it('should add to component styles passed as props.addClassName', () => {
    renderPageParagraph({ children: mockParagraph, addClassName: 'bg-[#fff]' })

    const pageParagraph = screen.getByText(mockParagraph)

    expect(pageParagraph).toHaveClass('bg-[#fff]')
  })
})
