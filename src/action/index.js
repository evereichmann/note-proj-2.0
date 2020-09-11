
export const fetchUsersSuccess = (users) => {
  return {
    type: 'FETCH_USERS_SUCCESS',
    users: users
  }
}

export const postNewNote = (todo) => {
  return{
    type: 'POST_NEW_NOTE',
    todo: todo
  }
}

export const deleteNote = (id) => {
  return {
    type: 'DELETE_NOTE',
    id: id
  }
}