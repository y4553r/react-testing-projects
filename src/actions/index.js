import axios from 'axios';

import { getLetterMatchCount } from '../helpers/index';

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
  SET_SECRET_WORD: 'SET_SECRET_WORD',
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
    if (guessedWord === secretWord)
      dispatch({ type: actionTypes.CORRECT_GUESS });
  };
};

/**
 * @function getSecretWord
 * @returns {function} - thunk middleware
 */
export const getSecretWord = () => {
  return dispatch => {
    return axios.get('http://localhost:3030')
      .then((response) => {
        dispatch({ type: actionTypes.SET_SECRET_WORD, payload: response.data });
      });
  }
}