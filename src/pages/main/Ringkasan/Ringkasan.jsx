import React, { Component } from 'react'
import axios from 'axios'
import './Ringkasan.css'
import Navbar from '../../../components/Navbar/navbar'
import CardStatus from '../../../components/CardStatus'
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
      isLoading: false,
      selectCountry: {
        NewConfirmed: 0,
        TotalConfirmed: 0,
        NewDeaths: 0,
        TotalDeaths: 0,
        NewRecovered: 0,
        TotalRecovered: 0
      },
      nameCountry: ''
    }
    this.handleChange = this.handleChange.bind(this)
    // this.handleSelectCountry = this.handleSelectCountry.bind(this)
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
  }

  // handleSelectCountry () {
  //   this.state.contries.map(function (country, index) {
  //     if (this.state.nameCountry === country.Country) {
  //       this.setState({
  //         selectCountry: country
  //       })
  //     }
  //     return console.log(this.state.selectCountry)
  //   })
  // }

  componentDidMount () {
    this.getGlobalStatus()
  }

  render () {
    // this.handleSelectCountry()
    return (
      <div className='container-flut row bg-dark home'>
        <Navbar />
        <div className='container col-10'>
          {/* Seluruh Dunia */}
          <div className='row pt-3 pr-3'>
            <div className='col-12'>
              <div className='row pl-3'>
                <svg width='2em' height='2em' viewBox='0 0 16 16' class='bi bi-globe mr-2 text-light' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
                  <path fill-rule='evenodd' d='M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4H2.255a7.025 7.025 0 0 1 3.072-2.472 6.7 6.7 0 0 0-.597.933c-.247.464-.462.98-.64 1.539zm-.582 3.5h-2.49c.062-.89.291-1.733.656-2.5H3.82a13.652 13.652 0 0 0-.312 2.5zM4.847 5H7.5v2.5H4.51A12.5 12.5 0 0 1 4.846 5zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5H7.5V11H4.847a12.5 12.5 0 0 1-.338-2.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12H7.5v2.923c-.67-.204-1.335-.82-1.887-1.855A7.97 7.97 0 0 1 5.145 12zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11H1.674a6.958 6.958 0 0 1-.656-2.5h2.49c.03.877.138 1.718.312 2.5zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12h2.355a7.967 7.967 0 0 1-.468 1.068c-.552 1.035-1.218 1.65-1.887 1.855V12zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5h-2.49A13.65 13.65 0 0 0 12.18 5h2.146c.365.767.594 1.61.656 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4H8.5V1.077c.67.204 1.335.82 1.887 1.855.173.324.33.682.468 1.068z' />
                </svg>
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
                <select name='country' id='country' onChange={this.handleChange}>
                  <option value=''>- Select Country -</option>
                  {this.state.contries.map(function (country, index) {
                    return (<option key={index} value={country.Country}>{country.Country}</option>)
                  })}

                </select>
              </div>
            </div>
            {this.state.contries.map(function (country, index) {
              if (country.Country === this.state.nameCountry) {
                this.setState({
                  selectCountry: country
                })
              }
              return (
                <>
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
                </>
              )
            })}

          </div>
          {/* End Negara */}

        </div>
      </div>
    )
  }
}
export default Home
