module.exports = {
    displayName: 'qa-example',
    roots: ['<rootDir>/src'],
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts', '!**/node_modules/**'],
    testMatch: [
      '<rootDir>/src/tests/**/*.{ts,js}',
    ],
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': '@sucrase/jest-plugin',
    },
    transformIgnorePatterns: [
      '/node_modules/.*$',
    ],
    testTimeout: 30000, // We expect these tests to be long
    globalSetup: './setup.js',
    moduleFileExtensions: [
      'web.js',
      'js',
      'web.ts',
      'ts',
      'web.tsx',
      'tsx',
      'json',
      'web.jsx',
      'jsx',
      'node',
    ],
  }
  