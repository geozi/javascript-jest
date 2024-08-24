/**
 * Return-value tests.
 * The reverseOdd(str : String) function always returns
 * a String. The test are developed per input.
 */

const reverseOdd = require("../src/reverseOddLengthWords");

test("Input: word of odd length", () => {
  let word = "Bananas";
  expect(reverseOdd(word)).toEqual("sananaB");
});

test("Input: words of odd length", () => {
  let words = "gfg geeks";
  expect(reverseOdd(words)).toEqual("gfg skeeg");
});

test("Input: word of even length", () => {
  let word = "this";
  expect(reverseOdd(word)).toEqual(word);
});

test("Input: words of even length", () => {
  let words = "Open sesame";
  expect(reverseOdd(words)).toEqual(words);
});

test("Input: words of mixed length", () => {
  let words = "One two three four";
  expect(reverseOdd(words)).toEqual("enO owt eerht four");
});

test("Input: word of zero length", () => {
  let word = "";
  expect(reverseOdd(word)).toEqual("");
});
