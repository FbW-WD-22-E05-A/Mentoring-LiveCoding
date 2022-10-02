/**
 * Parameters and variables set inside a function are only
 * accessible to the function itself. However, the function
 * can return another function that was declared within it.
 * 
 * This inner function has access to the "closure" created 
 * by its parent function, and can therefore access and
 * modify its sibling variables.
 */

function getSorinasFunction(password) {
  let counter = 0

  function sorina() {
    counter += 1
    return [counter, password]
  }

  return sorina
}

const cojocaru = getSorinasFunction("sorina's password")


for ( let ii = 0; ii < 5; ii += 1 ) {
  console.log("cojocaru():", cojocaru());
}


// // password is not directly accessible outside
// // getSorinasFunction() 
// console.log("password:", password); // will provoke an error
