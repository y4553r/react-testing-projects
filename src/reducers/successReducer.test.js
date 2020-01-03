import { actionTypes } from '../actions';
import successReducer from './successReducer';

test('returns default initial state of `false` when no action is passed', () => {
  const initialState = false;
  const newState = successReducer(initialState, {});
  expect(newState).toEqual(false);
});
test('returns state of `true` upon receiving and action of type `CORRECT_GUESS`', () => {
  const initialState = false;
  const action = { type: actionTypes.CORRECT_GUESS };
  const newState = successReducer(initialState, action);
  expect(newState).toEqual(true);
});