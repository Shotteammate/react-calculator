import React, { Component } from 'react';
import './Screen.css'

export class Screen extends Component {
  render() {
    return (
      <div className='screenStyle'>
        <div className='valueStyle'>{this.props.value}</div>
      </div>
    );
  }
}

export default Screen;
