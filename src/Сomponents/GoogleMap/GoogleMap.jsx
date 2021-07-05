import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export default function GoogleMap(props) {
  return (
    <GoogleApiWrapper>
      apiKey: env.API_GOOGLE
      <Map
        google={props.google}
        zoom={8}
        initialCenter={{ lat: 55.732727102434694, lng: 37.55136009500726 }}
      >
        <Marker position={props.marker} />
      </Map>
    </GoogleApiWrapper>
  );
}
