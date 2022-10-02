/**
 * Check if a word or phrase can be read forwards and backwards,
 * giving the exact same meaning.
 */

// isPalindrome() only works with the special case where
// the exact same characters (case-sensitive) are found
// in the same order. Punctuation and spaces must match.
function isPalindrome(word) {
  if (word[0] !== word.slice(-1)) {
    // The first and last letter are different
    return false
  }

  // Remove the first and last letter
  const trimmedWord = word.slice(1, -1)
  if (trimmedWord.length < 2) {
    // Of 0 or 1 letters remain, then the original
    // word was a palindrome
    return true
  }

  // Recursive call, without the first and last letter
  return isPalindrome(trimmedWord)
}


// isPalindrome() requires only same-case letters
// (no punctuation, spaces or mixed case)
// getRawPhrase() pre-processes a more complex 
// phrase so that isPalindrome() can handle it.
function getRawPhrase(phrase) {
  const lowPhrase = phrase.toLowerCase()

  // Remove all non-letter characters
  const lowChars  = lowPhrase.split("")
  const alphabet ="abcdefghijklmnopqrstuvwyxz"
  const lettersOnly = lowChars.filter(char => {
    return alphabet.includes(char)
  })
  const rawPhrase = lettersOnly.join("")

  return rawPhrase
}


const palindromes = [
  // NOT PALINDROMES
  "This is not a palindrome.",
  "streets",
  "detected",
  "foolproof",
  "redeemer",
  "marjoram",

  // GOOD PALINDROMES
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
  "bird rib",
  "taco cat",
  "UFO tofu",
  "Borrow or rob?",
  "Never odd or even.",
  "We panic in a pew.",
  "Won’t lovers revolt now?",
  "Ma is a nun, as I am.",
  "Don’t nod.",
  "Sir, I demand, I am a maid named Iris.",
  "Was it a car or a cat I saw?",
  "Yo, Banana Boy!",
  "Eva, can I see bees in a cave?",
  "Madam, in Eden, I’m Adam.",
  "A man, a plan, a canal, Panama!",
  "Never a foot too far, even.",
  "Red roses run no risk, sir, on Nurse’s order.",
  "He lived as a devil, eh?",
  "Ned, I am a maiden.",
  "Now, sir, a war is won!",
  "Evade me, Dave!",
  "Dennis and Edna sinned.",
  "Step on no pets!",
  "Able was I ere I saw Elba."
]


palindromes.forEach(phrase => {
  const rawPhrase = getRawPhrase(phrase)
  // console.log("")
  // console.log("rawPhrase:", rawPhrase);
  console.log(phrase, isPalindrome(rawPhrase));
})