
/* **11. XO**
Create a function that takes a string, checks if it has the same number of 'x's and 'o's 
and returns either true or false.

* Return a boolean value (true or false).
* The string can contain any character.
* When neither an x nor an o is in the string, return true.
Examples:
* isEqualNumXandO("ooxx") ➞ true
* isEqualNumXandO("xooxx") ➞ false
* isEqualNumXandO("ooxXm") ➞ true (case insensitive)
* isEqualNumXandO("zpzpzpp") ➞ true (returns true if no x and o)
* isEqualNumXandO("zzoo") ➞ false

for loop that iterates throught the stringslegth and checks for
characters o and x 
if both x and z found return true x&&z
when neither are are found !&& return true
 */

// function isEqualNumXandO(string) {
//   let os = 0;
//   let xs = 0;

//   for (i = 0; i < string.length; i++) {
//     if (string[i].toLowerCase() == "o") {
//       os++;
//     }
//     if (string[i].toLowerCase() == "x") {
//       xs++;
//     }
//   }

//   return os == xs;
// }

// // string[ii] == "o" << true  | false
// // string[ii] == "x" << false | true
// // true && false —> false

function isEqualNumXandO(string) {
  let os = 0; // jar for counting beads
  let xs = 0;
  let char

  for (let i = 0; i < string.length; i++) {
    char = string[i].toLowerCase()
    os += (char == "o") // true (1) | false (0)
    xs += (char == "x") // true (1) | false (0)
  }

  return os == xs;
}


const examples = [
  "ooxx",
  "xooxx",
  "ooxXm",
  "zpzpzpp",
  "zzoo"
]
const expected = [
  true,
  false,
  true,
  true,
  false
]


for ( let ii = 0; ii < examples.length; ii += 1 ) {
  let string = examples[ii]
  let result = isEqualNumXandO(string)
  console.log("string:", string)
  console.log("result:", result);
  console.log("result === expected[ii]:", result === expected[ii] ? "right" : "wrong");
}

// console.log(isEqualNumXandO("xooxx"));