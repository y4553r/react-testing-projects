import React from 'react';
import { shallow } from 'enzyme';

import Input, { UnconnectedInput } from './Input';
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
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });
    test('renders component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });
    test('renders the input box', () => {
      const input = findByTestAttr(wrapper, 'input-box');
      expect(input.length).toBe(1);
    });
    test('renders the submit button', () => {
      const button = findByTestAttr(wrapper, 'submit-button');
      expect(button.length).toBe(1);
    });
  });
  describe('word has been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initalState = { success: true };
      wrapper = setup(initalState);
    });
    test('renders component without error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });
    test('does not render input box when success is `true`', () => {
      const input = findByTestAttr(wrapper, 'input-box');
      expect(input.length).toBe(0);
    })
    test('does not render button when success is `true`', () => {
      const button = findByTestAttr(wrapper, 'submit-button');
      expect(button.length).toBe(0);
    })
  });
});
describe('redux props', () => {
  test('has `success` piece of state as prop', () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });
  test('`guesWord` action creator is a function prop', () => {
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  });
});
describe('`guessWord` action creator call', () => {
  test('calls `guessWord` when form submited', () => {
    const guessWordMock = jest.fn();
    // setup component with guessWordMock as guessWord prop
    const props = {
      guessWord: guessWordMock
    }
    const wrapper = shallow(<UnconnectedInput {...props} />);
    // simulate submit
    const form = findByTestAttr(wrapper, 'component-input');
    form.simulate('submit');
    // check to see if mock ran
    const guessWordMockCallsCount = guessWordMock.mock.calls.length;
    expect(guessWordMockCallsCount).toBe(1);
  });
  test('`guessWord` called with a single String argument', () => {

  })
})