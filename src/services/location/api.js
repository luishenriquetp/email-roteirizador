import axios from 'axios'

const api = axios.create({
    baseURL: process.env.REACT_APP_END_POINT_LOCATION

})

export { api }