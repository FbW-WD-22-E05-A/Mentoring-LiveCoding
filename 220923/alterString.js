/**
 * Real life task that requires nested loops.
 * 
 * You are given an array of words which can be reordered
 * so that each word in the array differs by only one letter
 * from the word before it an after it. You are to write a
 * function which does this.
 * 
 * Create a new array which starts with the first word,
 * and add words from the input array to this new array
 * in the correct order.
 * 
 * Write your function to ensure that it works with the
 * short `failToPass` array, and then test that it is
 * generic by calling it with the `secondArray`.
 */

const failToPass = [
"fail",
"pass",
"pall",
"pals",
"fall"
]

const secondArray = [
"chum",
"much",

"chin",
"chug",
"cock",
"coin",
"cork",
"corn",
"mock",
"muck",
"thin",
"this",
"thug",
"thus",
]


const result = oneLetterAtTime(secondArray)
console.log(result)
// ["fail", "fall", "pall", "pals", "pass"]


function oneLetterAtTime(array) {
  // create an output array
  const output = []
  // create variable for the first word: "fail"
  let current = array.shift()
  // add this variable to the output array ["fail"]
  output.push(current)
  

  
  for ( let ii = 0; ii < array.length; ii += 1 ) {
    // loop through the remaining items
    const candidate = array[ii]
  
    // To find a word with only one difference, create
    // a variable to count the differences
    let differences = 0
    // loop through the letters in each item

    for ( let jj = 0; jj < candidate.length; jj += 1 ) {
      if (current[jj] !== candidate[jj]) {
        // letters in the same place in the two words are
        // different: increment `differences`
        differences += 1
      }
    }
    // We have now compared all the letters in the two words

    // if the new word differs by only one letter...
    if (differences === 1) {
      // ...add it to output ["fail", "fall"]
      output.push(candidate)

      // reset the variable to the new word ("fail" —> "fall")
      current = candidate

      // remove the new word from the input array
      array.splice(ii, 1)

      // restart the ii loop from 0. To do this, we need
      // to set ii to -1 because the next action after the
      // loop completes will be `; ii += 1` in the for
      // statement
      ii = -1
    }
  }
  

  return output
  // ["fail", "fall", "pall", "pals", "pass"]
}
