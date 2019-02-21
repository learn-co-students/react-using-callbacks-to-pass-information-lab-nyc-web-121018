import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  handleClick = () => {
    let theColor = this.props.getColor()
    this.setState({
      color: theColor
    })
  }

  render() {
    return (
      <div
        className="cell"
        onClick= {this.handleClick}
        style={{backgroundColor: this.state.color}}>
      </div>
    )
  }

}
