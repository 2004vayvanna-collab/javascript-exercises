// Step 1: Define the variables
const firstName = "Carlos"
const lastName = "Stevenson"
const thisYear = 1965
const birthYear = 1947

// Step 2: Create fullName and age
const fullName = firstName + " " + lastName
const age = thisYear - birthYear

// Step 3: Construct the greeting
const greeting = "Hello! My name is " + fullName + " and I am " + age + " years old."

// Do not change below this line
module.exports = {
  firstName: typeof firstName === 'undefined' ? undefined : firstName,
  lastName: typeof lastName === 'undefined' ? undefined : lastName,
  thisYear: typeof thisYear === 'undefined' ? undefined : thisYear,
  birthYear: typeof birthYear === 'undefined' ? undefined : birthYear,
  greeting: typeof greeting === 'undefined' ? undefined : greeting,
  fullName: typeof fullName === 'undefined' ? undefined : fullName,
  age: typeof age === 'undefined' ? undefined : age
}

