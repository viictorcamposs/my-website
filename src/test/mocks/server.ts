import { setupServer } from 'msw/node'
import { rest as restMock } from 'msw'

import { handlers } from './handlers'

export const server = setupServer(...handlers)
export const rest = restMock
