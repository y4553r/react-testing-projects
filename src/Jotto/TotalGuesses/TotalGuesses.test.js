import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../test/testUtils';
import TotalGuesses from './TotalGuesses';

/**
 * returns a shallow wrapper of TotalGuesses component
 * @function setup
 * @param {object} props - Props specific to TotalGuesses component
 * @returns {ShallowWrapper}
 */
const setup = (props = null) => {
  return shallow(<TotalGuesses {...props} />);
}

test('renders TotalGuesses component', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-total-guesses');
});
test('renders 0 if no props are passed', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-total-guesses');
  expect(component.text()).toContain(0);
})
test('renders the correct number of guesses', () => {
  const wrapper = setup({ totalGuesses: 5 });
  const component = findByTestAttr(wrapper, 'component-total-guesses');
  expect(component.text()).toContain(5);
});
test('does not throw warning with expected props', () => {
  checkProps(TotalGuesses, 5);
});