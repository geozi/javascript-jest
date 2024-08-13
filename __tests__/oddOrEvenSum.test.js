/**
 * The isEven() method has 1 exit point with
 * 2 possible outcomes: true or false. Therefore, the
 * number of tests must be at least 2, 1 per outcome.
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
