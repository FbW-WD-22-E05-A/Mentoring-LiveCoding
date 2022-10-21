// prototype

// Object.prototype.property = "value"

// { property: "value", key: "lock" } 

// Object.prototype.key = "lock"

// retrofit
// syntactic sugar

const array = [1, 2, 3, 4]
const array2 = [10,20, 30,40, 50]

Array.prototype.sum = function() {
  let total = 0
  for ( let ii = 0; ii < this.length; ii += 1 ) {
    total += this[ii]
  }
  
  return total
}

const result = array.sum()
console.log("result:", result);
console.log("array:", array);

console.log("[10,20, 30,40, 50].sum():", array2.sum());

