import {api,apiKey} from './api'

export const getLocation = async ({ setOrigin,setDestination,setClientInfo,setError}) => {
  try {
    const response = await api.get('/fd0fa2905f7711ecb5bee50453d7e27d', { headers: {
    'x-api-key': apiKey
  }})
  const originLat = response.data.message?.geoLocalizacaoMotorista?.latitude
  const originLong = response.data.message?.geoLocalizacaoMotorista?.longitude
  const origin = {lat: parseFloat(originLat), lng: parseFloat(originLong)}

  const destinationLat = response.data.message?.geoLocalizacaoCliente?.latitude
  const destinationLong = response.data.message?.geoLocalizacaoCliente?.longitude
  const destination = {lat: parseFloat(destinationLat), lng: parseFloat(destinationLong)}

  const clientInfo = response.data.message


  setOrigin(origin) 
  setDestination(destination)
  setClientInfo(clientInfo)
  }
  catch(error) {
    if(error.response.status) {
      setError(true)
    }
  }
}