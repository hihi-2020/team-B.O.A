import React from 'react'
import {Link, Route} from 'react-router-dom'
import{Howler,Howl} from 'howler'
// import coin from '../../public/images/coin.jpg'


const audio ={
    count: 0,
    src: 'https://www.fesliyanstudios.com/play-mp3/6236'
}

const img ={
    src: '../images/coin.png'
}

class Sound extends React.Component  {
    
    playSound = (src) =>{
        const sound = new Howl({
            src,
            html5: true
        })
        sound.play()
    }

    renderSound =()=>{
        return(
        <img src={img.src} onClick={() =>{
            this.playSound(audio.src)}}
        
        />
        )
    }
    render(){
        Howler.volume(1.0)
        return (
        <>
        {this.renderSound()}
        </>
    )
  }
}
export default Sound