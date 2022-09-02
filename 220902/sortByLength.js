// take the names array
// create a new empty sorted array
// use a loop to step through items in the names array
// if the current name is longer than 3 put it at the end of the sorted array
// if not, put it at the beginning

// const names = ["Abby", "Zac", "Bob", "Charlie"]

// const sorted >>> ["Bob", "Zac", "Abby", "Charlie"]


const names = ["Abby", "Zac", "Bob", "Charlie"]
const sorted = []

for ( let ii = 0; ii < names.length; ii += 1 ) {
  const name = names[ii]
  if (name.length > 3) {
    sorted.push(name)  // [ ] <=
  } else {
    sorted.unshift(name) // => [ ]
  }
}

console.log("sorted:", sorted);


