import axios from 'axios'

const apiKey = 'QEpJvY2QOX1RyNopZFeX3JEM0DZR7c38bzGogcX7'

const api = axios.create({
    baseURL:'https://01zuzj6nea.execute-api.us-east-1.amazonaws.com/hml/mensagem'

})



export {api, apiKey}