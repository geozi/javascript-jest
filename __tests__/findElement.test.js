/**
 * Return-value tests.
 * The findElement(arr, el) method has 1 exit point
 * with 2 different outcomes: true or false.
 * The tests are developed per outcome and per input.
 */

const find = require("../src/findElement");

test("Value in numerical array -> returns true", () => {
  let arr = [3, 33, 7, 48, 94, 13, 15, 52, 17];
  expect(find(arr, 7)).toBe(true);
});

test("Value not in numerical array -> returns false", () => {
  let arr = [79, 90, 45, 2, 61, 3, 36, 67, 62];
  expect(find(arr, 0)).toBe(false);
});

test("Value in string array -> returns true", () => {
  let arr = ["Monday", "house", "series", "by", "hello"];
  expect(find(arr, "by")).toBe(true);
});

test("Value not in string array -> returns false", () => {
  let arr = ["class", "morning", "routine", "cat"];
  expect(find(arr, "dog")).toBe(false);
});

test("Value in mixed array -> returns true", () => {
  let arr = ["cat", true, undefined, 10, 3, "peach"];
  expect(find(arr, undefined)).toBe(true);
});

test("Value not in mixed array -> returns false", () => {
  let arr = ["tree", "ball", 2, false, 1];
  expect(find(arr, undefined)).toBe(false);
});

test("Empty array -> returns false", () => {
  let arr = [];
  expect(find(arr, 3)).toBe(false);
});
