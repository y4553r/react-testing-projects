import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      error: false,
    };
  }

  increment = () => {
    this.setState(st => ({ count: st.count + 1, error: st.error && false }));
  }
  reset = () => {
    this.setState({
      count: 0,
    });
  }
  decrement = () => {
    if (this.state.count === 0)
      this.setState({ error: true });
    else
      this.setState(st => ({ count: st.count - 1 }));
  }

  render() {
    return (
      <div data-test="component-counter">
        <h1 data-test="counter-display">The counter is currently {this.state.count}</h1>
        {this.state.error && <p data-test="error-message" style={{ color: 'red' }}>You can't decrement below 0!!</p>}
        <button data-test="increment-button" onClick={this.increment}>Increment Counter</button>
        <button data-test="decrement-button" onClick={this.decrement}>Decrement Counter</button>
        <button data-test="reset-button" onClick={this.reset}>Reset Counter</button>
      </div>
    );
  }
}

export default Counter;