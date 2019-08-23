import React, { Component } from 'react'

export class Screen extends Component {
  render() {
    return (
      <div className='screenStyle'>
        <input type="text" value={this.props.value}/>
      </div>
    )
  }
}

export default Screen
