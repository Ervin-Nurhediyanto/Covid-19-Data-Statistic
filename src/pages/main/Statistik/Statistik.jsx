import React, { Component } from 'react'
import dateformat from 'dateformat'
import axios from 'axios'
import Navbar from '../../../components/Navbar/navbar'
import LineGraph from '../../../components/Charts/Line Graph/LineGraph'

class Home extends Component {
  constructor () {
    super()
    this.state = {
      now: new Date(),
      countries: [],
      month: '',
      date: [],
      // Data A
      countryA: '',
      dataA: [],
      // End Data A

      // Data B
      countryB: '',
      dataB: [],
      // End Data B

      // Data C
      countryC: '',
      dataC: [],
      // End Data C
      nameCountry: ''
    }
    this.handleChangeA = this.handleChangeA.bind(this)
    this.handleChangeB = this.handleChangeB.bind(this)
    this.handleChangeC = this.handleChangeC.bind(this)
  }

  getGlobalStatus () {
    this.setState({
      isLoading: true
    })
    axios.get('https://api.covid19api.com/summary').then((res) => {
      this.setState({
        countries: res.data.Countries,
        isLoading: false
      })
    })
    axios.get('https://api.covid19api.com/country/indonesia/status/confirmed?from=2020-10-01T00:00:00Z&to=2020-10-11T00:00:00Z')
      .then((res) => {
        res.data.map((date) => {
          return this.state.date.push(dateformat(date.Date, 'd/m/yyyy'))
        })
        this.setState({
          month: dateformat(res.data[0].Date, 'mmmm')
        })
      })
  }

  // Handle Change Country
  handleChangeA (e) {
    axios.get(`https://api.covid19api.com/country/${e.target.value}/status/confirmed?from=2020-10-01T00:00:00Z&to=2020-10-10T00:00:00Z`)
      .then((res) => {
        const data = []
        res.data.map((date) => {
          return data.push(date.Cases)
        })
        this.setState({
          countryA: res.data[0].Country,
          dataA: data
        })
      })
  }

  handleChangeB (e) {
    axios.get(`https://api.covid19api.com/country/${e.target.value}/status/confirmed?from=2020-10-01T00:00:00Z&to=2020-10-10T00:00:00Z`)
      .then((res) => {
        const data = []
        res.data.map((date) => {
          return data.push(date.Cases)
        })
        this.setState({
          countryB: res.data[0].Country,
          dataB: data
        })
      })
  }

  handleChangeC (e) {
    axios.get(`https://api.covid19api.com/country/${e.target.value}/status/confirmed?from=2020-10-01T00:00:00Z&to=2020-10-10T00:00:00Z`)
      .then((res) => {
        const data = []
        res.data.map((date) => {
          return data.push(date.Cases)
        })
        this.setState({
          countryC: res.data[0].Country,
          dataC: data
        })
      })
  }
  // End Handle Change Country

  componentDidMount () {
    this.getGlobalStatus()
  }

  render () {
    return (
      <div className='container-flut row bg-dark home'>
        <Navbar color2='red' />
        <div className='container col-10 p-2'>

          {/* Select Country A */}
          <select name='country' id='country' className='' onChange={this.handleChangeA}>
            <option className='' value=''>- Select Country A -</option>
            {this.state.countries.map(function (country, index) {
              return (<option key={index} value={country.Country}>{country.Country}</option>)
            })}
          </select>
          {/* End Select Country A */}

          {/* Select Country B */}
          <select name='country' id='country' className='' onChange={this.handleChangeB}>
            <option className='' value=''>- Select Country B -</option>
            {this.state.countries.map(function (country, index) {
              return (<option key={index} value={country.Country}>{country.Country}</option>)
            })}
          </select>
          {/* End Select Country B */}

          {/* Select Country C */}
          <select name='country' id='country' className='' onChange={this.handleChangeC}>
            <option className='' value=''>- Select Country C -</option>
            {this.state.countries.map(function (country, index) {
              return (<option key={index} value={country.Country}>{country.Country}</option>)
            })}
          </select>
          {/* End Select Country C */}

          <LineGraph
            className='data-month'
            month={this.state.month}
            labels={this.state.date}
            // Data A
            labelA={this.state.countryA}
            dataA={this.state.dataA}
            // End Data A

            // Data B
            labelB={this.state.countryB}
            dataB={this.state.dataB}
            // End Data B

            // Data C
            labelC={this.state.countryC}
            dataC={this.state.dataC}
            // End Data C
          />
        </div>
      </div>
    )
  }
}
export default Home
