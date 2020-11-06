import React, { Component } from 'react'
import ReactDOM from 'react-dom'



class PixelChild extends React.Component {
  

  state = {
    className: "red"
  }

  

  componentDidMount() {
    const node = ReactDOM.findDOMNode(this)
    setTimeout(() => {
      console.log('node', node.getBoundingClientRect());
    }, 100)
    

    this.setState({
      className: "black shrink circle"
    })
  }

  mouseEnter = evt => {
    this.setState({
      className: this.props.grow_color + " grow"
    })
  }


  mouseExit = evt => {
    setTimeout(() => {
      this.setState({
        className: this.props.grow_color + " shrink"
      })
    }, 2000);
  }

  render () {
    return (
      <div onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseExit} onClick={this.clickHandler} className={this.state.className + " circle"}></div>
    )
  }
}


export default PixelChild