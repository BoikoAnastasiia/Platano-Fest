import { API_GOOGLE } from '../../API';
import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 44.70575,
  lng: 37.5982,
};

function GoogleMapComp() {
  return (
    <LoadScript googleMapsApiKey={API_GOOGLE}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(GoogleMapComp);
