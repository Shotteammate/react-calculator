import React, { Component } from 'react'
import Button from './Button';
import './PanelRow.css';

export class PanelRow extends Component {
  render() {
    // Keys help React identify which items have changed, are added, or are removed.
    let buttonList = this.props.value.map(button => <Button value={button} key={button} />); 

    return (
      <div className="panelRowStyle">
        {buttonList}
      </div>
    );
  }
}

export default PanelRow;
