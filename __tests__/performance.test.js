const slowFunction = require('../src/performance');

test('completes within 500ms', async () => {
  jest.setTimeout(500);
  await slowFunction();
});
