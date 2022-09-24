let word1 = ["The", "A"]
let word2 = ["tall", "smart", "green"]
let word3 = ["girl", "boy", "alien"]
let word4 = ["is"]
let word5 = ["here", "over there", "busy"]

let random1 = Math.floor(Math.random() * word1.length)
let random2 = Math.floor(Math.random() * word2.length)
let random3 = Math.floor(Math.random() * word3.length)
let random4 = Math.floor(Math.random() * word4.length)
let random5 = Math.floor(Math.random() * word5.length)

// console.log("random1:", random1);
// console.log("random2:", random2);
// console.log("random3:", random3);
// console.log("random4:", random4);
// console.log("random5:", random5);

let sentence = `${word1[random1]} ${word2[random2]} ${word3[random3]} ${word4[random4]} ${word5[random5]}`

console.log("sentence:", sentence);

