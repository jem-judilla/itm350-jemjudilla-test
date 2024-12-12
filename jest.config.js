module.exports = {
  collectCoverage: true,
  coverageReporters: ["json-summary", "lcov", "text", "clover"],
  coverageDirectory: "coverage",
  coverageThreshold: {
    global: {
      lines: 25
    },
    "./src/**/*.js": {
      lines: 25
    }
  }
};
