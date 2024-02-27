import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'
export default class App extends Component {
  render() {
    return (
      <>
       <Navbar/>
       <Outlet/>
  </>
    )
  }
}
