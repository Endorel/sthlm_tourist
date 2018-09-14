import React, { Component } from "react";
import './App.css';
import Map from './components/Map';
import Table from './components/Table';
import {MAP} from 'react-google-maps/lib/constants';


//gain access to google.maps.Map in order to get access to the setZoom method
//because package does not expose this method
const refs = {
  map: undefined,
  mapObject: undefined
}

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      mapStart: {
        center: {
            lat: 59.334591,
            lng: 18.063240
          },
        zoom: 11
    },
    markers: [{
      id: 1,
            name: 'Vasa',
            day: 'Monday',
            lat: 59.327937, 
            lng: 18.091391
    }],
    isEditing: false,
    isOpen: false,
    searchString: ''
    }

    //Map methods
    this.handleMapClick = this.handleMapClick.bind(this);
    this.setNewMarker = this.setNewMarker.bind(this);
    this.handleToggleOpen = this.handleToggleOpen.bind(this);
    this.handleToggleClose = this.handleToggleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDayChange = this.handleDayChange.bind(this);
    

    //Table methods
    this.updateSearchString = this.updateSearchString.bind(this);
}

/* MAP METHODS */

onMapMounted (ref) {

    refs.map = ref;
    refs.mapObject = ref.context[MAP];
    
}

handleMapClick = (event) => {

  console.log('markers:', this.state.markers);
  //You must use () when accessing lat and lng in Google Maps event-object since they are functions in the object.
    const newPlace = {
                    id: 2,
                    name: '',
                    day: '',
                    lat: event.latLng.lat(), 
                    lng: event.latLng.lng()
                  };

    this.setState({
        isEditing: true,
    });
    this.setNewMarker(newPlace);
}

setNewMarker = newPlace => {

  this.setState({
    markers: this.state.markers.concat(newPlace),
  }
);

  //console.log('Ny lista: ', this.state);
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

handleSubmit = (e, marker) => {
  e.preventDefault();
  //console.log('submit: ', this.state);
  let markers = JSON.parse(JSON.stringify(this.state.mapMarkers));
  
  const newItem = {
    name: this.name.value,
    day: this.day.value,
    lat: this.lat.value,
    lng: this.lng.value
  };
  //console.log('itemList: ', newItem);
  
  
  this.setState({
      mapMarkers: newItem,
      isEditing: false,
      isOpen: false
  });
  
}

handleNameChange (event) {
  this.setState({
      mapMarkers: {name: this.name.value}});
}

handleDayChange (event) {
  this.setState({
      mapMarkers: {day: this.day.value}
  });
}

/* TABLE METHODS */

updateSearchString (event) {
  console.log(event.target.value);
  this.setState({
      searchString: event.target.value.substr(0, 50)
  });
}

  panToMarker = (i) => {
    const { markers } = this.props;

    

    const latLng = {lat:markers[i].lat,
                    lng: markers[i].lng
                    };
    
                    this.setState({
                      mapStart: {
                        center: {
                          lat: latLng.lat,
                          lng: latLng.lng
                        }
                      }
                    });

    refs.mapObject.setZoom(17);

  }

  removeTableItem = index => {
    const { mapMarkers, tableItems } = this.state;

    this.setState({
      mapMarkers: mapMarkers.filter((marker, i) => {
        return i !== index;
      }),tableItems: tableItems.filter((marker, i) => {
        return i !== index;
      })
    });
  }

  render() {
    console.log('App: ', this.state);
    const { markers, mapStart, searchString } = this.state;
    return (
      <div className="container">
        <Map onMapMounted={this.onMapMounted}
            mapStart={mapStart}
            markers={markers}
            isEditing={this.state.isEditing}
            isOpen={this.state.isOpen}
            handleMapClick={this.handleMapClick}
            handleToggleOpen={this.handleToggleOpen}
            />
        <Table items={markers}
              isEditing={this.state.isEditing}
              removeTableItem={this.removeTableItem}
              panToMarker={this.panToMarker}
              searchString={searchString}
              updateSearchString={this.updateSearchString}
              />
              
      </div>
    );
  }
}



export default App;
