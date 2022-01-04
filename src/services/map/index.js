import {api} from './api'

export const getLocation = async({origin, destination}) => {
    const response = await api.get("",{
        params:{
            origin,
            destination,
        }
    })
    return response.data
}