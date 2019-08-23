import React, { Component } from 'react';
import './Button.css';

export class Button extends Component {
  render() {
    let className = "buttonStyle";

    if ("/x-+=".indexOf(this.props.value) !== -1) {
      className += " orange";
    } else if ("C+/-%".indexOf(this.props.value) !== -1) {
      className += " gray";
    }

    if (this.props.value === '0') {
      className += " wide";
    }

    return (
      <button 
        className={className} 
        onClick={() => this.props.handleClickCallback(this.props.value)}>
        {this.props.value}
      </button>
    )
  }
}

export default Button
