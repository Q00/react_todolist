import React, { Component } from 'react';

import './App.css';
import Counter from './components/Counter';
import Palette from './components/Palette';
import WaitingList from './components/WaitingList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Palette selected="red" />
        <Counter value={0} color="red" />
        <WaitingList />
      </div>
    );
  }
}

export default App;
