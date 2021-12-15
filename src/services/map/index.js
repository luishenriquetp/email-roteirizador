import {api, apiKey} from '../api'

export const getLocation = async({origin, destination}) => {
    const response = await api.get("",{
        params:{
            origin,
            destination,
            key:apiKey
        }
    })
    return response.data
}