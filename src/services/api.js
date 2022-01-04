import axios from 'axios'

const api = axios.create({
    baseURL:'https://01zuzj6nea.execute-api.us-east-1.amazonaws.com/hml/mensagem'

})

const apiKey = 'QEpJvY2QOX1RyNopZFeX3JEM0DZR7c38bzGogcX7'

export {api, apiKey}