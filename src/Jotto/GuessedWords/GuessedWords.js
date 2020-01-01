import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const GuessedWords = ({ guessedWords }) => {
  return (
    <Container data-test='component-guessed-words'>
      {!guessedWords.length &&
        <Instruction data-test='guess-instructions'>
          Try to guess the secret word!
        </Instruction>}
      {!!guessedWords.length && <Table data-test="guessed-words">
        <Head>
          <tr>
            <Th>Guessed Word</Th>
            <Th>Matching Letters</Th>
          </tr>
        </Head>
        <tbody>
          {guessedWords.map((word, i) => (
            <tr key={i} data-test="guessed-word">
              <Td>{word.guessedWord}</Td>
              <Td>{word.letterMatchCount}</Td>
            </tr>
          ))}
        </tbody>
      </Table>}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin: 10px;
`;
const Table = styled.table`
  background-color: rgba(0,0,255, 0.1);
  width: 50%;
  margin: auto;
  `;
const Head = styled.thead`
  background-color: rgba(0,0,255, 0.5);
  color: white;
`;
const Th = styled.th`
  padding: 10px 0;
  font-size: 1.3rem;
  letter-spacing: 2px;
  font-weight: 200;
`;
const Td = styled.td`
  padding: 5px 0;
  font-size: 1.2rem;
  letter-spacing: 1px;
  font-weight: 400;
  text-transform: uppercase;
  color: blue;
`;
const Instruction = styled.span`
  font-size: 2rem;
`;

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    }),
  ).isRequired,
}

export default GuessedWords;