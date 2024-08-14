/**
 * Create a function that takes an array of strings and
 * returns an array with only the strings that have numbers
 * in them. If there are no strings containing numbers, return
 * an empty array.
 * Source: {@link https://edabit.com/challenge/eCPim4XcssdZdvs32}
 */

/**
 * Checks if a string token has/is a number
 * @param {String} str A string token
 * @returns true if the string token has/is a number, false otherwise
 */
function hasNumber(str) {
  let numberExists = false;
  for (let character of str) {
    if (character !== " " && character !== "") {
      if (isFinite(character)) {
        numberExists = true;
      }
    }
  }

  return numberExists;
}

/**
 * Checks if the elements of an array with string tokens
 * contain/are numbers.
 * @param {String[]} arr An array of string tokens
 * @returns An array of string tokens. If no numbers are found, an empty array.
 */
function numInStr(arr) {
  let arrWithNumbers = [];

  for (let str of arr) {
    if (hasNumber(str)) {
      arrWithNumbers.push(str);
    }
  }

  return arrWithNumbers;
}

module.exports = numInStr;
