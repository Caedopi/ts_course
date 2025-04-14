/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\.tsx?$": ["ts-jest",{}],
  },
  testMatch: [
    "**/Project_01_Types/tests/**/*.[jt]s?(x)",
    "**/Project_02_Config/tests/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)" // default Jest pattern
  ],
};
