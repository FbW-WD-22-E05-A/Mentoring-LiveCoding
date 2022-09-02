/**
 * Task: check if the (badly-written) sentences...
 * 
 *   "red rum,sir ,is murder"
 * 
 * ... and...
 * 
 *   "red rum, sir, is murder"
 * 
 * ... contains the word "sir".
 * 
 * Possible solution 1:
 * 
 *   Split the (string) sentence into an array using a space (" ")
 *   as the delimiter.
 *   Problem: this will create items that contain commas:
 *     "rum,sir" and "sir,"
 * 
 * Possible solution 2:
 * 
 *   Split the (string) sentence into an array using a comma (",")
 *   as the delimiter.
 *   Problem: this will create items containing spaces:
 *     "sir " and " sir"
 */

const sentence = "red rum,sir ,is murder"
const splitS = sentence.split(/ |,/)

for (let ii = 0; ii < splitS.length; ii++) {
  const word = splitS[ii]
  
  if (word.includes(",")) {
    splitS[ii] = word.slice(0, word.length - 1)
  }
}
console.log(splitS.includes('sir'));



// Bonus solution: Use a Regular Expression to split the sentence:
//
// const sentence = "red rum,sir ,is murder"
// const splitS = sentence.split(/ |,/)
// 
// The regex (REGular EXpression) / |,/ looks for occurences of
// space (" ") or (|) comma (","):
//
// splitS = [ "red", "rum", "sir",  "", "is", "murder" ]
// 
// Note that the string " ," is split in two places: once at the
// space, once at the comma. This leads to an empty string ("")
// in the array.

/**** Regular Expressions are not part of the DCI curriculum ****/
