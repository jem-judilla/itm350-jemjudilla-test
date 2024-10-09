const multiply = require('../src/data-driven.js');

test.each([
  [2, 3, 6],
  [4, 5, 20],
  [-2, -2, 4],
  [7, 0, 0]
])('multiplies %i and %i to get %i', (a, b, expected) => {
  expect(multiply(a, b)).toBe(expected);
});
