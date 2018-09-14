import React, { Component } from 'react';
import { Marker, InfoWindow } from 'react-google-maps';

class MarkerInfoWindow extends Component {

        
    render () {
        console.log('Info: ', this.props);
        const { marker } = this.props;
        return (
            <Marker
                key={marker.id}
                position={{ lat: marker.lat, lng: marker.lng}}
                onClick={this.props.handleToggleOpen}
                >

                {
                    (this.props.isEditing == false) && this.props.isOpen &&
                <InfoWindow onCloseClick={this.handleToggleClose}>
                    <span>{this.props.markers.name}</span>
                </InfoWindow>
                }
                {this.props.isEditing && this.props.isOpen &&
                    <InfoWindow onCloseClick={this.handleToggleClose}>
                        <form onSubmit={this.handleSubmit}>
                            <input ref={input => this.name = input} type='text' name='name' value={marker.name} onChange={this.handleNameChange} />
                            <input ref={input => this.day = input} type='text' name='day' value={marker.day} onChange={this.handleDayChange} />
                            <input ref={input => this.lat = input} type='hidden' name='lat' value={marker.lat} readOnly />
                            <input ref={input => this.lng = input} type='hidden' name='lng' value={marker.lng} readOnly />
                            <button type='submit'>Save</button>
                        </form>
                    </InfoWindow>
                }
                
            </Marker>
        );
    }
}

export default MarkerInfoWindow;
