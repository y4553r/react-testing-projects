import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { guessWord } from '../../actions';

export class UnconnectedInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGuess: null,
    }

    this.submitButtonHandler = this.submitButtonHandler.bind(this);
  }

  changeInputHandler = e => {
    this.setState({ currentGuess: e.target.value });
  }
  submitButtonHandler = e => {
    e.preventDefault();
    const guessedWord = this.state.currentGuess;
    if(guessedWord && guessedWord.length > 0) {
      this.props.guessWord(this.state.currentGuess);
      this.setState({ currentGuess : '' });
    }
  }

  render() {
    const { success } = this.props;
    return (
      <Form data-test="component-input">
        {!success && (
          <>
            <InputField
              data-test="input-box"
              type="text"
              placeholder="enter guess"
              value={this.state.currentGuess}
              onChange={this.changeInputHandler}
            />
            <Button
              data-test="submit-button"
              type="submit"
              onClick={this.submitButtonHandler}
            >Submit</Button>
          </>
        )}
      </Form>
    );
  }
}

const Form = styled.form`
  padding: 50px 0 20px 0;
`;
const InputField = styled.input`
  padding: 10px 50px;
  text-align: center;
  letter-spacing: 4px;
  text-transform: uppercase;
  box-shadow: 0 2px 0 black;
  outline: none;
  border: none;
  margin-right: 10px;
  transition: all 0.2s linear;
  &:focus {
    box-shadow: 0 5px 0 black;
  }
  `;
const Button = styled.button`
  outline: none;
  border: none;
  padding: 10px 20px;
  background-color: rgba(255, 0, 0, 0.5);
  color: white;
  box-shadow: 0 2px 0 black;
  transition: all 0.2s linear;
  &:hover {
    background-color: rgba(255, 0, 0, 0.8);
    box-shadow: 0 5px 0 black;
    cursor: pointer;
  }
  &:active {
    box-shadow: none;
  }
`;

const mapStateToProps = ({ success }) => {
  return {
    success,
  };
}

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);