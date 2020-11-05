import React from 'react'
import {Link, Route} from 'react-router-dom'
import{Howler,Howl} from 'howler'
import ReactImage from 'react-image-mapper';

const audio ={
    count: 0,
    src: 'https://www.fesliyanstudios.com/play-mp3/6236'
}

const img ={
    src: '../images/coin.png'
}


const randomStyle ={
    left: 0,
    right: 500,
    top: 700,
    bottom: 600
}


class Sound  extends React.Component  {


    
    randomPosition = () =>{
        return Math.floor(Math.random() * (700 - 100))
    }
    changePosition =()=>{

    }
    
    playSound = (src) =>{
        const sound = new Howl({
            src,
            html5: true
        })
        sound.play()
    }

    // renderSound =()=>{
    //     return(
  
    //     )
    // }
    render(){
        console.log(this.randomPosition())
          
        Howler.volume(1.0)
        return (
        <>
        <img className="random" style={randomStyle} src={img.src} onClick={() =>{this.playSound(audio.src)}}/>
        {this.renderSound()}
        </>
    )
  }
}
export default Sound