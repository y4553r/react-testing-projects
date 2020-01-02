import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

class Input extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div>
        <button>submit</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
}

export default connect(mapStateToProps)(Input);