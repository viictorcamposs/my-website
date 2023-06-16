import { screen, render } from '@testing-library/custom'

import Main from './index'

interface IMain {
  children: React.ReactNode
  addClassName?: string
  className?: string
}

function renderMain(props: IMain) {
  render(
    <Main className={props.className} addClassName={props.addClassName}>
      {props.children}
    </Main>
  )
}

describe('Main', () => {
  it('should render correct content passed as props.children', () => {
    renderMain({ children: 'Hello World' })

    const main = screen.getByRole('main')

    expect(main).toHaveTextContent('Hello World')
  })

  it('should add to component styles passed as props.addClassName', () => {
    renderMain({ children: 'Hello World', addClassName: 'bg-[#fff]' })

    const main = screen.getByRole('main')

    expect(main).toHaveClass('bg-[#fff]')
  })

  it('should replace the component styles for the styles passed in the props.className', () => {
    const classPattern = /^bg-\[#fff\]$/g

    renderMain({ children: 'Hello World', className: 'bg-[#fff]' })

    const main = screen.getByRole('main')

    expect(main.className).toMatch(classPattern)
  })
})
