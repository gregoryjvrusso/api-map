import React, { useState, useEffect } from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'

const mapStyles = {
    width: '90%',
    height: '70%'
};

const GoogleMaps = ({ latMap, lngMap }) => {
    return (
        <Map
            google={window.google}
            zoom={18}
            style={mapStyles}
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