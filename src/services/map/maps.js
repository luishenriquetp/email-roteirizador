import axios from 'axios'

const api = axios.create({
    baseURL:'https://maps.googleapis.com/maps/api/directions/json'

})

const apiKey = 'AIzaSyDhU6foApXRtkuTo4_aT1RBi6Ek4ItUk8c'

export {api, apiKey}