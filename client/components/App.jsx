
import React from 'react'

// import React, { Component } from 'react'
import Page_Head from "./Page_Head"
import Oli from "./Oli"
import Snake from './Snake'
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
           this.growSnake()
           break
         case 40:
           this.setState({direction: 'DOWN'})
           this.growSnake()
           break
         case 37:
           this.setState({direction: 'LEFT'})
           this.growSnake()
           break
         case 39:
           this.setState({direction: 'RIGHT'})
           this.growSnake()
           break
         case 32:
            this.growSnake()
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
      setInterval(this.moveSnake, 200)
      document.querySelector('#start').classList.add('hidden')
   }

   checkIfOffScreen = () => {
      let head = this.state.snakeDots[this.state.snakeDots.length - 1]
      switch (this.state.direction) {
         case 'RIGHT':
            if(head[0] >= window.innerWidth - 30){
               this.setState({
                  direction: 'DOWN'
               })
               this.growSnake()
            }
            break
         case 'LEFT':
            if(head[0] <= 10){
               this.setState({
                  direction: 'UP'
               })
               this.growSnake()
            }
            break
         case 'UP':
            if(head[1] <= 10){
               this.setState({
                  direction: 'RIGHT'
               })
               this.growSnake()
            }
            break
         case 'DOWN':
         if(head[1] >= window.innerHeight - 30){
            this.setState({
               direction: 'LEFT'
            })
            this.growSnake()
         }
         break
      }
      
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
             <button id='start' onClick={this.toggleSnakeMovement}>{this.state.snakeButton}</button>
             {/* <button>Go faster!</button> */}
             <Snake snakeDots={this.state.snakeDots} colour={this.state.colour}/>
             <Sound/>
             <Oli/>

          </div>
      )
   }

}
export default App
