import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from "react-google-maps";
import MarkerInfoWindow from './MarkerInfoWindow';



const RenderMap = withGoogleMap(props => (
    
    <GoogleMap
        ref={props.onMapMounted}
        onClick={props.handleMapClick}
        zoom={props.zoom}
        center={props.center}>
        {
            props.markers.map((marker, i) => (
                <MarkerInfoWindow key={i}
                                marker={marker}
                                isEditing={props.isEditing}
                                isOpen={props.isOpen}
                                handleToggleOpen={props.handleToggleOpen}
                                >
                    
                </MarkerInfoWindow>
            ))
        }
    </GoogleMap >
));

class Map extends Component {
  

    render() {
        console.log('Props', this.props);
        //console.log('Map state', this.state.mapMarkers);
        return (
            <div>
                <RenderMap
                    containerElement = {<div style={{ height: '700px', width: '1200px'}} />}
                    mapElement = {<div style={{height: '100%'}} />}
                    onMapMounted={this.props.onMapMounted}
                    markers={this.props.markers}
                    isEditing={this.props.isEditing}
                    isOpen={this.props.isOpen}
                    center={this.props.mapStart.center}
                    zoom={this.props.mapStart.zoom}
                    handleMapClick={this.props.handleMapClick}
                    handleToggleOpen={this.props.handleToggleOpen}
                />
            </div>
        )
    }
}

export default Map;
