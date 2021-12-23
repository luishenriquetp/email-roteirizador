import {api,apiKey} from './api'

export const getLocation = async ({ setOrigin,setDestination,setClientInfo}) => {
  const response = await api.get('/8091f9c05f7711ecb5bee50453d7e27d', { headers: {
    'x-api-key': apiKey
  }})
  const originLat = response.data.message.geoLocalizacaoMotorista.latitude
  const originLong = response.data.message.geoLocalizacaoMotorista.longitude
  const origin = `${originLat},${originLong}`

  const destinationLat = response.data.message.geoLocalizacaoCliente.latitude
  const destinationLong = response.data.message.geoLocalizacaoCliente.longitude
  const destination = `${destinationLat},${destinationLong}`

  const clientInfo = response.data.message
  
  setOrigin(origin) 
  setDestination(destination)
  setClientInfo(clientInfo)
}