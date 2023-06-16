import { render, screen } from '@testing-library/custom'

import PageSubtitle from './index'

interface IPageSubtitle {
  children: React.ReactNode
  addClassName?: string
}

function renderPageSubtitle({ children, addClassName = '' }: IPageSubtitle) {
  render(<PageSubtitle addClassName={addClassName}>{children}</PageSubtitle>)
}

describe('PageSubtitle', () => {
  it('should render correct content passed as props.children', () => {
    renderPageSubtitle({ children: 'Hello World' })

    const pageSubtitle = screen.getByRole('heading')

    expect(pageSubtitle).toHaveTextContent('Hello World')
  })

  it('should add to component styles passed as props.addClassName', () => {
    renderPageSubtitle({ children: 'Hello World', addClassName: 'bg-[#fff]' })

    expect(screen.getByRole('heading')).toHaveClass('bg-[#fff]')
  })
})
