const isPositive = require('../src/pass-fail.js');

test('returns true for positive numbers', () => {
  expect(isPositive(5)).toBe(true);
});

test('returns false for negative and zero numbers', () => {
  expect(isPositive(-1)).toBe(false);
  expect(isPositive(0)).toBe(false);
});