import React from "react";
import { Map, TileLayer} from "react-leaflet";
import GeojsonLayer from './GeojsonLayer';
import '../css/Map.css';

class MapComponent extends React.Component {
  state = {
    lat: 13.9,
    lng: 100.6,
    zoom: 6.5,
  };

  render() {
    var center = [this.state.lat, this.state.lng];
    var z = this.state.zoom;

    return (
      <Map zoom={z} center={center}>
        {/* <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url={basemapsDict[this.state.basemap]}
        /> */}      
        <GeojsonLayer url="thailand.json" />
      </Map>
    );
  }
};

export default MapComponent;