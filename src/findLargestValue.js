/**
 * Searches for the largest value in an array of numbers
 * @param {Number[]} arr An array of numbers
 * @returns The largest value in the array
 */
function findLargest(arr) {
  let maxValue = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }

  return maxValue;
}

module.exports = findLargest;
