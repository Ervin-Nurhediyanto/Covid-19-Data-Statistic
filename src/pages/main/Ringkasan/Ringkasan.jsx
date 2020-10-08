import React, { Component } from 'react'
import axios from 'axios'
import './Ringkasan.css'
import Navbar from '../../../components/Navbar/navbar'
// import CardStatus from '../../../components/CardStatus'
// import CardInfo from '../../../components/CardInfo'
class Home extends Component {
  constructor () {
    super()
    this.state = {
      globalStatus: {
        NewConfirmed: 0,
        TotalConfirmed: 0,
        NewDeaths: 0,
        TotalDeaths: 0,
        NewRecovered: 0,
        TotalRecovered: 0
      },
      contries: [],
      isLoading: false
    }
  }

  getGlobalStatus () {
    this.setState({
      isLoading: true
    })
    axios.get('https://api.covid19api.com/summary').then((res) => {
      this.setState({
        globalStatus: res.data.Global,
        contries: res.data.Countries,
        isLoading: false
      })
    })
  }

  componentDidMount () {
    this.getGlobalStatus()
  }

  render () {
    return (
      <div className='container-flut row bg-dark home'>
        <Navbar />
        <div className='container col-10'>
          <h2>ini covid</h2>
        </div>
      </div>
    )
  }
}
export default Home
