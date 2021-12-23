import axios from 'axios'

const teste = axios.create({
    baseURL:'https://maps.googleapis.com/maps/api/directions/json'

})

const apiKey = 'AIzaSyDhU6foApXRtkuTo4_aT1RBi6Ek4ItUk8c'

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