const words = [
  "Anna",
  "Anne",
  "civic",
  "civil",
  "kayak",
  "cake",
  "level",
  "lever"
]

// const palindromes = []

for (ii = 0; ii < words.length; ii++ ) { 
  const word = words[ii]
  const lower = word.toLowerCase()
  const reverse = lower.split("")
                       .reverse()
                       .join("")

  if (lower === reverse) {
    // palindromes.push(word)
    console.log(word) //, "is a palindrome");
  }
}

// console.log("palindromes:", palindromes);


