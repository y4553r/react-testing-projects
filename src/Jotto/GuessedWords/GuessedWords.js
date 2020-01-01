import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = ({ guessedWords }) => {
  return (
    <div data-test='component-guessed-words'>
      {!guessedWords.length &&
        <span data-test='guess-instructions'>
          Try to guess the secret word!
        </span>}
      {guessedWords.length && <table data-test="guessed-words">
        <thead>
          <tr>
            <th>Guessed Word</th>
            <th>Matching Letters</th>
          </tr>
        </thead>
        <tbody>
          {guessedWords.map((word, i) => (
            <tr key={i} data-test="guessed-word">
              <td>{word.guessedWord}</td>
              <td>{word.letterMatchCount}</td>
            </tr>
          ))}
        </tbody>
      </table>}
    </div>
  );
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    }),
  ).isRequired,
}

export default GuessedWords;