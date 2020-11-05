import React from 'react'
import {Link, Route} from 'react-router-dom'
import{Howler,Howl} from 'howler'
<<<<<<< HEAD:client/components/Sound.jsx
import ReactImage from 'react-image-mapper';

||||||| 013d491:client/components/Alex.jsx
// import coin from '../../public/images/coin.jpg'



=======
// import coin from '../../public/images/coin.jpg'


>>>>>>> 0b2112ec500d8ddd7564729f1a1339dd220b8bf6:client/components/Alex.jsx
const audio ={
    count: 0,
    src: 'https://www.fesliyanstudios.com/play-mp3/6236'
}

const img ={
    src: '../images/coin.png'
}

<<<<<<< HEAD:client/components/Sound.jsx

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
||||||| 013d491:client/components/Alex.jsx
class Sound  extends React.Component  {
=======
class Sound extends React.Component  {
>>>>>>> 0b2112ec500d8ddd7564729f1a1339dd220b8bf6:client/components/Alex.jsx
    
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