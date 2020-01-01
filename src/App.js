import React, { Component } from 'react';
import './App.css';

// import Counter from './Counter/Counter';
import Jotto from './Jotto/Jotto';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter /> */}
        <Jotto />
      </div>
    );
  }
}

export default App;
