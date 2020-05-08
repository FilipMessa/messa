const { resolve } = require('path');

module.exports = {
  preset: 'ts-jest',
  rootDir: '../',
  moduleNameMapper: {
    // ts path aliases
    '^@components/(.*)$': resolve(__dirname, '../src/components/$1'),
    '^@theme/(.*)$': resolve(__dirname, '../src/theme/$1'),
    '^@theme': resolve(__dirname, '../src/theme/index.ts'),
    '^@test-utils': resolve(__dirname, '../configs/test-utils.tsx'),
  },
  clearMocks: true,
  coverageDirectory: 'coverage',
  errorOnDeprecated: true,
  notify: true,
  notifyMode: 'failure-change',
  restoreMocks: true,
  setupFilesAfterEnv: ['./configs/jest.setup.ts'],
  testMatch: ['**/__tests__/**/*.(ts|tsx)'],
  testPathIgnorePatterns: ['/node_modules/'],
  // Setting this value to "fake" allows the use of fake timers for functions such as "setTimeout"
  timers: 'modern', // modern -> https://github.com/sinonjs/fake-timers
  verbose: true,
  transform: {
    '^.+\\.css$': 'jest-transform-css',
    '\\.(jpg|jpeg|png|gif|webp|svg)$': 'jest-transform-file',
  },
};
