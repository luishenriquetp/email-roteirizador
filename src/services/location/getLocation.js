import { api } from './api'

export const getLocation = async ({ token, setOrigin, setDestination, setClientInfo, setError, setLoading }) => {
  try {
    setLoading(true)
    const response = await api.get(`/${token}`, {
      headers: {
        'x-api-key': process.env.REACT_APP_API_KEY
      }
    })
    const originLat = response.data.message?.geoLocalizacaoMotorista?.latitude
    const originLong = response.data.message?.geoLocalizacaoMotorista?.longitude
    const origin = { lat: parseFloat(originLat), lng: parseFloat(originLong) }

    const destinationLat = response.data.message?.geoLocalizacaoCliente?.latitude
    const destinationLong = response.data.message?.geoLocalizacaoCliente?.longitude
    const destination = { lat: parseFloat(destinationLat), lng: parseFloat(destinationLong) }

    const clientInfo = response.data.message

    setOrigin(origin)
    setDestination(destination)
    setClientInfo(clientInfo)
    setLoading(false)
    setError(response.data.statusCode === 500)
    setError(response.data.statusCode === 403)
  }
  catch (error) {
    if (error) {
      setError(error.response.data)
      setLoading(false)
    }
  }
}