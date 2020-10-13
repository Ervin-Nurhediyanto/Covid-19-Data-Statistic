import React, { Component } from 'react'
import CovidIMG from '../../assets/Covid-19.png'
import './Header.css'
export default class Header extends Component {
  render () {
    return (
      <header className='container-flud bg-info d-flex justify-content-center align-items-center'>
        <div className='header-image'><img src={`${CovidIMG}`} alt='' /></div>
        <div className='ml-2 mr-2'><h2>Data Covid 19</h2></div>
        <div className='header-image'><img src={`${CovidIMG}`} alt='' /></div>
      </header>
    )
  }
}
