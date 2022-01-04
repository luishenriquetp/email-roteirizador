import {api, apiKey} from './maps'

export const getLocation = async({token, setOrigin, setDestination}) => {
        const response = await api.get(`/${token}`, {
          params: {
            key: apiKey
          }
        })
        setOrigin(response.data.routes[0].legs[0].start_location)
        setDestination(response.data.routes[0].legs[0].end_location)
      }