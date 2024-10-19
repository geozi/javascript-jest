const palindrome = require("../src/checkPalindromicity");

test("Valid input: characters only -> returns true", () => {
  let str = "madam";
  expect(palindrome(str)).toBe(true);
});

test("Valid input: numbers only -> returns true", () => {
  let str = "01233210";
  expect(palindrome(str)).toBe(true);
});

test("Valid input: mixed characters -> returns true", () => {
  let str = "1har1rah1";
  expect(palindrome(str)).toBe(true);
});

test("Invalid input: characters only -> returns false", () => {
  let str = "hello";
  expect(palindrome(str)).toBe(false);
});

test("Invalid input: numbers only -> returns false", () => {
  let str = "012345";
  expect(palindrome(str)).toBe(false);
});

test("Invalid input: mixed characters -> returns false", () => {
  let str = "r@nd0m12#";
  expect(palindrome(str)).toBe(false);
});

test("Valid input: white spaces only -> returns true", () => {
  let str = "    ";
  expect(palindrome(str)).toBe(true);
});

test("Valid input: empty string -> returns true", () => {
  let str = "";
  expect(palindrome(str)).toBe(true);
});

test("Invalid input: null -> throws error", () => {
  let str = null;
  expect(() => palindrome(str)).toThrow(TypeError);
});
