import React, { Component } from 'react';
import './App.css';
import Map from './Map';
import Table from './Table';
import {MAP} from 'react-google-maps/lib/constants'
//import Form from './Form';

//gain access to google.maps.Map in order to get access to the setZoom method
//because package does not expose this method
const refs = {
  map: undefined,
  mapObject: undefined
}

class App extends Component {

  state = {
    mapStart: {
      center: {
        lat: 59.334591,
        lng: 18.063240
      },
      zoom: 11
    },
    markers: [
      {
        name: 'Vasa',
        lat: 40.854885,
        lng: -88.081807
      },
      {
        name: 'Mall of Scandinavia',
        lat: 59.369045,
        lng: 18.005934
      }
    ]
  };

  onMapMounted (ref) {

    refs.map = ref;
    refs.mapObject = ref.context[MAP];
    
}

  onToggleOpen = (marker) => {

    this.setState({
      marker: {
        isOpen: !marker.isOpen
      }
    });

    console.log('isOpen: ', this.state.marker.isOpen);
  }

  setNewMarker = (newPlace) => {

    this.setState({
      markers: this.state.markers.concat(newPlace)
    });

    console.log('Ny lista: ', this.state);
}

handleMapClick = event => {
  //You must use () when accessing lat and lng in Google Maps event-object since they are functions in the object.
    const newPlace = {name: 'En plats',
                    lat: event.latLng.lat(), 
                    lng: event.latLng.lng()
                  };
    
    this.setNewMarker(newPlace);
}

  handleSubmit = marker => {
    this.setState({markers: [...this.state.markers, marker]});
  }

  panToMarker = (i) => {
    const { markers } = this.state;

    console.log('Marker: ', markers[i]);

    const lat = markers[i].lat;
    const lng = markers[i].lng;

    this.setState({
      mapStart: {
        center: {
          lat: lat,
          lng: lng,
          
        }}
    });

    refs.mapObject.setZoom(18);

    console.log('panToMarker state: ', this.state.mapStart);

  }

  removeMarker = index => {
    const { markers } = this.state;

    this.setState({
      markers: markers.filter((marker, i) => {
        return i !== index;
      })
    });

  }

  render() {
    const { markers, mapStart } = this.state;
    return (
      <div className="container">
        <Map onMapMounted={this.onMapMounted} mapStart={mapStart} markers={markers} handleMapClick={this.handleMapClick} onToggleOpen={this.onToggleOpen} />
        <Table markers={markers} removeMarker={this.removeMarker} panToMarker={this.panToMarker} />
        
      </div>
    );
  }
}

export default App;
