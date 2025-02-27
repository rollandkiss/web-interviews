const words = ["Jaws", "Up", "Alien", "Gravity", "Inception", "Psycho"];

function findLongestWord(words) {
  let lWord = "";
  words.forEach((element) => {
    if (lWord.length < element.length) {
      lWord = element;
    }
  });
  return lWord;
}

console.log(findLongestWord(words));

// Execution Plan:
// step 0: create a variable and name it longestWord and initialize it to an empty string longestWord = 'Inception' => 9
// step 1: using an array method to visit all words in the words array
// step 2: use length property to find how long each word is Psycho => 6
// step 3: if the length of the current word is larger than the longestWord, then update the longestWord variable
// step 4: return longestWord
