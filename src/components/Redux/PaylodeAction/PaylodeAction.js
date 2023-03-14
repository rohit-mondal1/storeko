import { user } from "../Action/ActionType"

export const userpayloade = data =>{
    return{
        type: user,
        payload: data
    }
}