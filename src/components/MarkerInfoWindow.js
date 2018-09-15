import React, { Component } from 'react';
import { Marker, InfoWindow } from 'react-google-maps';

class MarkerInfoWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
        this.handleToggleOpen = this.handleToggleOpen.bind(this);
        this.handleToggleClose = this.handleToggleClose.bind(this);
    }

    handleToggleOpen = () => {
    
        this.setState({
            isOpen: true
        });
      }

    handleToggleClose = () => {
        this.setState({
            isOpen: false
        });
      }
        
    render () {
        //console.log('Info: ', this.props);
        const { marker } = this.props;
        return (
            <Marker
                key={marker.id}
                position={{ lat: marker.lat, lng: marker.lng}}
                onClick={this.handleToggleOpen}
                >
                    {
                        this.state.isOpen &&
                    <InfoWindow onCloseClick={this.handleToggleClose}>
                    <div>
                        <span>{marker.name}</span><br/>
                        <span>Visit on: {marker.day}</span>
                    </div>
                    </InfoWindow>
                    }
            </Marker>
        );
    }
}

export default MarkerInfoWindow;
