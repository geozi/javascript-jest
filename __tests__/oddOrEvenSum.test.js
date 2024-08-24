/**
 * Return-value tests.
 * The isEven(number : Number) method has 1 exit point with
 * 2 possible outcomes: true or false. The tests are
 * developed per outcome.
 */

const isEven = require("..//src/oddOrEvenSum");

test("Input: numbers whose digit sum is odd", () => {
  let oddSumNumbers = [43, 333, 9101, 2344];

  for (let number of oddSumNumbers) {
    expect(isEven(number)).toBeFalsy();
  }
});

test("Input: numbers whose digit sum is even", () => {
  let evenSumNumbers = [4433, 2468, 1357, 8901, 4321];

  for (let number of evenSumNumbers) {
    expect(isEven(number)).toBeTruthy();
  }
});
