/** @type {import('jest').Config} */
const config = {
  clearMocks: true,
  testMatch: ["**/tests/**/*.test.js"],
  testEnvironment: "node",
  transform: {}, // no Babel transform needed

  reporters: ["github-actions"], //  This line enables annotations
};
export default config;
