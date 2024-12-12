module.exports = {
  collectCoverage: true,
  coverageReporters: ["json-summary", "lcov", "text", "clover"],
  coverageDirectory: "coverage",
  coverageThreshold: {
    './src/*.js': {
      lines: 80
    }
  }
}