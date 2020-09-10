
export const fetchUsersSuccess = (users) => {
  return {
    type: 'FETCH_USERS_SUCCESS',
    users: users
  }
}

export const fetchNotesSuccess = (notes) => {
  return{
    type: 'FETCH_NOTES_SUCCESS',
    notes: notes
  }
}
export const postNewNote = (notes) => {
  return{
    type: 'POST_NEW_NOTE',
    notes: notes
  }
}

export const deleteNote = (id) => {
  return {
    type: 'DELETE_NOTE',
    id: id
  }
}