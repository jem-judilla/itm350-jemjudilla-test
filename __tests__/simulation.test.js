const runSimulation = require('../src/simulation');

describe('Simulation tests', () => {
  test('should complete simulation successfully', () => {
    const result = runSimulation(10);  // Simulate a valid input
    expect(result).toBe(true);
  });

  // New test for error handling
  test('should fail simulation with invalid input', () => {
    const result = runSimulation(null);  // Simulate invalid input
    expect(result).toBe(false);
  });

  // New test for edge case
  test('should handle zero as input', () => {
    const result = runSimulation(0);  // Edge case: input is 0
    expect(result).toBe(true);  // Adjust expected output based on logic
  });

  // New test for large input
  test('should handle large input gracefully', () => {
    const result = runSimulation(1000000);  // Large input simulation
    expect(result).toBe(true);
  });
});

