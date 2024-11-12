/**
 * Return-value tests, developed per input.
 */
const findLongestString = require("../src/findLongestString");

describe("Positive scenarios", () => {
  test("Input: empty string", () => {
    let str = "";
    expect(findLongestString(str)).toBe("");
  });

  test("Input: white-spaced string", () => {
    let str = "   ";
    expect(findLongestString(str)).toBe("");
  });

  test("Input: one-word string", () => {
    let str = "building";
    expect(findLongestString(str)).toBe("building");
  });

  test("Input: multi-word string with different-length words", () => {
    let str = "Hello magnificent word";
    expect(findLongestString(str)).toBe("magnificent");
  });

  test("Input: multi-word string with same-length words", () => {
    let str = "Dog Hat Cat";
    expect(findLongestString(str)).toBe("Hat");
  });
});

describe("Negative scenarios", () => {
  test("Input: undefined", () => {
    let str = undefined;
    expect(() => findLongestString(str)).toThrow(TypeError);
  });

  test("Input: null", () => {
    let str = null;
    expect(() => findLongestString(str)).toThrow(TypeError);
  });

  test("Input: number", () => {
    let str = 12;
    expect(() => findLongestString(str)).toThrow(TypeError);
  });

  test("Input: boolean", () => {
    let str = true;
    expect(() => findLongestString(str)).toThrow(TypeError);
  });
});
