import React, { Component } from 'react'
import dateformat from 'dateformat'
import axios from 'axios'
import './Statistix.css'
import Navbar from '../../../components/Navbar/navbar'
import LineGraph from '../../../components/Charts/Line Graph/LineGraph'

class Home extends Component {
  constructor () {
    super()
    this.state = {
      now: new Date(),
      countries: [],
      month: '',
      dateMonth: '',
      year: '',
      date: [],
      endDate: '',
      // Data A
      countryA: 'Indonesia',
      dataA: [],
      // End Data A

      // Data B
      countryB: 'Japan',
      dataB: [],
      // End Data B

      // Data C
      countryC: 'Malaysia',
      dataC: [],
      // End Data C
      nameCountry: ''
    }
    this.handleChangeA = this.handleChangeA.bind(this)
    this.handleChangeB = this.handleChangeB.bind(this)
    this.handleChangeC = this.handleChangeC.bind(this)
    this.handleChangeMonth = this.handleChangeMonth.bind(this)
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
    const dateNow = dateformat(this.state.now, 'd')
    const monthNow = dateformat(this.state.now, 'm')
    const yearNow = dateformat(this.state.now, 'yyyy')
    axios.get(`https://api.covid19api.com/country/indonesia/status/confirmed?from=${yearNow}-${monthNow}-01T00:00:00Z&to=${yearNow}-${monthNow}-${dateNow}T00:00:00Z`)
      .then((res) => {
        res.data.map((date) => {
          return this.state.date.push(dateformat(date.Date, 'd/m/yyyy'))
        })
        this.setState({
          month: dateformat(res.data[0].Date, 'mmmm'),
          year: dateformat(res.data[0].Date, 'yyyy')
        })
      })
  }

  // Handle Change Country
  handleChangeA (e) {
    axios.get(`https://api.covid19api.com/country/${e.target.value}/status/confirmed?from=${this.state.year}-${this.state.dateMonth}-01T00:00:00Z&to=${this.state.year}-${this.state.dateMonth}-${this.state.endDate}T00:00:00Z`)
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
    axios.get(`https://api.covid19api.com/country/${e.target.value}/status/confirmed?from=${this.state.year}-${this.state.dateMonth}-01T00:00:00Z&to=${this.state.year}-${this.state.dateMonth}-${this.state.endDate}T00:00:00Z`)
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
    axios.get(`https://api.covid19api.com/country/${e.target.value}/status/confirmed?from=${this.state.year}-${this.state.dateMonth}-01T00:00:00Z&to=${this.state.year}-${this.state.dateMonth}-${this.state.endDate}T00:00:00Z`)
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

  // Handle Change Month
  handleChangeMonth (e) {
    this.setState({
      dateMonth: e.target.value
    })

    let endDate = ''
    if (e.target.value === '02') {
      if (Number(this.state.year) % 4 === 0) {
        endDate = '29'
      } else {
        endDate = '28'
      }
    }
    // if (e.target.value === '01' || e.target.value === '03' || e.target.value === '05' || e.target.value === '07' || e.target.value === '08' || e.target.value === '10' || e.target.value === '12') {
    if (e.target.value === '01' || e.target.value === '03' || e.target.value === '05' || e.target.value === '07' || e.target.value === '08') {
      endDate = '31'
    }
    // if (e.target.value === '04' || e.target.value === '06' || e.target.value === '09' || e.target.value === '11') {
    if (e.target.value === '04' || e.target.value === '06' || e.target.value === '09') {
      endDate = '30'
    }
    if (e.target.value === dateformat(this.state.now, 'm')) {
      endDate = dateformat(this.state.now, 'd')
    }

    this.setState({
      endDate: endDate
    })

    // Change Month Country A
    axios.get(`https://api.covid19api.com/country/${this.state.countryA}/status/confirmed?from=${this.state.year}-${e.target.value}-01T00:00:00Z&to=${this.state.year}-${e.target.value}-${endDate}T00:00:00Z`)
      .then((res) => {
        const selectDate = []
        res.data.map((date) => {
          return selectDate.push(dateformat(date.Date, 'd/m/yyyy'))
        })
        this.setState({
          date: selectDate,
          month: dateformat(res.data[0].Date, 'mmmm'),
          year: dateformat(res.data[0].Date, 'yyyy')
        })

        const data = []
        res.data.map((date) => {
          return data.push(date.Cases)
        })
        this.setState({
          countryA: res.data[0].Country,
          dataA: data
        })
      })
    // End Change Month Country A

    // Change Month Country B
    axios.get(`https://api.covid19api.com/country/${this.state.countryB}/status/confirmed?from=${this.state.year}-${e.target.value}-01T00:00:00Z&to=${this.state.year}-${e.target.value}-${endDate}T00:00:00Z`)
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
    // End Change Month Country B

    // Change Month Country C
    axios.get(`https://api.covid19api.com/country/${this.state.countryC}/status/confirmed?from=${this.state.year}-${e.target.value}-01T00:00:00Z&to=${this.state.year}-${e.target.value}-${endDate}T00:00:00Z`)
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
    // End Change Month Country C
  }
  // End Handle Chenge Month

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

          {/* Select Month */}
          <select name='month' id='month' className='Select-Month' onChange={this.handleChangeMonth}>
            <option className='' value=''>- Select Month -</option>
            <option className='' value='01'>Januari</option>
            <option className='' value='02'>Februari</option>
            <option className='' value='03'>Maret</option>
            <option className='' value='04'>April</option>
            <option className='' value='05'>Mei</option>
            <option className='' value='06'>Juni</option>
            <option className='' value='07'>Juli</option>
            <option className='' value='08'>Agustus</option>
            <option className='' value='09'>September</option>
            <option className='' value='10'>Oktober</option>
            <option className='' value='11'>November</option>
            <option className='' value='12'>Desember</option>
          </select>
          {/* End Select Month */}

          {/* <h4>{dateformat(this.state.now, 'd/m/yyyy')}</h4> */}

          <LineGraph
            className='data-month'
            month={this.state.month}
            year={this.state.year}
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
