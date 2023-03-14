import { user } from "./ActionType";

const inisatulState = {
test:"test"

}

const userAction =(state =inisatulState , action)=>{
    switch(action.type){
        case user:
        return{
            ...state , type : action.payload
        }

        default: 
        return state

    }
}
export default userAction;