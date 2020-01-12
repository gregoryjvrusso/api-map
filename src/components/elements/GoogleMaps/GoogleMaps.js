import React from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'

const GoogleMaps = ({ latMap, lngMap }) => {
  return (
    <Map
      google={window.google}
      zoom={18}
      style={{ width: '100%', height: '50%', position: 'relative'}}
      initialCenter={{ lat: latMap, lng: lngMap }}
      center={{ lat: latMap, lng: lngMap }}
    >
      <Marker
        name={'SOMA'}
        position={{ lat: latMap, lng: lngMap }} />
    </Map>
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAtxEFG6FZcvaVN-Ng6IE3_zUNHkhNsBWU'
})(GoogleMaps)