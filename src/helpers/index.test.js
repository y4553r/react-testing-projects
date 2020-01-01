import { getLetterMatchCount } from './';

describe('getLetterMatchCount', () => {
  const secretWord = 'party';
  test('returns 0 when there are no matching letters', () => {
    const letterMatchCount = getLetterMatchCount('bones', secretWord);
    expect(letterMatchCount).toBe(0);
  });
  test('returns 3 when there are three matching letters', () => {
    const letterMatchCount = getLetterMatchCount('train', secretWord);
    expect(letterMatchCount).toBe(3);
  });
  test('returns correct count when there are duplicate letters in the guess word', () => {
    const letterMatchCount = getLetterMatchCount('parka', secretWord);
    expect(letterMatchCount).toBe(3);
  });
});