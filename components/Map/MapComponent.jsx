import React from "react";
import Map, { GeolocateControl, Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from "react";
import { GiPositionMarker } from "react-icons/gi";

function MapComponent({ latitude, longitude }) {
  const [viewState, setViewState] = useState({
    latitude,
    longitude,
    zoom: 10,
    width: "100%",
    height: "400px",
  });
  const [markerPoint, setMarkerPoint] = useState({
    lat: 0,
    lgt: 0,
  });
  console.log(markerPoint);
  return (
    <Map
      {...viewState}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_PUBLIC_KEY}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      onMove={(event) => setViewState(event.viewState)}
    >
      <Marker
        latitude={markerPoint.lat}
        longitude={markerPoint.lgt}
        scale={5}
        anchor="bottom"
        draggable
        onDrag={(event) =>
          setMarkerPoint({
            lat: event.lngLat.lat,
            lgt: event.lngLat.lng,
          })
        }
      >
        <GiPositionMarker />
      </Marker>
      <GeolocateControl
        positionOptions={{ enableHighAccuracy: true }}
        trackUserLocation={true}
        showUserHeading={true}
        onGeolocate={(event) =>
          setMarkerPoint({
            lat: event.coords.latitude,
            lgt: event.coords.longitude,
          })
        }
        showUserLocation={true}
      />
    </Map>
  );
}

export default MapComponent;
