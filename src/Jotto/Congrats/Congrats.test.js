import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { findByTestAttr, checkProps } from '../../test/testUtils';
import Congrats from './Congrats';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultProps = { success: false };
/**
 * Factory function to create a ShallowWrapper for Congrats component.
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
}

test('renders without crashing', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});
test('renders no text when `success` prop is false', () => {
  const initialProps = { success: false };
  const wrapper = setup(initialProps);
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe('');
});
test('renders congrats message when `success` prop is true', () => {
  const initialProps = { success: true };
  const wrapper = setup(initialProps);
  const message = findByTestAttr(wrapper, 'congrats-message');
  expect(message.text().length).not.toBe(0);
});
test('does not throw warning with expected props', () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps);
});