/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  coverageProvider: "v8",
  moduleNameMapper: {
    "^#(.*)$": "<rootDir>/src/$1"
  },
  preset: "ts-jest",
  roots: [
    "<rootDir>/src"
  ],
};

module.exports = config;
