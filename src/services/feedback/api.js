import axios from 'axios'

const api = axios.create({
    baseURL:'https://wr1oqch0bk.execute-api.us-east-1.amazonaws.com/dev/barramento/v1/pesquisaSatisfacao'

})

const apiKey = 'jsy17w4Vk46Fil0ZdHhxN7xxFkAfWYv03kJe330l'

export {api, apiKey}