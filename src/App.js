import React, { Component } from 'react';

import './App.css';
import PaletteContainer from './containers/PaletteContainer';
import CounterContainer from './containers/CounterContainer';
import WaitingListContainer from './containers/WaitingListContainer'; // **** 불러오기

class App extends Component {
  render() {
    return (
      <div className="App">
        <PaletteContainer />
        <CounterContainer />
        <WaitingListContainer /> {/* **** 교체하기 */}
      </div>
    );
  }
}

export default App;
