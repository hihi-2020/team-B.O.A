import React from 'react'
import Snake from './Snake'

import {Link, Route} from 'react-router-dom'
import Sound from './Sound'


class App extends React.Component {

   state = {
      snakeDots: [
         [20,40],
         [40,40],
         [60,40]
      ],
      direction: 'RIGHT',
      snakeButton: 'Start the Snake!',
      snakeMoving: false,
      colour: 'black'
   }

   componentDidMount() {
      document.onkeydown = this.onkeydown
   }

   componentDidUpdate() {
      this.checkIfOffScreen()
   }

   onkeydown = (e) => {
      e = e || window.event
      switch (e.keyCode) {
         case 38:
           this.setState({direction: 'UP'})
           break
         case 40:
           this.setState({direction: 'DOWN'})
           break
         case 37:
           this.setState({direction: 'LEFT'})
           break
         case 39:
           this.setState({direction: 'RIGHT'})
           break
       }
   }

   moveSnake = () => {
      let dots = [...this.state.snakeDots]
      let head = dots[dots.length -1]

      switch (this.state.direction) {
         case 'RIGHT': 
            head = [head[0] + 20, head[1]]
            break
         case 'LEFT':
            head = [head[0] -20, head[1]]
            break
         case 'UP':
            head = [head[0], head[1] - 20]
            break
         case 'DOWN':
            head = [head[0], head[1] + 20]
            break
      }
      dots.push(head)
      dots.shift()
      this.setState({
         snakeDots: dots
      })
   }

   toggleSnakeMovement = () => {
      if(!this.state.snakeMoving){
         let move = setInterval(this.moveSnake, 200)
         this.setState({
            snakeButton: 'Stop the Snake!',
            snakeMoving: true
         })
      } else {
         clearInterval(move)
         this.setState({
            snakeButton: 'Start the Snake!',
            snakeMoving: false
         })
      }
   }

   checkIfOffScreen = () => {
      let head = this.state.snakeDots[this.state.snakeDots.length - 1]
      // if(head[0] >= window.innerWidth){
         // this.setState({
         //    direction: 'DOWN'
         // })
      // }
   }

   pickColour = () => {
      let colourOptions = ['red', 'green', 'yellow', 'orange', 'aqua', 'blueviolet', 'brown', 'gold', 'greenyellow']
      let index = Math.floor(Math.random() * colourOptions.length)
      return colourOptions[index]
   }

   growSnake = () => {
      let dots = [...this.state.snakeDots]
      let tail = dots[0]
      dots.unshift(tail)

      this.setState({
         snakeDots: dots,
         colour: this.pickColour()
      })
   }

   render() {
      return (
          <div>
             <button onClick={this.toggleSnakeMovement}>{this.state.snakeButton}</button>
             {/* <button>Go faster!</button> */}
             <button onClick={this.growSnake}>Grow Snake</button>
             <Snake snakeDots={this.state.snakeDots} colour={this.state.colour}/>
             <Sound/>
          </div>
      )
   }


export default App
