import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../../test/testUtils';
import GuessedWords from './GuessedWords';

const defaultProps = {
  guessedWords: [
    {
      guessedWord: 'train',
      letterMatchCount: 3,
    },
  ]
};
/**
 * returns a shallow wrapper of GuessedWords component
 * @function setup
 * @param {object} props - Props specific to GuessedWords component
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
}

test('does not throw warning with expected props', () => {
  checkProps(GuessedWords, defaultProps);
});

describe('if there are no words guessed', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });
  test('renders without crashing', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });
  test('renders instructions to guess a word', () => {
    const instructions = findByTestAttr(wrapper, 'guess-instructions');
    expect(instructions.text().length).not.toBe(0);
  });
});
describe('if there are words guessed', () => {
  const guessedWords = [
    { guessedWord: 'train', letterMatchCount: 3, },
    { guessedWord: 'agile', letterMatchCount: 1, },
    { guessedWord: 'party', letterMatchCount: 5, },
  ]
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });
  test('renders without crashing', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });
  test('renders "guessed words" section', () => {
    const GuessedWordsDiv = findByTestAttr(wrapper, 'guessed-words');
    expect(GuessedWordsDiv.length).toBe(1);
  });
  test('correct number of guessed words', () => {
    const GuessedWordNodes = findByTestAttr(wrapper, 'guessed-word');
    expect(GuessedWordNodes.length).toBe(guessedWords.length);
  });
});