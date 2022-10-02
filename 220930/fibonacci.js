/**
 * Using recursion to generate an array of n Fibonacci nbers
 */
console.clear();

function fibonacci(n){
    if(!n) return [0];
    
    if(n == 1) {
      return [0,1];
    }

    const arr = fibonacci(n - 1); // f(9) -> f(8)...f(1)

    // add last two numbers in array to get the next value
    const next = arr[n - 1] + arr[n - 2]
    arr.push(next)

    return arr
    
    // // In one line:
    // return [...arr, arr[n - 1] + arr[n - 2]];
}

console.log("fibonacci(0):", fibonacci(0));
console.log("fibonacci(10):", fibonacci(10));