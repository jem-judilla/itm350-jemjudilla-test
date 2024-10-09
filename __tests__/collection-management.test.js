const addItem = require('../src/collection-management.js');

test('adds an item to the list', () => {
  const list = [1, 2, 3];
  addItem(list, 4);
  expect(list).toContain(4);
});
