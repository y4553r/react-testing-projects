import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import Counter from './Counter';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the Counter component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {object} state - Initial state for setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<Counter {...props} />);
  if (state)
    wrapper.setState(state);
  return wrapper;
}
/**
 * Return ShallowWrapper containing node(s) with the given data-set value.
 * @function findByTestAttr
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} val - Value of data-set attribute for search. 
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-counter');
  expect(appComponent.length).toBe(1);
});
test('renders increment button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'increment-button');
  expect(button.length).toBe(1);
});
test('renders counter display', () => {
  const wrapper = setup();
  const display = findByTestAttr(wrapper, 'counter-display');
  expect(display.length).toBe(1);
});
test('renders reset button', () => {
  const wrapper = setup();
  const resetButton = findByTestAttr(wrapper, 'reset-button');
  expect(resetButton.length).toBe(1);
});
test('counter starts at 0', () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state('count');
  expect(initialCounterState).toBe(0);
});
test('click increment button increments counter display', () => {
  const count = 7;
  const wrapper = setup({}, { count });
  // find button and click
  const button = findByTestAttr(wrapper, 'increment-button');
  button.simulate('click');
  wrapper.update();
  // find display and test value
  const display = findByTestAttr(wrapper, 'counter-display');
  expect(display.text()).toContain(count + 1);
});
test('click reset button resets counter to 0', () => {
  const initialState = { count: 7 };
  const wrapper = setup({}, initialState);
  // find button and click
  const button = findByTestAttr(wrapper, 'reset-button');
  button.simulate('click');
  wrapper.update();
  // find display and test value
  const display = findByTestAttr(wrapper, 'counter-display');
  expect(display.text()).toContain(0);
})
// test decrement button display
test('renders decrement button', () => {
  const wrapper = setup();
  const decrementButton = findByTestAttr(wrapper, 'decrement-button');
  // const decrementButton = wrapper.find("[data-test='decrement-button']");
  expect(decrementButton.length).toBe(1);
});
// test display counter after decerement clicked
test('decrement counter state', () => {
  const initialState = { count: 5 };
  const wrapper = setup({}, initialState);
  // find button
  const button = findByTestAttr(wrapper, 'decrement-button');
  button.simulate('click');
  wrapper.update();
  // find display counter
  const display = findByTestAttr(wrapper, 'counter-display');
  expect(display.text()).toContain(4);
});
// test display counter && error message after decrement below 0
test('display error message when decrement below 0', () => {
  const initialState = { count: 0 };
  const wrapper = setup({}, initialState);
  // find decrement button
  const button = findByTestAttr(wrapper, 'decrement-button');
  button.simulate('click');
  // find display counter
  const display = findByTestAttr(wrapper, 'counter-display');
  expect(display.text()).toContain(0);
  // find error message
  const errorMessage = findByTestAttr(wrapper, 'error-message');
  expect(errorMessage.length).toBe(1);
});
// test clear error when decrement
test('clear error message when increment again', () => {
  const initialState = { error: true };
  const wrapper = setup({}, initialState);
  // fin increment button
  const button = findByTestAttr(wrapper, 'increment-button');
  button.simulate('click');
  wrapper.update();
  // find error message
  const errorMessage = findByTestAttr(wrapper, 'error-message');
  expect(errorMessage.length).toBe(0);
});