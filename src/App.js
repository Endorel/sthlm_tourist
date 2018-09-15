import React, { Component } from "react";
//import './App.css';
import Map from './components/Map';
import Table from './components/Table';
import {MAP} from 'react-google-maps/lib/constants';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

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
      newName: '',
      newDay: '',
    newMarkerCoords: {},
    isEditing: false,
    isOpen: false,
    searchString: '',
    open: false
    }

    //Map methods
    this.handleMapClick = this.handleMapClick.bind(this);
    this.setNewMarker = this.setNewMarker.bind(this);
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);   

    //Table methods
    this.updateSearchString = this.updateSearchString.bind(this);
}

handleClickOpen = (coords) => {
  //console.log(coords);
  const latLng = {
    lat: coords.lat(),
    lng: coords.lng()
  }
  this.setState({ open: true });
};

handleClose = () => {
  this.setState({ open: false });
};

/* MAP METHODS */

onMapMounted (ref) {

    refs.map = ref;
    refs.mapObject = ref.context[MAP];
    
}

handleMapClick = (event) => {

  const latLng = event.latLng;

  this.handleClickOpen(latLng);
  //You must use () when accessing lat and lng in Google Maps event-object since they are functions in the object.
    this.setState({
      newMarkerCoords: {
        lat: latLng.lat(),
        lng: latLng.lng()
      }
    });

  console.log('marker:', this.state.newMarkerCoords);

}

onInputChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
});
console.log(this.state.newName);

}

setNewMarker = newPlace => {

  this.setState({
    markers: this.state.markers.concat(newPlace),
  }
);

}

handleSubmit = (e, marker) => {
  e.preventDefault();

  console.log('formulär: ', this.state.newMarkerText);
  
  let markers = JSON.parse(JSON.stringify(this.state.markers));
  const coords = this.state.newMarkerCoords;
  
  const newPlace = {
    id: 2,
    name: this.state.newName,
    day: this.state.newDay,
    lat: coords.lat, 
    lng: coords.lng
  };

this.setNewMarker(newPlace);
this.handleClose();

  
}


/* TABLE METHODS */

updateSearchString (event) {
  console.log(event.target.value);
  this.setState({
      searchString: event.target.value.substr(0, 50)
  });
}

  panToMarker = (i) => {
    const { markers } = this.state;
    console.log(markers);
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
    const { markers, tableItems } = this.state;

    this.setState({
      markers: markers.filter((marker, i) => {
        return i !== index;
      })
    });
  }

  render() {
    //console.log('App: ', this.state);
    const { markers, mapStart, searchString } = this.state;
    return (
      <div style={{fontFamily: 'Roboto'}}>
        <div style={{width: '80%', margin: '5% auto', textAlign: 'center'}}>
          <h1>Stockholm tourist</h1>
          <p>Click the map to add places to your list of places to visit.</p>
          <Dialog
            open={this.state.open}
            onClose={this.state.handleClose}
            aria-labelledby="form-dialog-title"
            >
            <DialogTitle id="form-dialog-title">Add place to visit</DialogTitle>
            <DialogContent>
                <DialogContentText>
                Enter a name and day for visit:
                </DialogContentText>
                <form id="markerForm" onSubmit={this.handleSubmit} onChange={this.onInputChange}>
                <TextField
                autoFocus
                margin="dense"
                id="name"
                name="newName"
                label="Name"
                type="text"
                fullWidth
                />
                <TextField
                margin="dense"
                id="day"
                name="newDay"
                label="Day"
                type="text"
                fullWidth
                />
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={this.onClose}
                        color="primary"
                        type="submit"
                        form="markerForm"
                        >
                Add
                </Button>
                <Button onClick={this.onClose} color="primary">
                Cancel
                </Button>
            </DialogActions>
            </Dialog>
        </div>
        <Map onMapMounted={this.onMapMounted}
            mapStart={mapStart}
            markers={markers}
            isOpen={this.state.isOpen}
            handleMapClick={this.handleMapClick}
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
