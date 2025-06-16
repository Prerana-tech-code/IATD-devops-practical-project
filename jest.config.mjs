/** @type {import('jest').Config} */
const config = {
  clearMocks: true,
  testMatch: ["**/tests/**/*.test.js"],
  testEnvironment: "node",
  transform: {}, // no Babel transform needed
};

export default config;
