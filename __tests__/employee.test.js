/**
 * The code under test is a simple class,
 * thus the tests will be state-based.
 */

const Employee = require("../src/employee");

test("Changing employee state: firstName", () => {
  let employee = new Employee("Alfredo", "Daniels", 27, "Assistant", "Madrid");
  employee.firstName = "Ramon";
  expect(employee.firstName).toEqual("Ramon");
});

test("Changing employee state: lastName", () => {
  let employee = new Employee("Katie", "Carr", 30, "Assistant Manager", "Rome");
  employee.lastName = "Richards";
  expect(employee.lastName).toEqual("Richards");
});

test("Changing employee state: age", () => {
  let employee = new Employee("Bennet", "Wolf", 31, "Assistant", "Athens");
  employee.age = 32;
  expect(employee.age).toEqual(32);
});

test("Changing employee state: position", () => {
  let employee = new Employee("Meghan", "Weiss", 35, "Assistant", "Athens");
  employee.position = "Team Leader";
  expect(employee.position).toEqual("Team Leader");
});

test("Changing employee state: office location", () => {
  let employee = new Employee("Ruben", "Walters", 25, "Intern", "Barcelona");
  employee.officeLocation = "Malaga";
  expect(employee.officeLocation).toEqual("Malaga");
});
