
const initialState = []

export default function users(state=initialState, action){
   switch(action.type){
       case 'FETCH_USERS_SUCCESS':
            return [...action.users]
        default:
            return state
   } 
  }