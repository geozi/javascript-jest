/**
 * Checks if an array element is duplicate
 * @param {*} arr An array of elements
 * @param {*} el An element of the array
 * @returns true if the element is duplicate, false otherwise
 */
function isDuplicate(arr, el) {
  return arr.indexOf(el) !== arr.lastIndexOf(el);
}

/**
 * Searches for duplicate elements in an array
 * @param {*} arr An array of elements
 * @returns An array of length > 0 or length === 0.
 */
function findDuplicates(arr) {
  let duplicates = [];
  for (let el of arr) {
    if (isDuplicate(arr, el)) {
      if (!duplicates.includes(el)) {
        duplicates.push(el);
      }
    }
  }
  return duplicates;
}

module.exports = findDuplicates;
