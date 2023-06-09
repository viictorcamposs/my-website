import type { Config } from 'jest'

const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './'
})

const customJestConfig: Config = {
  errorOnDeprecated: true,
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', 'test/@testing-library'],
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/src/$1',
    '@/(.*)': '<rootDir>/$1'
  },
  collectCoverageFrom: [
    '<rootDir>/src/app/components/**/*.{ts,tsx}',
    '<rootDir>/src/app/api/**/*.{ts,tsx}',
    '<rootDir>/src/app/**/page.{js,ts,jsx,tsx}'
  ]
}

module.exports = createJestConfig(customJestConfig)
