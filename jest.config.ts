import type { Config } from 'jest'

const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './'
})

const customJestConfig: Config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', 'tests/@testing-library'],
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/src/$1'
  }
}

module.exports = createJestConfig(customJestConfig)
