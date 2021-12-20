/* import axios from 'axios'

const api = axios.create({
    baseURL:'https://maps.googleapis.com/maps/api/directions/json'

})

const apiKey = 'AIzaSyDhU6foApXRtkuTo4_aT1RBi6Ek4ItUk8c'

export const traceRoute = async({origin, setOrigin, destination, setDestination}) => {
        const response = await api.get('', {
          params: {
            origin,
            destination,
            key: apiKey
          }
        })
        setOrigin(response.data.routes[0].legs[0].start_location)
        setDestination(response.data.routes[0].legs[0].end_location)
      } */