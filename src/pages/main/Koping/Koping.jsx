import React, { Component } from 'react'
// import axios from 'axios'
import './Koping.css'
import Navbar from '../../../components/Navbar/navbar'
import Koping from '../../../components/Main/Koping/Koping'
class Home extends Component {
  constructor () {
    super()
    this.state = {
    }
    // this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount () {
  }

  render () {
    return (
      <div className='container-flut row bg-dark home'>
        <Navbar color4='red' />
        <div className='container col-10'>
          <div className='pt-3'>
            <Koping />
          </div>
        </div>
      </div>
    )
  }
}
export default Home
