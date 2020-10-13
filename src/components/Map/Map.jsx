import React, { Component } from 'react'
import { compose, withProps } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import './Map.css'

const MyMapComponent = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '400px', width: '1150px' }} />,
    mapElement: <div style={{ height: '100%' }} />
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={8}
    // defaultCenter={{ lat: props.lat, lng: props.lng }}
    center={{ lat: props.lat, lng: props.lng }}
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

  componentDidMount () {
    this.delayedShowMarker()
  }

  render () {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        lat={this.state.location.lat}
        lng={this.state.location.lng}
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}
