import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Functional react component for congratulatory message.
 * @function
 * @param {object} props - React props
 * @returns {JSX.Element} - Rendered component (or null if 'success' prop is false)
 */
const Congrats = ({ success }) => {
  return (
    <Container data-test='component-congrats'>
      {success &&
        <Message data-test='congrats-message'>
          Congratulations! You guessed the word!
        </Message>}
    </Container>
  );
}

const Container = styled.div`
  margin: 10px;
  width: 100%;
`;
const Message = styled.span`
  display: inline-block;
  width: 100%;
  padding: 50px 0;
  background-color: rgba(0,255,0,0.3);
  box-shadow: 0 10px 0 rgba(0,255,0,0.5);
  font-size: 3rem;
  font-weight: bold;
  color: green;
  text-shadow: 0 0 10px white;
`;

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
}

export default Congrats;