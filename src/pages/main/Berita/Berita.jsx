import React, { Component } from 'react'
import './Berita.css'
import Navbar from '../../../components/Navbar/navbar'
import NewIndonesia from '../../../components/Main/Berita/Berita-Indonesia/Berita-Indonesia'
import NewsVirus from '../../../components/Main/Berita/Berita-Virus/Berita-Virus'

class Home extends Component {
  constructor () {
    super()
    this.state = {}
  }

  componentDidMount () {}

  render () {
    return (
      <div className='container-flut row bg-dark home'>
        <Navbar color5='red' />
        <div className='container col-10 pt-3'>
          <div className='news-list'>
            <NewIndonesia />
            <NewsVirus />
          </div>
        </div>
      </div>
    )
  }
}
export default Home
