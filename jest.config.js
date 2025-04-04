/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\.tsx?$": ["ts-jest",{}],
  },
  testMatch: [
    "**/tests/**/*.[jt]s?(x)", // looks for any JS/TS files under any subdirectory of /tests
    "**/?(*.)+(spec|test).[tj]s?(x)" // default Jest pattern
  ],
};
