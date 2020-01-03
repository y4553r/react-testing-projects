import { actionTypes } from '../actions';

/**
 * @function secretWordReducer
 * @param {string} - state of secret word
 * @param {object} - action sent to reducer
 * @returns {string} - new state (secret word payload from action)
 */
export default (state = null, action) => {
  switch(action.type) {
    case actionTypes.SET_SECRET_WORD:
      return action.payload;
    default:
      return state;
  }
}