import React, { Component } from 'react';
import './App.css';
import Map from './Map';
import Table from './Table';
//import Form from './Form';

class App extends Component {

  state = {
    markers: [
      {
        name: 'Vasa',
        lat: 59.327976,
        lng: 18.091270
      },
      {
        name: 'Mall of Scandinavia',
        lat: 59.369045,
        lng: 18.005934
      }
    ]
  };

  handleSubmit = marker => {
    this.setState({markers: [...this.state.markers, marker]});
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
    const { markers } = this.state;
    return (
      <div className="container">
        <Map markers={markers} />
        <Table markers={markers} removeMarker={this.removeMarker} />
        
      </div>
    );
  }
}

export default App;
