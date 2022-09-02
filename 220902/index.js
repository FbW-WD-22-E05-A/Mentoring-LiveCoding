const names = ["Abby", "Zac", "Bob", "Charlie"]
const sorted = names.sort()
console.log("sorted:", sorted);

if (names[1] === "Zac") {
  console.log("names was NOT sorted")
}

const specialLetters = ["A", "B"]

// const name = names[0]
// name = names[1]

let ii = 0
do { // block
  const name = names[ii]
  
  if (specialLetters.includes(name[0])) {
    console.log("name starts with A or B")
  } else {
    console.log("name does not start with A or B")
  }

  console.log(name)
  ii++
} while (ii < names.length)


/* ages = {
  "Abby": 3,
  "Zac": 3,
  "Bob": 3,
  "Charlie": 3
}
*/

// names[0] // 1, 2, 3
// for (let ii = 0; ii < names.length; ii++) {
//   console.log(names[ii])
// }
