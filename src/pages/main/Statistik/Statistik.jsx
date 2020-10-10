import React, { Component } from 'react'
import axios from 'axios'
import Navbar from '../../../components/Navbar/navbar'
import LineGraph from '../../../components/Charts/Line Graph/LineGraph'

class Home extends Component {
  constructor () {
    super()
    this.state = {
      state: {
        labels: ['January', 'February', 'March',
          'April', 'May'],
        datasets: [
          {
            label: 'Rainfall',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [65, 59, 80, 81, 56]
          }
        ]
      },
      globalStatus: {
        NewConfirmed: 0,
        TotalConfirmed: 0,
        NewDeaths: 0,
        TotalDeaths: 0,
        NewRecovered: 0,
        TotalRecovered: 0
      },
      Status: []
    }
    this.handleChange = this.handleChange.bind(this)
  }

  getStatus () {
    this.setState({
      isLoading: true
    })
    axios.get('https://api.covid19api.com/dayone/country/indonesia/status/confirmed').then((res) => {
      this.setState({
        status: res.data,
        isLoading: false
      })
    })
  }

  handleChange () {
    this.state.status.map((data) => {
      return console.log(data)
    })
  }

  componentDidMount () {
    this.getStatus()
  }

  render () {
    return (
      <div className='container-flut row bg-dark home'>
        <Navbar color2='red' />
        <div className='container col-10'>
          <LineGraph
            className='data-month'
            state={this.state.state}
          />
        </div>
      </div>
    )
  }
}
export default Home
