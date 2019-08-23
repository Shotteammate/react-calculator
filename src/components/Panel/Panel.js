import React, { Component } from 'react'
import PanelRow from './PanelRow';

export class Panel extends Component {
  render() {
    return (
      <div className='panelStyle'>
        <PanelRow value={['C' , '+/-', '%', '/']}/>
        <PanelRow value={['7' , '8', '9', 'X']}/>
        <PanelRow value={['4' , '5', '6', '-']}/>
        <PanelRow value={['1' , '2', '3', '+']}/>
        <PanelRow value={['0' , '.', '=', '']}/>
      </div>
    )
  }
}

export default Panel
