import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 55.72,
      lng: 37.6,
    },
    zoom: 11,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.API_GOOGLE }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        ></GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
