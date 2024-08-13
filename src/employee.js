/**
 * The {@link Employee} class is
 * an abstract representation of a
 * company employee.
 */
class Employee {
  #firstName;
  #lastName;
  #age;
  #position;
  #officeLocation;

  // Constructor

  /**
   * Creates an Employee object in memory with
   * user-supplied values
   * @param {String} firstName The employee's firstName
   * @param {String} lastName The employee's lastName
   * @param {Number} age The employee's age
   * @param {String} position The employee's position
   * @param {String} officeLocation The employee's office location
   */
  constructor(firstName, lastName, age, position, officeLocation) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#age = age;
    this.#position = position;
    this.#officeLocation = officeLocation;
  }

  // Setters

  set firstName(firstName) {
    this.#firstName = firstName;
  }

  set lastName(lastName) {
    this.#lastName = lastName;
  }

  set age(age) {
    this.#age = age;
  }

  set position(position) {
    this.#position = position;
  }

  set officeLocation(officeLocation) {
    this.#officeLocation = officeLocation;
  }

  // Getters

  get firstName() {
    return this.#firstName;
  }

  get lastName() {
    return this.#lastName;
  }

  get age() {
    return this.#age;
  }

  get position() {
    return this.#position;
  }

  get officeLocation() {
    return this.#officeLocation;
  }
}

module.exports = Employee;
