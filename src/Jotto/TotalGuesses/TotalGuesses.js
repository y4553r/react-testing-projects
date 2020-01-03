import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component that displays total number of guesses
 * @function totalGuesses
 * @param {objec} - Props passed to the component
 * @returns {JSXElement}
 */
const TotalGuesses = ({ totalGuesses }) => (
  <p data-test='component-total-guesses'>Total Guesses: {totalGuesses || 0}</p>
);

TotalGuesses.propTypes = {
  totalGuesses: PropTypes.number,
};

export default TotalGuesses;