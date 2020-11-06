import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Pixel from './Pixel'

export default class Oli extends React.Component{

  state = {
    mouseX: 0,
    mouseY: 0
  }

  getMouseCoords = evt => {
    
    this.setState({
      mouseX: evt.pageX,
      mouseY: evt.pageY
    })

    

  }
  
  render() {
    let arr = Array(300).fill(0)
    let smallArr = [0]

    return (
      <div className="olis-div" onMouseMove={this.getMouseCoords}> 
        {arr.map((item, i) => {
          return (
            <>
              <Pixel mouseX = {this.state.mouseX} mouseY = {this.state.mouseY} grow_color="black" keyProp={i.toString()}/>
            </>
          )
        })}

      </div>
    )
  }
}  
