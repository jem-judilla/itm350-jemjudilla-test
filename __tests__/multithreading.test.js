const processData = require('../src/multithreading');

test('processes data concurrently', async () => {
  const inputData = [1, 2, 3, 4, 5];
  const result = await Promise.all(inputData.map(data => processData(data)));

  expect(result).toHaveLength(5);
});
