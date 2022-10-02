/**
 * Simple cases: single word palindromes, all in lower case
 */
const palindromes = [
  "cake",
  "streets",
  //
  "kayak",
  "deified",
  "rotator",
  "repaper",
  "deed",
]

palindromes.forEach(
  (phrase) => {
    const result = isPalindrome(phrase)
    console.log(phrase, ":", result);
  }
)

// depth is not necessary. It is included here only
// so that you can see how many times isPalindrome
// has called itself, when you step through the code
// in the Debugger
function isPalindrome(word, depth=0) {
  if (word.length < 2) {
    return true
  }

  if (word[0] !== word.slice(-1)) {
    return false
  }

  word = word.slice(1, -1)
  return isPalindrome(word, depth+1)
}

// console.log("cake:", isPalindrome("cake"));
// console.log("streets:", isPalindrome("streets"));
// console.log("kayak:", isPalindrome("kayak"));



// "civic",
// "racecar",
// "level",
// "mom",
  // "bird rib",
  // "taco cat",
  // "UFO tofu",
  // "Borrow or rob?",
  // "Never odd or even.",
  // "We panic in a pew.",
  // "Won’t lovers revolt now?",
  // "Ma is a nun, as I am.",
  // "Don’t nod.",
  // "Sir, I demand, I am a maid named Iris.",
  // "Was it a car or a cat I saw? ",
  // "Yo, Banana Boy! ",
  // "Eva, can I see bees in a cave?",
  // "Madam, in Eden, I’m Adam. ",
  // "A man, a plan, a canal, Panama!",
  // "Never a foot too far, even. ",
  // "Red roses run no risk, sir, on Nurse’s order. ",
  // "He lived as a devil, eh?",
  // "Ned, I am a maiden. ",
  // "Now, sir, a war is won!",
  // "Evade me, Dave!",
  // "Dennis and Edna sinned. ",
  // "Step on no pets!"


  function getPalindromes() {
    return [
    "cake",
    "streets",
    "kayak",
    "deified",
    "rotator",
    "repaper",
    "deed",
    "peep",
    "wow",
    "noon",
    "civic",
    "racecar",
    "level",
    "mom",
  ]
}