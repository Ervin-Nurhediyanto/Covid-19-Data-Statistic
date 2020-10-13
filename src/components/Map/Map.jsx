import React, { Component } from 'react'
import { compose, withProps } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import './Map.css'

const MyMapComponent = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '400px', width: '1120px' }} />,
    mapElement: <div style={{ height: '100%' }} />
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={8}
    // defaultCenter={{ lat: props.lat, lng: props.lng }}
    defaultCenter={{ lat: -7.872556899999998, lng: 110.37245039999999 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: props.lat, lng: props.lng }} onClick={props.onMarkerClick} />}
  </GoogleMap>
)

export default class Map extends Component {
  constructor () {
    super()
    this.state = {
      isMarkerShown: false,
      location: {
        lat: 1,
        lng: 1
      }
    }
    this.handleChangeKariadi = this.handleChangeKariadi.bind(this)
    this.handleChangeRadiologi = this.handleChangeRadiologi.bind(this)
  }

  delayedShowMarker () {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick () {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  handleChangeKariadi () {
    this.setState({
      location: {
        lat: -6.9935424,
        lng: 110.4069221
      }
    })
  }

  handleChangeRadiologi () {
    this.setState({
      location: {
        lat: -7.872556899999998,
        lng: 110.37245039999999
      }
    })
  }

  componentDidMount () {
    this.delayedShowMarker()
  }

  render () {
    return (
      <div>
        <MyMapComponent
          isMarkerShown={this.state.isMarkerShown}
          lat={this.state.location.lat}
          lng={this.state.location.lng}
          onMarkerClick={this.handleMarkerClick}
        />
        <div className='RS-List mt-2'>
          <div className='RS bg-light' onClick={this.handleChangeKariadi}>
            <h4>RSUD K.R.M.T Wongsonegoro Kota Semarang</h4>
            <p>Rumah sakit pemerintah di Semarang, Jawa Tengah (024) 6711500</p>
          </div>
          <div className='RS bg-light' onClick={this.handleChangeRadiologi}>
            <h4>Instalasi Radiologi RS Kota Yogyakarta</h4>
            <p>Rumah sakit di Yogyakarta</p>
          </div>
        </div>
      </div>
    )
  }
}
