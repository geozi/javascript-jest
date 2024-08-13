/**
 * The findDuplicates() method has 1 exit point, which
 * is always an array. Therefore, tests are differentiated
 * based on their input.
 */
const findDuplicates = require("../src/findDuplicates");

test("Input: array with duplicate numbers", () => {
  let arr = [1, 2, 2, 3, 3];
  expect(findDuplicates(arr).length).toEqual(2);
  expect(findDuplicates(arr)).toEqual([2, 3]);
});

test("Input: array without duplicate numbers", () => {
  let arr = [1, 2, 3];
  expect(findDuplicates(arr).length).toEqual(0);
  expect(findDuplicates(arr)).toEqual([]);
});

test("Input: array with duplicate strings", () => {
  let arr = ["glue", "morale", "glue", "food", "glance", "food", "essential"];
  expect(findDuplicates(arr).length).toEqual(2);
  expect(findDuplicates(arr)).toEqual(["glue", "food"]);
});

test("Input: array without duplicate strings", () => {
  let arr = ["glue", "morale", "food", "glance", "essential"];
  expect(findDuplicates(arr).length).toEqual(0);
  expect(findDuplicates(arr)).toEqual([]);
});

test("Input: mixed array with duplicate elements", () => {
  let arr = ["squirrel", 5, "cat", true, 5, "cat", undefined];
  expect(findDuplicates(arr).length).toEqual(2);
  expect(findDuplicates(arr)).toEqual([5, "cat"]);
});

test("Input: mixed array without duplicate elements", () => {
  let arr = ["squirrel", 5, true, undefined];
  expect(findDuplicates(arr).length).toEqual(0);
  expect(findDuplicates(arr)).toEqual([]);
});

test("Input: array with zero elements", () => {
  let arr = [];
  expect(findDuplicates(arr).length).toEqual(0);
  expect(findDuplicates(arr)).toEqual([]);
});
