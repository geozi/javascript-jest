/**
 * Return-value tests.
 * The hasMissingNumbers(numbers) method has 2 exit points,
 * depending on whether the result is false or true. The tests
 * are developed per input.
 */
const hasMissingNumbers = require("../src/checkForMissingNumbers");

describe("Input: ", () => {
  test("sorted integer array with unique elements -> returns true", () => {
    let numbers = [0, 1, 2, 3, 4, 5];
    expect(hasMissingNumbers(numbers)).toBe(true);
  });

  test("sorted integer array with duplicate elements -> returns true", () => {
    let numbers = [0, 1, 1, 2, 3, 3, 4, 6, 6];
    expect(hasMissingNumbers(numbers)).toBe(true);
  });

  test("unsorted integer array with unique elements -> returns true", () => {
    let numbers = [0, 3, 1];
    expect(hasMissingNumbers(numbers)).toBe(true);
  });

  test("unsorted integer array with duplicate elements -> returns true", () => {
    let numbers = [2, 4, 0, 1, 1, 2, 2, 4, 6, 7];
    expect(hasMissingNumbers(numbers)).toBe(true);
  });

  test("empty array -> returns true", () => {
    let numbers = [];
    expect(hasMissingNumbers(numbers)).toBe(true);
  });

  test("undefined array -> throws TypeError", () => {
    let numbers = undefined;
    expect(() => hasMissingNumbers(numbers).toThrow(TypeError));
  });

  test("null array -> throws TypeError", () => {
    let numbers = null;
    expect(() => hasMissingNumbers(numbers).toThrow(TypeError));
  });
});
