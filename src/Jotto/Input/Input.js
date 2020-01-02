import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { success } = this.props;
    return !success && (
      <form data-test="component-input">
        <input 
        data-test="input-box"
        type="text"
        placeholder="enter guess"
        />
        <button 
        data-test="submit-button"
        type="submit"
        >Submit</button>
      </form>
    );
  }
}

const mapStateToProps = ({ success }) => {
  return {
    success,
  };
}

export default connect(mapStateToProps)(Input);