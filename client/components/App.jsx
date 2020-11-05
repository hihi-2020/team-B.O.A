import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom'
import Page_Head from "./Page_Head"
import Blackie from "./Blackie"
import Alex from "./Alex"
import Oli from "./Oli"


class App extends Component {
  render() {
    return (
      <>
        <Page_Head/>
        <Oli/>
      </>
    )
  }
}

export default App
