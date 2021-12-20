import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  GoogleMap,
  Marker,
  LoadScript,
  DirectionsService,
  DirectionsRenderer
} from "@react-google-maps/api";
import { REACT_APP_GOOGLE_API_KEY } from "../../app/App";
import "./map.css";
import { getLocation } from "../../services/map/getLocation";
import {position} from './constants'
import { traceRoute } from "../../services/map/traceRoute";

const MapPage = () => {
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [response, setResponse] =useState(null);



useEffect(() => {
  
  getLocation({setOrigin, setDestination})
},[])

/* useEffect(() => {
  
  traceRoute({origin, destination})
},[origin, destination]) */

  const directionsRendererOptions = useMemo(() => {
    return {
      directions: response,
    };
  }, [response]);

  const directionsServiceOptions =
    useMemo(() => {
      return {
        origin,
        destination,
        travelMode: "DRIVING",
      };
    }, [origin, destination]);

  const directionsCallback = useCallback((res)=>{
    if (res !== null && res.status === 'OK') {
      setResponse(res)
    }else{
      console.log(res)
    }
  },[])

  return (
    <div className="map">

      <LoadScript
        googleMapsApiKey={REACT_APP_GOOGLE_API_KEY}
        libraries={["places"]}
      >

        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={position}
          zoom={9}
        >

          {!response && origin && <Marker position={origin} />}
          {!response && destination && <Marker position={destination} />}

          {origin && destination && (
            <DirectionsService callback={directionsCallback}options={directionsServiceOptions}/>
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