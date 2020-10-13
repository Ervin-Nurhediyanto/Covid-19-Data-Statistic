import React, { Component } from 'react'
import './Lokasi-Tes.css'
import Navbar from '../../../components/Navbar/navbar'
import Map from '../../../components/Map/Map'
class Home extends Component {
  constructor () {
    super()
    this.state = {
    }
  }

  componentDidMount () {
  }

  render () {
    return (
      <div className='container-flut row bg-dark home'>
        <Navbar color6='red' />
        <div className='container col-10 pt-2'>
          <Map />
        </div>
      </div>
    )
  }
}
export default Home
