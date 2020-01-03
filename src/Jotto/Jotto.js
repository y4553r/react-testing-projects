import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { getSecretWord } from '../actions';
import Congrats from './Congrats/Congrats';
import GuessedWords from './GuessedWords/GuessedWords';
import Input from './Input/Input';

class Jotto extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { success, secretWord, guessedWords } = this.props;
    return(
      <Container data-test='component-jotto'>
        <Title>JOTTO</Title>
        <Congrats success={success} />
        <Input />
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

const mapStateToProps = ({ success, guessedWords, secretWord }) => {
  return {
    success,
    guessedWords,
    secretWord,
  };
};

export default connect(mapStateToProps, { getSecretWord })(Jotto);