import React, { Component } from 'react'
import axios from 'axios'
import './Ringkasan.css'
import Navbar from '../../../components/Navbar/navbar'
import Globe from '../../../components/Globe/Globe'
import CardStatus from '../../../components/CardStatus'
import Pie from '../../../components/Charts/Pie Charts/Pie/Pie'
import Doughnut from '../../../components/Charts/Pie Charts/Doughnut/Doughnut'
import Map from '../../../components/Map/Map'

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
      isLoading: false,
      selectCountry: {
        Country: '',
        CountryCode: '',
        Slug: '',
        NewConfirmed: 0,
        TotalConfirmed: 0,
        NewDeaths: 0,
        TotalDeaths: 0,
        NewRecovered: 0,
        TotalRecovered: 0,
        Date: '',
        Premium: {}
      },
      nameCountry: '',
      location: {
        lat: -0.79,
        lon: 113.92
      }
    }
    this.handleChange = this.handleChange.bind(this)
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

  handleChange (e) {
    this.setState({
      nameCountry: e.target.value
    })
    this.state.contries.map((country) => {
      if (country.Country === e.target.value) {
        this.setState({
          selectCountry: country
        })
        axios.get('https://api.covid19api.com/dayone/country/' + e.target.value + '/status/confirmed').then((res) => {
          this.setState({
            location: {
              lat: Number(res.data[0].Lat),
              lon: Number(res.data[0].Lon)
            }
          })
        })
      }
      if (!e.target.value) {
        this.setState({
          selectCountry: {
            Country: '',
            CountryCode: '',
            Slug: '',
            NewConfirmed: 0,
            TotalConfirmed: 0,
            NewDeaths: 0,
            TotalDeaths: 0,
            NewRecovered: 0,
            TotalRecovered: 0,
            Date: '',
            Premium: {}
          }
        })
      }
      return console.log('Data Country')
    })
  }

  componentDidMount () {
    this.getGlobalStatus()
  }

  render () {
    return (
      <div className='container-flut row bg-dark home'>
        <Navbar color1='red' />
        <div className='container col-10'>

          {/* Seluruh Dunia */}
          <div className='row pt-3 pr-3'>
            <div className='col-12'>
              <div className='row pl-3'>
                <Globe />
                <h4 className='text-light'>Seluruh Dunia</h4>
              </div>
            </div>
            <div className='col-3'>
              <CardStatus
                title='New Confirmed'
                data={this.state.globalStatus.NewConfirmed}
                color='orange'
              />
            </div>
            <div className='col-3'>
              <CardStatus
                title='Total Confirmed'
                data={this.state.globalStatus.TotalConfirmed}
                color='blue'
              />
            </div>
            <div className='col-3'>
              <CardStatus
                title='Total Deaths'
                data={this.state.globalStatus.TotalDeaths}
                color='red'
              />
            </div>
            <div className='col-3'>
              <CardStatus
                title='Total Recovered'
                data={this.state.globalStatus.TotalRecovered}
                color='green'
              />
            </div>
          </div>
          {/* End Seluruh Dunia */}

          {/* Negara */}
          <div className='row pt-3 pr-3'>
            <div className='col-12'>
              <div className='row pl-3'>
                <select name='country' id='country' className='' onChange={this.handleChange}>
                  <option className='' value=''>- Select Country -</option>
                  {this.state.contries.map(function (country, index) {
                    return (<option key={index} value={country.Country}>{country.Country}</option>)
                  })}

                </select>
              </div>
            </div>
            <div className='col-3'>
              <CardStatus
                title='New Confirmed'
                data={this.state.selectCountry.NewConfirmed}
                color='orange'
              />
            </div>
            <div className='col-3'>
              <CardStatus
                title='Total Confirmed'
                data={this.state.selectCountry.TotalConfirmed}
                color='blue'
              />
            </div>
            <div className='col-3'>
              <CardStatus
                title='Total Deaths'
                data={this.state.selectCountry.TotalDeaths}
                color='red'
              />
            </div>
            <div className='col-3'>
              <CardStatus
                title='Total Recovered'
                data={this.state.selectCountry.TotalRecovered}
                color='green'
              />
            </div>
          </div>
          {/* End Negara */}

          <div className='row'>
            <Pie
              title='Seluruh Dunia'
              data={[this.state.globalStatus.TotalConfirmed, this.state.globalStatus.TotalDeaths, this.state.globalStatus.TotalRecovered]}
            />
            <Doughnut
              title={this.state.nameCountry}
              data={[this.state.selectCountry.TotalConfirmed, this.state.selectCountry.TotalDeaths, this.state.selectCountry.TotalRecovered]}
            />
          </div>
          <div className='row'>
            <Map
              lat={this.state.location.Lat}
              lng={this.state.location.Lon}
            />
          </div>

        </div>
      </div>
    )
  }
}
export default Home
