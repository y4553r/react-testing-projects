import React from 'react';
import { shallow } from 'enzyme';

import Input from './Input';
import { findByTestAttr, storeFactory } from '../../test/testUtils';

/**
 * Factory function to create a ShallowWrapper for the Input Component
 * @function setup
 * @param {object} initialState - Initial state for this setup.
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />).dive().dive();
  return wrapper;
}

describe('render', () => {
  describe('word has not been guessed', () => {
    test('renders component without error', () => {
      // const component = setup();
    });
    test('renders the input box', () => {

    });
    test('renders the submit button', () => {

    });
  });
  describe('word has been guessed', () => {

  });
});
describe('update state', () => {
  test('renders component without error', () => {

  });
  test('does not render the input box', () => {

  });
  test('does not render the submit button', () => {

  });
});