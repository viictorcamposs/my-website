import { render, screen } from '@testing-library/custom'

import type { IPost } from '~/app/api/posts/route'

import Article from './index'

const post: IPost = {
  paramId: 'how-was-the-experience-of-creating-my-own-website-and-blog',
  title: 'How was the experience of creating my own website and blog',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis iaculis...',
  releaseDate: 'Apr 17, 2023',
  imageUrl:
    'https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
}

describe('Article', () => {
  beforeEach(() => render(<Article post={post} />))

  it('should render content passed to the component props', async () => {
    const title = screen.getByRole('heading')

    expect(title.textContent).toBe(post.title)

    const description = screen.getByText(post.description)

    expect(description).toBeInTheDocument()

    const releaseDate = screen.getByText(post.releaseDate)

    expect(releaseDate).toBeInTheDocument()

    const linkHref = screen.getByRole('link').getAttribute('href')

    expect(linkHref).toContain(`/blog/${post.paramId}`)
  })
})
