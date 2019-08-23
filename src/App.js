import React, { Component } from 'react';
import './App.css';
import Screen from './components/Screen';
import Panel from './components/Panel/Panel';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Screen value={0} />
        <Panel />
      </div>
    );
  }
}

export default App;
