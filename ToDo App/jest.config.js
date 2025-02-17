module.exports = {
  testEnvironment: 'jest-environment-jsdom',  // Make sure to use Jsdom for DOM-related tests
  setupFilesAfterEnv: ['./jest.setup.js'],    // Correctly link your setup file
};