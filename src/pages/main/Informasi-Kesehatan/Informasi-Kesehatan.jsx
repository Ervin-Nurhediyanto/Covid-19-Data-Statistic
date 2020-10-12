import React, { Component } from 'react'
// import axios from 'axios'
import './Informasi-Kesehatan.css'
import Navbar from '../../../components/Navbar/navbar'
import Gejala from '../../../components/Main/Informasi-Kesehatan/Gejala/Gejala'
import Pencegahan from '../../../components/Main/Informasi-Kesehatan/Pencegahan/Pencegahan'
import Perawatan from '../../../components/Main/Informasi-Kesehatan/Perawatan/Perawatan'
class Home extends Component {
  constructor () {
    super()
    this.state = {
      showGejala: true,
      showPencegahan: false,
      showPerawatan: false
    }
    this.handleGejala = this.handleGejala.bind(this)
    this.handlePencegahan = this.handlePencegahan.bind(this)
    this.handlePerawatan = this.handlePerawatan.bind(this)
  }

  handleGejala () {
    this.setState({
      showGejala: true,
      showPencegahan: false,
      showPerawatan: false
    })
  }

  handlePencegahan () {
    this.setState({
      showGejala: false,
      showPencegahan: true,
      showPerawatan: false
    })
  }

  handlePerawatan () {
    this.setState({
      showGejala: false,
      showPencegahan: false,
      showPerawatan: true
    })
  }

  componentDidMount () {
  }

  render () {
    if (this.state.showGejala) {
      return (
        <div className='container-flut row bg-dark home'>
          <Navbar color3='red' />
          <div className='container col-10 pt-3'>
            <div className='d-flex justify-content-center mb-2'>
              <button className='red mr-2' onClick={this.handleGejala}>Gejala</button>
              <button className='mr-2' onClick={this.handlePencegahan}>Pencegahan</button>
              <button className='mr-2' onClick={this.handlePerawatan}>Perawatan</button>
            </div>
            <div className='pt-2'>
              <Gejala />
            </div>
          </div>
        </div>
      )
    }
    if (this.state.showPencegahan) {
      return (
        <div className='container-flut row bg-dark home'>
          <Navbar color3='red' />
          <div className='container col-10 pt-3'>
            <div className='d-flex justify-content-center mb-2'>
              <button className='mr-2' onClick={this.handleGejala}>Gejala</button>
              <button className='red mr-2' onClick={this.handlePencegahan}>Pencegahan</button>
              <button className='mr-2' onClick={this.handlePerawatan}>Perawatan</button>
            </div>
            <div className='pt-2'>
              <Pencegahan />
            </div>
          </div>
        </div>
      )
    }
    if (this.state.showPerawatan) {
      return (
        <div className='container-flut row bg-dark home'>
          <Navbar color3='red' />
          <div className='container col-10 pt-3'>
            <div className='d-flex justify-content-center mb-2'>
              <button className='mr-2' onClick={this.handleGejala}>Gejala</button>
              <button className='mr-2' onClick={this.handlePencegahan}>Pencegahan</button>
              <button className='red mr-2' onClick={this.handlePerawatan}>Perawatan</button>
            </div>
            <div className='pt-2'>
              <Perawatan />
            </div>
          </div>
        </div>
      )
    }
  }
}
export default Home
