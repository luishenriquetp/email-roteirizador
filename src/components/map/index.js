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
import { api, apiKey } from "../../services/api";

const MapPage = () => {
  const [map, setMap] = useState();
  const [pointA, setPointA] = useState();
  const [pointB, setPointB] = useState();
  const [searchBoxA, setSearchBoxA] = useState();
  const [searchBoxB, setSearchBoxB] = useState();

  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);

  const [response, setResponse] =useState(null);

  const [value, setValue] = useState();

  const position = {
    lat: -23.5217272,
    lng: -46.1860048,
  };

  const onMapLoad = (map) => {
    setMap(map);
  };

  const traceRoute = () => {
    if (pointA && pointB) {
      setOrigin(pointA)
      setDestination(pointB)
  }
}

useEffect(() => {
  const getLocation = async() => {
    const response = await api.get('', {
      params: {
        origin:'Brasilia',
        destination: 'Sao paulo',
        key: apiKey
      }
    })
    setOrigin(response.data.routes[0].legs[0].start_location)
    setDestination(response.data.routes[0].legs[0].end_location)
  }
  getLocation()
  
},[])

  const handleClick = async() => {
    const response = await api.get('',{
      params:{
        origin:'Mogi das Cruzes',
        destination:'São Paulo',
        key:apiKey
      }
    })
    setPointA(response.data.routes[0].legs[0].start_location)
    setOrigin(null)
    setDestination(null)
    setResponse(null)
    map?.panTo(response.data.routes[0].legs[0].start_location)
    setPointB(response.data.routes[0].legs[0].end_location)
    setOrigin(null)
    setDestination(null)
    setResponse(null)
    map?.panTo(response.data.routes[0].legs[0].end_location)
  }

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
    <>
    <button onClick={traceRoute}>Enviar</button>
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

          {!response && pointA && <Marker position={pointA} />}
          {!response && pointB && <Marker position={pointB} />}


          {origin && destination && (
            <DirectionsService callback={directionsCallback}options={directionsServiceOptions}/>
          )}

          {response && directionsRendererOptions && (
            <DirectionsRenderer options={directionsRendererOptions} />
          )}

          

        </GoogleMap>
      </LoadScript>
    </div>
    </>
  );
};

export default MapPage;