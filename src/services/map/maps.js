import axios from 'axios'

const api = axios.create({
    baseURL:'https://maps.googleapis.com/maps/api/directions/json'

})

const apiKey = process.env.REACT_APP_GMAPS_API_KEY

export {api, apiKey}