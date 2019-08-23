import React, { Component } from 'react'
import PanelRow from './PanelRow';

export class Panel extends Component {
  render() {
    return (
      <div className='panelStyle'>
        <PanelRow handleClickCallback={this.props.handleClickCallback} value={['C', '+/-', '%', '/']} />
        <PanelRow handleClickCallback={this.props.handleClickCallback} value={['7', '8', '9', 'x']} />
        <PanelRow handleClickCallback={this.props.handleClickCallback} value={['4', '5', '6', '-']} />
        <PanelRow handleClickCallback={this.props.handleClickCallback} value={['1', '2', '3', '+']} />
        <PanelRow handleClickCallback={this.props.handleClickCallback} value={['0', '.', '=']} />
      </div>
    )
  }
}

export default Panel
