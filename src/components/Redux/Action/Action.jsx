import { GetUser, user } from "./ActionType";

const inisatulState = {


}

const userAction =(state =inisatulState , action)=>{
    switch(action.type){
        case user:
        return{
            ...state,
             user : action.payload
        }
        case GetUser:
        return{
            ...state,
            currentUser : action.payload
        }

        default: 
        return state

    }
}
export default userAction;