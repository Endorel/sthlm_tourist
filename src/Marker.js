import React, { Component } from 'react';
import { Marker } from 'react-google-maps';

class Marker extends Component {
    render () {

        console.log('Marker.js används');

        const mapMarkers = props.markers.map((marker, index) => {
            return (
                <Marker key={index} position={{lat: marker.lat, lng: marker.lng}} />
            );
        });
        return(
            <h1>I am a Marker</h1>
        );
    }
}

export default Marker;
