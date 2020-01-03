import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/testUtils';
import Jotto from './Jotto';

/**
 * Factory function to create a ShallowWrapper for the Jotto Component
 * @function setup
 * @param {object} initialState - Initial state for this setup.
 * @returns {ShallowWrapper}
 */
const setup = (initialState) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Jotto store={store} />).dive().dive();
  return wrapper;
}

describe('render', () => {
  test('renders without crashing', () => {
    const wrapper = setup();
    const app = findByTestAttr(wrapper, 'component-jotto');
  });
})
describe('redux props', () => {
  test('has access to `success` piece of state', () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });
  test('has access to `secretWord` piece of state', () => {
    const secretWord = 'party';
    const wrapper = setup({ secretWord });
    const secretWordProp = wrapper.instance().props.secretWord;
    expect(secretWordProp).toBe(secretWord);
  });
  test('has access to `guessedWords` piece of state', () => {
    const guessedWords = [
      { guessedWord: 'train', letterMatchCount: 3 },
    ];
    const wrapper = setup({ guessedWords });
    const guessedWordsProp = wrapper.instance().props.guessedWords;
    expect(guessedWordsProp).toEqual(guessedWords);
  });
  test('`getSecretWord` action creator is a function of prop', () => {
    const wrapper = setup();
    const getSecretWordProp = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  });
});