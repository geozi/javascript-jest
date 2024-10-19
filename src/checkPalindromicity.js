/**
 * Checks if a string is a palindrome.
 * @param {String} str A sequence of characters.
 * @returns True if the string is a palindrome, false otherwise.
 */
function isPalindrome(str) {
  let n = str.length;
  for (let i = 0, j = n - 1; i < n; i++, j--) {
    if (str.charAt(i) !== str.charAt(j)) {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
