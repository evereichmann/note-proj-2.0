export default function auth(state=null, action) {
    switch(action.type) {
      case 'LOGIN_SUCCESS':
        return action.user
      case 'LOGOUT_SUCCESS':
        return null
      case 'POST_NEW_NOTE':
          return  {...state, to_dos: [...state.to_dos, action.todo ]}
      case 'DELETE_NOTE':  
        return {...state, to_dos: [...state.to_dos.filter(t => t.id !== action.id )]}    
      default:
        return state
    }
  }