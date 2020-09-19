import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { MapboxGradientBoxControl, MapboxInfoBoxControl } from "mapbox-gl-infobox";
import "mapbox-gl-infobox/styles.css";

import './Map.css';
import data from './data/all_geology_num.json';

mapboxgl.accessToken =
  'pk.eyJ1Ijoicm9jay1vbiIsImEiOiJjazdmamdqM2swM2tiM2RzMTVzZHo0azE4In0.R7p1gm6-ACCcAzC68BfdXw';

const Map = () => {
  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(-124.09809);
  const [lat, setLat] = useState(42.59516);
  const [zoom, setZoom] = useState(7);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/rock-on/ckeuqci31017519qsm5xlcmyo',
      center: [lng, lat],
      zoom: zoom
    });
    console.log(data)
    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');
    map.addControl(new mapboxgl.GeolocateControl(), 'top-left')

    const layerId = "geology-layer";
    const formatter = properties => properties ? `<b>Rock Type:</b> ${properties['G_ROCK_TYP']}` : '';
    const infoboxOptions: MapboxInfoBoxOptions = {
        layerId,
        formatter
    };
    map.addControl(new MapboxInfoBoxControl(infoboxOptions));
    // map.addControl(new MapboxInfoBoxControl());
    // map.addControl(new MapboxGradientBoxControl());
    // var layers = map.getStyle().layers;
    //   // Find the index of the first symbol layer in the map style
    //   var firstSymbolId;
    //   for (var i = 0; i < layers.length; i++) {
    //     if (layers[i].type === 'symbol') {
    //       firstSymbolId = layers[i].id;
    //       break;
    //     }
    //   }

    let stops = [
        [0, '#fbff00'],
        [26, '#ff4f00'],
        [52, '#0083ff']
      ]
    map.on('load', () => {
      map.addSource('geology', {
        type: 'geojson',
        data
      });
      map.addLayer(
        {
          id: 'geology-layer',
          type: 'fill',
          source: 'geology'
        },
        'tunnel-street-minor-low');

      map.setPaintProperty('geology-layer', 'fill-color', {
        property: "color",
        stops: stops
      });

    });


    // Clean up on unmount
    return () => map.remove();

  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <div className='map-container' ref={mapContainerRef} />
    </div>
  );

}

export default Map;
