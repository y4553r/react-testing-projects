import React, { Component } from 'react';
import styled from 'styled-components';

import Congrats from './Congrats/Congrats';
import GuessedWords from './GuessedWords/GuessedWords';
import Input from './Input/Input';

class Jotto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guessedWords: [
        {guessedWord: 'train', letterMatchCount: 3},
        {guessedWord: 'party', letterMatchCount: 5},
      ]
    }
  }

  render() {
    const { guessedWords } = this.state;
    return(
      <Container data-test='component-jotto'>
        <Title>JOTTO</Title>
        <Input />
        <Congrats success={true} />
        <GuessedWords guessedWords={guessedWords} />
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justifu-content: center;
  width: 100vw;
`;
const Title = styled.h1`
  color: rgba(0,0,255,0.7);
  font-size: 8rem;
  letter-spacing: 3px;
  margin: 10px;
  background-color: rgba(255,0,0,0.4);
  padding: 5px 200px;
  display: inline-block;
  border-radius: 20px;
  box-shadow: 0 10px 0 black;
`;

export default Jotto;