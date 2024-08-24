/**
 * Return-value tests.
 * The numInStr(arr) function has 1 exit point
 * with 2 possible outcomes: an array of string tokens
 * or an empty array. The tests are developed per input
 * and per outcome.
 */

const numInStr = require("..//src/numbersInStrings");

test("Input: array with mixed-character strings", () => {
  let arr = ["1a", "a", "2b", "b"];
  expect(numInStr(arr).length).toEqual(2);
  expect(numInStr(arr)).toEqual(["1a", "2b"]);
});

test("Input: array with letter-only strings", () => {
  let arr = ["abc", "bye", "morning", "cat", "gz"];
  expect(numInStr(arr).length).toEqual(0);
  expect(numInStr(arr)).toEqual([]);
});

test("Input: array with number-only strings", () => {
  let arr = ["123", "4351", "78", "8", "4445"];
  expect(numInStr(arr).length).toEqual(arr.length);
  expect(numInStr(arr)).toEqual(arr);
});

test("Input: array with phrases and mixed-character strings", () => {
  let arr = ["this is a test", "random1"];
  expect(numInStr(arr).length).toEqual(1);
  expect(numInStr(arr)).toEqual(["random1"]);
});

test("Input: array with whitespace-only or zero-length string tokens", () => {
  let arr = ["", " ", "    ", ""];
  expect(numInStr(arr).length).toEqual(0);
  expect(numInStr(arr)).toEqual([]);
});
