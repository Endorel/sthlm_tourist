import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class Map extends Component {
    render () {
        const { markers } = this.props;

        const mapMarkers = markers.map((marker, index) => {
            return (
                <Marker key={index} position={{lat: marker.lat, lng: marker.lng}} />
            );
        });
        const GoogleMapExample = withGoogleMap(props => (
                
            <GoogleMap
                defaultCenter = {{lat:59.334591, lng: 18.063240}}
                defaultZoom = {11}
            >
            {mapMarkers}
            </GoogleMap>
        ));


        return (
            <div style={{margin: '0 auto'}}>
                <GoogleMapExample
                    containerElement = {<div style={{ height: '700px', width: '1200px'}} />}
                    mapElement = {<div style={{height: '100%'}} />}
                />
            </div>
        );
    }
}

export default Map;


