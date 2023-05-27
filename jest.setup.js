import '@testing-library/jest-dom/extend-expect'
import 'whatwg-fetch'

import { server } from '~/test/mocks/server'

beforeAll(() => {
  server.listen()

  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn()
    }))
  })
})

afterEach(() => {
  server.resetHandlers()
})

afterAll(() => server.close())
