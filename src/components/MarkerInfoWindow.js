import React, { Component } from 'react';
import { Marker, InfoWindow } from 'react-google-maps';

//this needed to be a "smart" component to handle the state for the InfoWindow.
//If put in App.js all InfoWindows would open when 1 is clicked

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
        const { marker } = this.props;
        return (
            <Marker
                key={marker.id}
                position={{ lat: marker.lat, lng: marker.lng}}
                onClick={this.handleToggleOpen}
                >
                    { this.state.isOpen &&
                        <InfoWindow onCloseClick={this.handleToggleClose}>
                        <div style={{marginLeft: '10%', textAlign: 'center'}}>
                            <h2 style={{marginBottom: '0'}}>{marker.name}</h2>
                            <p style={{fontSize: '14px', marginTop: '0'}} ><b>Visit on: </b>{marker.day}</p>
                        </div>
                        </InfoWindow>
                    }
            </Marker>
        );
    }
}

export default MarkerInfoWindow;
