import axios from 'axios'

const teste = axios.create({
    baseURL:'https://maps.googleapis.com/maps/api/directions/json'

})

const apiKey = process.env.REACT_APP_GMAPS_API_KEY

export const traceRoute = async({clientDestination, driverDestination, setOrigin, setDestination}) => {

        const response = await teste.get('', {
          
          params: {
            origin: clientDestination,
            destination: driverDestination,
            key: apiKey
          }
        })
        
        setOrigin(response?.data?.routes[0]?.legs[0].start_location)
        setDestination(response?.data?.routes[0]?.legs[0].end_location)      
      }