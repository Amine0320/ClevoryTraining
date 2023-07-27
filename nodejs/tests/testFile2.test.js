// testFile2.test.js
const { multiply, divide } = require('./calculator');

test('divise correctement deux nombres', () => {
  expect(divide(6, 3)).toBe(2);
});
