import React, { Component } from 'react'
import Button from './Button';
import './PanelRow.css';

export class PanelRow extends Component {
  render() {
    let value = this.props.value;
    //console.log(value);

    return (
      value[3] !== '' ?
        <div className='panelRowStyle'>
          <Button value={value[0]} />
          <Button value={value[1]} />
          <Button value={value[2]} />
          <Button value={value[3]} />
        </div> :
        <div className='panelRowStyle'>
          <Button value={value[0]} />
          <Button value={value[1]} />
          <Button value={value[2]} />
        </div>
    )
  }
}

export default PanelRow
