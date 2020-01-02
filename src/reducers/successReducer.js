import { actionTypes } from '../actions';

/**
 * @function successReducer
 * @param {object} state - Current success state.
 * @param {object} action - action to be reduced.
 * @returns {object} - new success state
 */
export default (state = {}, action) => {
  switch(action.type) {
    case actionTypes.CORRECT_GUESS:
      return { ...state, success: true };
    default:
      return state;
  }
}