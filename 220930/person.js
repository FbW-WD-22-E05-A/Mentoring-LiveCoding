/**
 * A parent function can return an object which gives access
 * to multiple child functions and variables.
 */

function person(personalData) {
  const {firstName,lastName} = personalData

  function greeting() {
    console.log(`${fullName()} says hi!`)
  }

  function fullName() {
    return `${firstName} ${lastName}`
  }

  return {
    greeting,
    fullName
  }
}

const sorina = { firstName: "Sorina", lastName: "Cojocaru"}
const SorinaGreeting = person(sorina)
SorinaGreeting.greeting()

const james = { firstName: "James", lastName: "Newton"}
const JamesGreeting = person(james)
JamesGreeting.greeting()

console.log("JamesGreeting.fullName():", JamesGreeting.fullName());
