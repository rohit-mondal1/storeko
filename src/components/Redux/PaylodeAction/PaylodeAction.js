import { GetUser, user } from "../Action/ActionType"

export const userPayload = data =>{
    return{
        type: user,
        payload: data
    }
}
export const GetUserPayload = data =>{
    return{
        type: GetUser,
        payload: data
    }
}