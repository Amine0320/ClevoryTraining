// testFile1.test.js
const { multiply, divide } = require('./calculator');

test('multiplie correctement deux nombres', () => {
  expect(multiply(2, 3)).toBe(6);
});
