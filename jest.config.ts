
export default {
  roots: ['<rootDir>/src'],
  collectCoverage: true,
  colletcCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-test'
  }
}
