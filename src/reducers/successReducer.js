import { actionTypes } from '../actions';

/**
 * @function successReducer
 * @param {object} state - Current success state.
 * @param {object} action - action to be reduced.
 * @returns {object} - new success state
 */
export default (state = false, action) => {
  switch(action.type) {
    case actionTypes.CORRECT_GUESS:
      return true;
    default:
      return state;
  }
}