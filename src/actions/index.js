import { getLetterMatchCount } from '../helpers/index';

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
};

/**
 * Returns redux thunk function that dispatches GUESS_WORD action
 *  and (conditionally) CORRECT_GUESS action
 * @function guessWord
 * @param {string} guessedWord - Guessed Word
 * @returns {function} - redux thunk function
 */
export const guessWord = (guessedWord) => {
  return function (dispatch, getState) {
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);
    const newGuessedWord = { guessedWord, letterMatchCount };
    dispatch({ type: actionTypes.GUESS_WORD, payload: newGuessedWord });
    if(guessedWord === secretWord)
      dispatch({ type: actionTypes.CORRECT_GUESS });
  };
};