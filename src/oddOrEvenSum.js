/**
 * Extracts the digits of a number and
 * calculates their sum.
 * @param {Number} number A value of type Number
 * @returns The sum of all the number's digits
 */
function sumDigits(number) {
  let total = 0;
  while (number > 0) {
    total += number % 10;
    number = Math.floor(number / 10);
  }

  return total;
}

/**
 * Checks if the sum of a number's digits is even or odd
 * @param {Number} number A value of type Number
 * @returns true if the sum of all the number's digits is even, otherwise false.
 */
function isEven(number) {
  return sumDigits(number) % 2 === 0;
}

module.exports = isEven;
