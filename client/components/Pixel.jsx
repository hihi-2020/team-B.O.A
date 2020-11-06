import React from 'react'

class Pixel extends React.Component {
  
  state = {
    className: "red "
  }

  componentDidMount() {
    
    this.setState({
      className: this.props.grow_color + " shrink circle"
    })
  }

  mouseEnter = evt => {
    this.setState({
      className: "red grow"
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


export default Pixel