import React, { useState } from 'react';
import './App.css';

import Counter from './Counter/Counter';
import Jotto from './Jotto/Jotto';

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <Jotto />
    </div>
  );
}

export default App;
