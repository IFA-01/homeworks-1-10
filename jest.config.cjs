module.exports = {
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    'HW07/script.js',
    '!**/*.test.js',
    '!**/node_modules/**',
  ],
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
      lines: 60,
      statements: 60,
    },
  },
};
