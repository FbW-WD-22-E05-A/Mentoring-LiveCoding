/**
 * Solution to
 * https://edabit.com/challenge/rms6xusZ3QeurapAW
 */

// Create a function that sums up all the elements in the array
// recursively. 
// recurAdd([1, 2, 3, 4, 10, 11]) ➞ 31
// recurAdd([-3, 4, 11, 10, 21, 32, -9]) ➞ 66
// recurAdd([-21, -7, 19, 3, 4, -8]) ➞ -10


// Recursive function to add the numbers in an array.

function recurAdd(array) {
  const number = array.shift()
  if (number === undefined) {
    return 0
  }

  return number + recurAdd(array)
}

// // Alternative solutions
// // 1. Passing a second argument with a default value of 0
// function recurAdd(array, sum=0) {
//   if (!array.length) {
//     return sum
//   }

//   sum = sum + array.shift()
//   return recurAdd(array, sum)
// }

// // 2. Using the ternary operator
// function recurAdd(array) {
//   const number = array.shift()
//   return number === undefined
//          ? 0
//          : number + recurAdd(array)
// }


// Single test
const result = recurAdd([1, 2, 3, 4, 10, 11])
console.log("result:", result); // 31


// Test suite
const testData = [
  { input: [1, 2, 3, 4, 10, 11],
    output: 31
  },
  { input: [-3, 4, 11, 10, 21, 32, -9],
    output: 66
  },
  { input: [-21, -7, 19, 3, 4, -8],
    output: -10
  }
]


testData.forEach(({input, output}) => {
  const result = recurAdd(input)
  const mark = result === output
             ? " ✅" : "❎"
  console.log(mark, "recurAdd(input) =", result, );
})


// Other solutions:
// https://edabit.com/challenge/rms6xusZ3QeurapAW