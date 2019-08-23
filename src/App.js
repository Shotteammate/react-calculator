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

  calculateResult = (state) => {
    let op1 = state.op1;
    let op2 = state.op2;
    let opr = state.opr;

    if (opr === "+") {
      return (Number(op1) + Number(op2)).toString();
    }
    if (opr === "-") {
      return (Number(op1) - Number(op2)).toString();
    }
    if (opr === "x") {
      return (Number(op1) * Number(op2)).toString();
    }
    if (opr === "/") {
      return (Number(op1) / Number(op2)).toString();
    }
  }

  handleClick = (i) => {
    if (i === 'C') {
      this.setState({
        screenValue: '0',
        op1: '0',
        op2: null,
        opr: null,
      });
    } else if ("0123456789".indexOf(i) !== -1) { //if is numbers
      if (this.state.opr === null) {
        let newV = '';

        if (this.state.op1 === '0') {
          newV = i;
        } else if (this.state.op1 === this.state.screenValue) {
          // after "=" is clicked, then press number for the next calculation
          newV = i;
        } else {
          newV = this.state.op1 + i;
        }

        this.setState({ screenValue: newV, op1: newV });
      } else {
        //if opr not null -> op2
        let newV = '';

        if (this.state.op2 === null) {
          newV = i;
        } else {
          newV = this.state.op2 + i;
        }

        this.setState({ screenValue: newV, op2: newV });
      }
    } else if ("+-x/".indexOf(i) !== -1) {
      //if "+-*/" is clicked
      if (this.state.op2 === null) {
        this.setState({ opr: i });
      }
      else {
        // op2 not null -> calculate result then update op1 opr op2
        let newOp1 = this.calculateResult(this.state);

        this.setState({
          screenValue: newOp1,
          op1: newOp1,
          op2: null,
          opr: i,
        });
      }
    } else if (i === "=") {
      if (this.state.op2 && this.state.opr) {
        let newOp1 = this.calculateResult(this.state);
        this.setState({
          screenValue: newOp1,
          op1: newOp1,
          op2: null,
          opr: null,
        });
      }
    } else if (i === "+/-") {
      // opr is null -> update op1 
      if (this.state.opr === null) {
        if (this.state.screenValue !== '0') {
          let newV = (Number(this.state.op1) * -1).toString();
          this.setState({
            screenValue: newV,
            op1: newV,
          });
        }
      } else if (this.state.op2 !== null) {
        let newV = (Number(this.state.op2) * -1).toString();
        this.setState({
          screenValue: newV,
          op2: newV,
        });
      }
    } else if (i === "%") {
      if (this.state.opr === null) {
        let newV = (Number(this.state.op1) / 100).toString();
        this.setState({
          screenValue: newV,
          op1: newV
        });
      } else if (this.state.op2 !== null) {
        let newV = (Number(this.state.op2) / 100).toString();
        this.setState({
          screenValue: newV,
          op2: newV
        });
      }
    } else if (i === ".") {
      if (this.state.opr === null) {
        if (this.state.screenValue.indexOf(".") === -1) {
          let newV = this.state.op1 + i;

          this.setState({
            screenValue: newV,
            op1: newV,
          });
        }
      } else { // op1 & opr not null
        if (this.state.op2 === null) {
          this.setState({
            screenValue: "0.",
            op2: "0."
          });
        } else {
          if (this.state.op2.indexOf(".") === -1) {
            let newV = this.state.op2 + ".";
            this.setState({
              screenValue: newV,
              op2: newV
            });
          }
        }
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Screen value={this.state.screenValue} />
        <Panel handleClickCallback={this.handleClick} />
      </div>
    );
  }
}

export default App;
