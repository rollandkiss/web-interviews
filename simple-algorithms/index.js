console.clear();

// Find the maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  return num2; // Achtung, wenn sie gleichgroß sind, dann wird num2 ausgegeben
}
console.log(maxOfTwoNumbers(5, 5));
// SUCCESS!

// Execution Plan - Find the maximum
// 01: num1 wird mit num2 verglichen um die größere der beiden Zahlen festzustellen
// 02: rückgabe/ausgabe der größeren zahl

// Find the longest word
const words = ["Jaws", "Up", "Alien", "Gravity", "Inception", "Psycho"];

function findLongestWord(words) {
  let longWord = "";
  words.forEach((element) => {
    if (element.length > longWord.length) {
      longWord = element;
    }
  });
  return longWord;
}

console.log(findLongestWord(words));
// SUCCESS!

// Execution Plan - Find the longest word
// 01: selektiere das erste wort des array
// 02: vergleiche die länge des wortes mit einem vergleichswort => initial "leerstring"
// 03: speichere das wort in einer variablen wenn es länger ist als das vergleichswort
// 04: wiederhole den vorgang für jeden eintrag im array
// 05: gib das wort welches in der variablen gespeichert ist zurück (ausgabe)

// Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let numOps = null;
  numbers.forEach((element) => {
    if (!isNaN(element)) {
      numOps = numOps + element;
    }
  });
  return numOps;
}

console.log(sumNumbers(numbers));
// SUCCESS!

// Execution Plan - Calculate the sum
// 01: benutze array methoden um durch den vollständigen array zu durchlaufen
// 02: selektiere den aktuellen wert und addiere ihn in einer variablen hinzu
// 03: gib den finalen wert aus (ausgabe)

// Calculate the average length of the words
const words2 = [
  "eclipse",
  "harmony",
  "cascade",
  "labyrinth",
  "quartz",
  "serendipity",
  "zenith",
  "ephemeral",
  "vortex",
  "mystique",
];
// const words7 = ["alter", "falter"]; // expected 5.5

function averageWordLength(words) {
  const countWords = words.length;
  let sumWords = null;
  words.forEach((element) => {
    sumWords = sumWords + element.length;
  });
  return sumWords / countWords;
}

console.log(averageWordLength(words2));
// SUCCESS!

// Execution Plan - Calculate the average length of the words
// 01: benutze array methoden um jedes element des arrays zu durchlaufen
// 02: speichere dir zu beginn die gesamte anzahl aller einträge des array in einer variablen (array-länge)
// 03: lese die länge jedes array elements aus und summiere diese auf
// 04: teile die summe mit dem an anfang gespeicherten array-länge um den durchschnittswert zu erhalten
// 05: gib den durchschnittswert aus

// Unique arrays - return an array without duplicates
const words3 = [
  "crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring",
];

function uniquifyArray(words) {
  let compareArray = [];

  words.forEach((element) => {
    if (!compareArray.includes(element)) {
      compareArray.push(element);
    }
  });
  return compareArray;
}

console.log(uniquifyArray(words3));

// Execution Plan - Unique arrays - return an array without duplicates
// 01: benutze array methoden um jedes element des arrays zu durchlaufen
// 02: lege einen neuen leeren array an um werte aus dem ausgangsarray darin abzuspeichern
// 03: schaue ob der aktuelle array-wert bereits in dem neuen/leeren array bereits vorhanden ist
// 04: wenn der wert ncoh nciht vorhanden ist, dann hinzufügen
// 05: gebe den vergleichsarray aus

// Find elements
const wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(haystack, needle) {
  if (haystack.includes(needle)) {
    return `The word "${needle}" included in array on position ${
      haystack.indexOf(needle) + 1
    }`;
  }
  return `Word not included in array`;
}

console.log(doesWordExist(wordsFind, "trouble"));

// Execution Plan - Find elements
// 01: benutze array methoden um durch jedes element des array zu durchlaufen
// 02: übergib 2 argumente: (1) wörter die zu durchsuchen sind und (2) das wort nach dem gesucht wird
// 03: benutze die include methode um zu prüfen ob das wort enthalten ist
// 04: benutze die indexOf methode um die stelle zu identifizieren
// 05: bei misserfolg gib eine fehlermeldung aus
// 06: bei erfolg gib die stelle an der das wort gefunden wurde und das wort zurück

// Count repetition
const wordsCount = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter",
];

function howManyTimes(haystack, needle) {
  return `The word "${needle}" exists ${
    haystack.filter((word) => needle === word).length
  } in the array`;
}

console.log(howManyTimes(wordsCount, "matter")); // für "matter" wird rückgabe 3 erwartet

// Execution Plan - Count repetition
// 01: benutze array methoden um durch jedes element des array zu durchlaufen
// 02: benutze filter um alle gesuchten elemente in einem neuen array zurückzuerhalten
// 03: bestimme mit length die länge des array um die anzahl der wortfunde zurückzuerhalten
// 04: gib für das wort die anzahl zurück (ausgabe)

// Bonus: A generic sum function
// for strings use the length of the string, for booleans use 1 and 0
const mixedArray = [
  "apple",
  "banana",
  "cherry",
  "date",
  42,
  7,
  1995,
  23,
  true,
  false,
];

function sum(array) {
  let numberSum = 0;
  array.forEach((element) => {
    if (typeof element === "string") {
      numberSum = numberSum + element.length;
    }
    if (typeof element === "number") {
      numberSum = numberSum + element;
    }
    if (typeof element === "boolean") {
      if (element) {
        numberSum = numberSum + 1;
      }
    }
  });
  return numberSum;
}

console.log(sum(mixedArray));

// Bonus: Write a function that calculates the greatest product of four
// numbers that is either horizontally or vertically in the array
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [
    49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62,
    0,
  ],
  [
    81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36,
    65,
  ],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [
    22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13,
    80,
  ],
  [
    24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12,
    50,
  ],
  [
    32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64,
    70,
  ],
  [
    67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94,
    21,
  ],
  [
    24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63,
    72,
  ],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [
    16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85,
    57,
  ],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [
    19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55,
    40,
  ],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [
    88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53,
    69,
  ],
  [
    4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76,
    36,
  ],
  [
    20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36,
    16,
  ],
  [
    20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5,
    54,
  ],
  [
    1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67,
    48,
  ],
];

function greatestProduct(matrix) {
  // TODO:
}

module.exports = {
  maxOfTwoNumbers,
  findLongestWord,
  sumNumbers,
  averageWordLength,
  uniquifyArray,
  doesWordExist,
  howManyTimes,
  sum,
  greatestProduct,
};
