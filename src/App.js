import React, { Component } from 'react';
import './App.css';
import Screen from './components/Screen';
import Panel from './components/Panel/Panel';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenValue: '0',
      op1: '0',
      op2: null,
      opr: null,
    };
  }

  render() {
    return (
      <div className="App">
        <Screen value={this.state.screenValue} />
        <Panel  />
      </div>
    );
  }
}

export default App;
