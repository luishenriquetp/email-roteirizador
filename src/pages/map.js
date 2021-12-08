import React, { useCallback, useMemo, useState } from "react";
import {
  GoogleMap,
  Marker,
  LoadScript,
  StandaloneSearchBox,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { REACT_APP_GOOGLE_API_KEY } from "../App";
import "./map.css";


const MapPage = () => {
  const [map, setMap] = useState();
  const [searchBoxA, setSearchBoxA] = useState();
  const [searchBoxB, setSearchBoxB] = useState();
  const [pointA, setPointA] = useState();
  const [pointB, setPointB] = useState();

  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);

  const [response, setResponse] =useState(null);

  const position = {
    lat: -27.590824,
    lng: -48.551262,
  };

  const onMapLoad = (map) => {
    setMap(map);
  };

  const onLoadA = (ref) => {
    setSearchBoxA(ref);
  };

  const onLoadB = (ref) => {
    setSearchBoxB(ref);
  };

  const onPlacesChangedA = () => {
    const places = searchBoxA.getPlaces();
    const place = places[0];
    const location = {
      lat: place?.geometry?.location?.lat() || 0,
      lng: place?.geometry?.location?.lng() || 0,
    };
    setPointA(location);
    setOrigin(null);
    setDestination(null);
    setResponse(null);
    map?.panTo(location);
  };

  const onPlacesChangedB = () => {
    const places = searchBoxB.getPlaces();
    console.log(places);
    const place = places[0];
    const location = {
      lat: place?.geometry?.location?.lat() || 0,
      lng: place?.geometry?.location?.lng() || 0,
    };
    setPointB(location);
    setOrigin(null);
    setDestination(null);
    setResponse(null);
    map?.panTo(location);
  };

  const traceRoute = () => {
    if (pointA && pointB) {
      setOrigin(pointA);
      setDestination(pointB);
    }
  };

  const directionsServiceOptions =
    useMemo(() => {
      return {
        origin,
        destination,
        travelMode: "DRIVING",
      };
    }, [origin, destination]);

  const directionsCallback = useCallback((res) => {
    if (res !== null && res.status === "OK") {
      setResponse(res);
    } else {
      console.log(res);
    }
  }, []);

  const directionsRendererOptions = useMemo(() => {
    return {
      directions: response,
    };
  }, [response]);

  return (
    <div className="map">
      <LoadScript
        googleMapsApiKey={REACT_APP_GOOGLE_API_KEY}
        libraries={["places"]}
      >
        <GoogleMap
          onLoad={onMapLoad}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={position}
          zoom={15}
        >
          <div className="address">
            <StandaloneSearchBox
              onLoad={onLoadA}
              onPlacesChanged={onPlacesChangedA}
            >
              <input
                className="addressField"
                placeholder="Digite o endereço inicial"
              />
            </StandaloneSearchBox>
            <StandaloneSearchBox
              onLoad={onLoadB}
              onPlacesChanged={onPlacesChangedB}
            >
              <input
                className="addressField"
                placeholder="Digite o endereço final"
              />
            </StandaloneSearchBox>
            <button onClick={traceRoute}>Traçar rota</button>
          </div>

          {!response && pointA && <Marker position={pointA} />}
          {!response && pointB && <Marker position={pointB} />}

          {origin && destination && (
            <DirectionsService
              options={directionsServiceOptions}
              callback={directionsCallback}
            />
          )}

          {response && directionsRendererOptions && (
            <DirectionsRenderer options={directionsRendererOptions} />
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapPage;