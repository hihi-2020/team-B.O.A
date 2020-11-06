import React from 'react'
import{Howler,Howl} from 'howler'


const audio ={
    src: 'https://www.fesliyanstudios.com/play-mp3/6962'
}
const img ={    
    src: '../images/coin.png'
}
function randomHeight (){
    return Math.floor(Math.random() * (400 - 1))
}
function randomWidth (){
    return Math.floor(Math.random() * (1500 - 1))
}




class Sound extends React.Component  {
    state={
        count: 0,
        left: randomWidth(),
        right: randomWidth(),
        top:randomHeight(),
        bottom: randomHeight()
    }

    handleClick = () =>{
        this.setState(add =>(
          {count : add.count + 1}
          ))
     
      }
    
    randomPosition = () =>{
        return Math.floor(Math.random() * (700 - 100))
    }
 
    playSound = (src) =>{
        const sound = new Howl({
            src,
            html5: true
        })
        sound.play()
    }

    renderSound =()=>{
        return(
        <img className="random" style={this.state} src={img.src} onClick={() =>{
            this.handleClick();
            this.playSound(audio.src);
            this.setState({
                left: randomWidth(), 
                right: randomWidth(),
                top: randomHeight(),
                bottom: randomHeight()
            })
        }}/> 
        )}

    render(){  
        Howler.volume(1.0)
        return (
        <>
        {this.renderSound()}
        <h1 className="count">{this.state.count}</h1>
        </>
    )
  }
}
export default Sound