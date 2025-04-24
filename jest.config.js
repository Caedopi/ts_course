/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: "ts-jest",
  rootDir: ".",
  testEnvironment: "node",
  transform: {
    "^.+\.tsx?$": ["ts-jest",{
      tsconfig: "./Project_02_Calculator/tsconfig.json"
    }]
  },
  testMatch: [
    "**/Project_01_Types/tests/**/*.[jt]s?(x)",
    "**/Project_02_Calculator/tests/**/*.[jt]s?(x)",
    "**/Project_03_Modules/tests/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)" // default Jest pattern
  ],
};
