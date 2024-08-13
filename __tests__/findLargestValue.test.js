/**
 * The findLargest() method has 1 exit point,
 * which is always a number. Thus, the tests
 * will be input-based: each test will have a
 * different input.
 */

const findLargest = require("../src/findLargestValue");

test("Input: positive numerical array", () => {
  expect(findLargest([60, 59, 7, 51, 98, 45, 5, 81, 74])).toBe(98);
});

test("Input: negative numerical array", () => {
  expect(findLargest([-55, -35, -79, -64, -42, -3, -27, -31, -81, -1])).toBe(
    -1
  );
});

test("Input: mixed numerical array test", () => {
  expect(findLargest([37, -43, 50, -46, 43, -12, -24])).toBe(50);
});

test("Input: empty array", () => {
  expect(findLargest([])).toBeUndefined();
});
