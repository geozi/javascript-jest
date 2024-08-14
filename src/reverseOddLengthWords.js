/**
 * Given a string, reverse all the words
 * which have odd length.The even length
 * words are not changed.
 * Source: {@link https://edabit.com/challenge/yYfQoo6rkMezauG77}
 */

/**
 * Checks if the length of a String is odd or even
 * @param {Number} strLength The length of a String
 * @returns true if the length of the inserted String is odd, false otherwise
 */
function isOdd(strLength) {
  return strLength % 2 !== 0;
}

/**
 * Reverses any words of odd length found in the String.
 * @param {String} str A String with a varying number of words
 * @returns A String of equal length
 */
function reverseOdd(str) {
  let tokens = str.split(" ");
  for (let i = 0; i < tokens.length; i++) {
    if (isOdd(tokens[i].length)) {
      tokens[i] = tokens[i].split("").reverse().join("");
    }
  }

  return tokens.join(" ");
}

module.exports = reverseOdd;
