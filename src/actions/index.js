export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
};

/**
 * Returns redux thunk function that dispatched guess_word action
 *  and (conditionally) correct_guess action
 * @function guessWord
 * @param {string} guessedWord - Guessed Word
 * @returns {function} - redux thunk function
 */
export const guessWord = (guessedWord) => {
  return function (dispatch, getState) {

  };
};