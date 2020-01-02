
/**
 * @method getLetterMatchCount
 * @param {string} guessedWord - Guessed Word.
 * @param {string} secretWord - Secret Word.
 * @returns {number} - Number of letters matched between guessed word and secret word
 */
export function getLetterMatchCount(guessedWord, secretWord) {
  const guessedWordSet = new Set(guessedWord.split(''));
  const secretWordSet = new Set(secretWord.split(''));
  return [...guessedWordSet].filter(letter => secretWordSet.has(letter)).length;
}

// another verios of the algorithm
// export const getLetterMatchCount = (guessedWord, secretWord) => {
//   const freqSecretWordLetters = {};
//   for (let letter of secretWord)
//     freqSecretWordLetters[letter] = ++freqSecretWordLetters[letter] || 1;
//   let count = 0;
//   for (let letter of guessedWord) {
//     if (freqSecretWordLetters[letter]) {
//       delete freqSecretWordLetters[letter]
//       count++;
//     }
//   }
//   return count;
// }


