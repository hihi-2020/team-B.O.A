import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Pixel from './Pixel'

export default class Oli extends Component{

  proximityFunction (e) {
    console.log(e.clientX)
  }
  
  render() {
    let arr = Array(300).fill(0)
    let smallArr = [0]

    return (
      <div className="olis-div" onMouseMove={this.proximityFunction}> 
        {arr.map(item => {
          return (
            <>
              <Pixel grow_color="black"/>
            </>
          )
        })}

      </div>
    )
  }
}  
