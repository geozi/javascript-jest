const isPalindrome = require("../src/checkPalindromicity");

test("Valid input: characters only -> returns true", () => {
  let str = "madam";
  expect(isPalindrome(str)).toBe(true);
});

test("Valid input: numbers only -> returns true", () => {
  let str = "01233210";
  expect(isPalindrome(str)).toBe(true);
});

test("Valid input: mixed characters -> returns true", () => {
  let str = "1har1rah1";
  expect(isPalindrome(str)).toBe(true);
});

test("Invalid input: characters only -> returns false", () => {
  let str = "hello";
  expect(isPalindrome(str)).toBe(false);
});

test("Invalid input: numbers only -> returns false", () => {
  let str = "012345";
  expect(isPalindrome(str)).toBe(false);
});

test("Invalid input: mixed characters -> returns false", () => {
  let str = "r@nd0m12#";
  expect(isPalindrome(str)).toBe(false);
});

test("Valid input: white spaces only -> returns true", () => {
  let str = "    ";
  expect(isPalindrome(str)).toBe(true);
});

test("Valid input: empty string -> returns true", () => {
  let str = "";
  expect(isPalindrome(str)).toBe(true);
});

test("Invalid input: null -> throws error", () => {
  let str = null;
  expect(() => isPalindrome(str)).toThrow(TypeError);
});
