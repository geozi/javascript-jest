/**
 * Checks if an array of length n has any
 * missing number between 0 and n.
 * @param {Number[]} numbers
 * @returns True is there are missing number, false otherwise.
 */
function hasMissingNumbers(numbers) {
  let n = numbers.length;
  let numberSet = new Set(numbers);

  for (let i = 0; i <= n; i++) {
    if (!numberSet.has(i)) {
      return true;
    }
  }

  return false;
}

module.exports = hasMissingNumbers;
