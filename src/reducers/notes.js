
export default function notes(state=null, action) {
    switch(action.type) {
    case 'POST_NEW_NOTE':
        const todo = [...state, notes]
        return  todo
    case 'FETCH_NOTES_SUCCESS':
        return [...action.notes]
    case 'DELETE_NOTE':  
      const deleteNote = state.filter(t => t.id !== action.id)
      return deleteNote    
    default:
      return state
    }
  }


      