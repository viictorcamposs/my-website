import { render, screen } from '@testing-library/custom'

import ActiveLink from './index'

function renderActiveLink(href: string, children: React.ReactNode) {
  render(<ActiveLink href={href}>{children}</ActiveLink>)
}

jest.mock('next/navigation', () => ({
  usePathname: jest.fn().mockImplementation(() => '/about')
}))

describe('ActiveLink', () => {
  it('should be a link element rendered with the correct text content and href attribute', () => {
    renderActiveLink('/about', 'About')

    const link = screen.getByRole('link')

    expect(link).toHaveTextContent('About')
    expect(link.getAttribute('href')).toContain('/about')
  })

  it('should apply active link styles based on the current pathname and link href attribute', () => {
    const activeLinkStyles = 'after:bg-[#f7f5f9]'
    const normalLinkStyles = 'after:bg-transparent'

    renderActiveLink('/about', 'About')
    renderActiveLink('/blog', 'Articles')

    const [about, articles] = screen.getAllByRole('link')

    expect(about).toHaveClass(activeLinkStyles)
    expect(about).not.toHaveClass(normalLinkStyles)

    expect(articles).toHaveClass(normalLinkStyles)
    expect(articles).not.toHaveClass(activeLinkStyles)
  })
})
