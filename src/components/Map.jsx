import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
// import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import { Link } from 'react-router-dom'


const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: -41.097548,
          lng: 174.869463
        }}
      />
    );
  }
}

export default GoogleApiWrapper(
  (props) => ({
    apiKey: props.AIzaSyDe3hgpuy5UdubxL61Lz9KnX8GjVr4Pudk
  }
  ))(MapContainer)




//     // binding this to event-handler functions
//     this.onMarkerClick = this.onMarkerClick.bind(this);
//     this.onMapClick = this.onMapClick.bind(this);
//   }
//   onMarkerClick = (props, marker, e) => {
//     this.setState({
//       selectedPlace: props,
//       activeMarker: marker,
//       showingInfoWindow: true
//     });
//   }
//   onMapClick = (props) => {
//     if (this.state.showingInfoWindow) {
//       this.setState({
//         showingInfoWindow: false,
//         activeMarker: null
//       });
//     }
//   }
//   render() {
//     const style = {
//       width: '50vw',
//       height: '75vh',
//       'marginLeft': 'auto',
//       'marginRight': 'auto'
//     }
//     return (
//       <Map
//         item
//         xs = { 12 }
//         style = { style }
//         google = { this.props.google }
//         onClick = { this.onMapClick }
//         zoom = { 14 }
//         initialCenter = {{ lat: 39.648209, lng: -75.711185 }}
//       >
//         <Marker
//           onClick = { this.onMarkerClick }
//           title = { 'Changing Colors Garage' }
//           position = {{ lat: 39.648209, lng: -75.711185 }}
//           name = { 'Changing Colors Garage' }
//         />
//         <InfoWindow
//             marker={this.state.activeMarker}
//           visible={this.state.showingInfoWindow}
//           onClose={this.onClose}
//         >

//         </InfoWindow>
//       </Map>
//     );
//   }
// }













