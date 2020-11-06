import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Pixel extends React.Component {
  
  state = {
    className: "red",
    left: 0,
    right: 0,
    width: 100,
    width: 100,
    margin: 100
  }

  componentDidMount() {
    // const node = ReactDOM.findDOMNode(this)
    // setTimeout(() => {
    //   // console.log(node.getBoundingClientRect().x)
    // }, 100)

    this.setState({
      className: "black shrink",
      absXDistance: 100
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.mouseX !== this.props.mouseX) {
      const absXDistance = this.state.xDifference
      this.setState({
        absXDistance: absXDistance
      })
    }
  }

  // mouseEnter = evt => {
  //   this.setState({
  //     className: this.props.grow_color + " grow"
  //   })
  // }


  // mouseExit = evt => {
  //   setTimeout(() => {
  //     this.setState({
  //       className: this.props.grow_color + " shrink"
  //     })
  //   }, 2000);
  // }

  // updateSize = evt => {
  //   this.setState({
  //   })
  // }

  
  measureDistance = evt => {
    const node = ReactDOM.findDOMNode(this)
    const nodeX = node.getBoundingClientRect().x
    
    const xDifference = nodeX - this.props.mouseX

    console.log(xDifference)

    this.setState({
      xDifference: xDifference
    })
  }
  
  render () {

    return (

    <div 
    style={this.state.style} 
    onMouseLeave={this.mouseExit} 
    className={this.state.className + " circle"} 
    key={this.props.keyProp}>
    --- {this.state.absXDistance}

    </div>
    )
  }
}


export default Pixel