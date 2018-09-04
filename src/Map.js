import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";


const RenderMap = withGoogleMap(props => (
    
    <GoogleMap
        ref={props.onMapLoad}
        onClick={props.onMapClick}
        zoom={props.zoom}
        center={props.center}>
        {
            props.markers.map((marker, i) => (
                <Marker key={i} position={{lat: marker.lat, lng: marker.lng, zoom:marker.zoom}}
                />
            ))
        }
    </GoogleMap >
));

class Map extends Component {
   

    render() {
        console.log('Props', this.props);
        return (
            <div>
                <RenderMap
                    containerElement = {<div style={{ height: '700px', width: '1200px'}} />}
                    mapElement = {<div style={{height: '100%'}} />}
                    onMapLoad={this.props.onMapMounted}
                    onMapClick={this.props.handleMapClick}
                    markers = {this.props.markers}
                    center={this.props.mapStart.center}
                    zoom={11}
                    
                />
            </div>
        )
    }
}

export default Map;
