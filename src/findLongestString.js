/**
 * Compares the length of 2 strings. If the strings have
 * the same lengths, it compares them lexicographically.
 * @param {String} a The first string
 * @param {String} b The second string
 * @returns {Number} Returns 1 if the first string is greater, -1 if the first string is lesser. Otherwise, it returns 0.
 */
function compareFunction(a, b) {
  let result = 0;

  if (a.length === b.length) {
    if (a > b) {
      result = 1;
    } else {
      result = -1;
    }
  } else {
    if (a.length > b.length) {
      result = 1;
    } else {
      result = -1;
    }
  }

  return result;
}

/**
 * Finds the longest word in a string.
 * @param {String} str A string.
 * @returns {String} A string representing the longest word.
 */
function findLongestWordInString(str) {
  strLst = str.split(" ").sort(compareFunction);
  let n = strLst.length;
  console.log(strLst);
  return strLst[n - 1];
}

module.exports = findLongestWordInString;
