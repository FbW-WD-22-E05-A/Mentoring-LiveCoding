/**
 * Demo of the Array.prototype.map function
 * 
 * - The .map function requires a function as its only argument
 * - The function can be written inline, anonymously...
 * - ... or declared elsewhere and called by .map by name
 * - The original array is unchanged
 */


const array = [1, 4, 9, 16];

// pass a function to .map
const map1 = array.map(x => x * 2);
const map2 = array.map(mappingFunction)

console.log(map1);
// expected output: Array [2, 8, 18, 32]
console.log(map2);
// expected output: Array [3, 12, 27, 48]

// The original array is unchanged
console.log("array:", array);


// Function declarations are "hoisted". JavaScript prepares
// the function for use before it executes any other code,
// so function declarations can be placed after the code 
// that uses them.
function mappingFunction(x) {
  return x * 3
}