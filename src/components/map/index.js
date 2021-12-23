/* eslint-disable no-undef */
import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  GoogleMap,
  Marker,
  LoadScript,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";
import "./map.css";
import { position } from './constants'

const MapPage = ({origin, destination}) => {
  const [responseAPI, setResponseAPI] = useState(null);
  const [errorAPI, setErrorAPI] = useState(null);

  const directionsServiceOptions =
    useMemo(() => {
      return {
        origin,
        destination,
        travelMode: 'DRIVING'
      };
    }, [origin, destination]);

  const directionsCallback = useCallback((response)=>{
    if (response !== null && response.status === 'OK') {
      setResponseAPI(response)
    }else{
      setErrorAPI('Erro ao traçar a rota.')
    }
  },[])

  const directionsRendererOptions = useMemo(() => {
    return {
      directions: responseAPI,
    };
  }, [responseAPI]);

  return (
    <div className="map">
      <LoadScript
        googleMapsApiKey='AIzaSyDhU6foApXRtkuTo4_aT1RBi6Ek4ItUk8c'
        libraries={[""]}
      >

        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={position}
          zoom={9}
        >
          {!responseAPI && origin && <Marker position={origin} />}
          {!responseAPI && destination && <Marker position={destination} />}

          {origin && destination && (
            <DirectionsService options={directionsServiceOptions} callback={directionsCallback}/>
          )}

          {responseAPI && directionsRendererOptions && (
            <DirectionsRenderer options={directionsRendererOptions} />
          )}

        </GoogleMap>
      </LoadScript>
      <div class="error">
        {errorAPI}
      </div>
    </div>
  );
};

export default MapPage;