/**
 * Searches for an element in an array
 * @param {*} arr An array of elements
 * @param {*} el The element under search
 * @returns true if the element is in the array, false otherwise
 */
function find(arr, el) {
  return arr.includes(el);
}

module.exports = find;
