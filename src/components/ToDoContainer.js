import React from 'react'
import { connect } from 'react-redux'
import ToDo from './ToDo'
import {fetchNotesSuccess} from '../action/index'


class ToDoContainer extends React.Component {
  
  componentDidMount() {
    fetch('http://localhost:3000/to_dos')
      .then(resp => resp.json())
      .then(data => {
        this.props.fetchNotesSuccess(data)

      })
  }
  
  renderToDo = () => {
    if(!this.props.auth){
      return <h4>create an account to make notes</h4>
    }else{
      {return this.props.auth.to_dos.map(todo => {
          return <ToDo key={todo.id} todo={todo}/>
      })}
    }
  }

  render () {
    return (
      <div>
        <this.renderToDo />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      auth: state.auth,
      notes: state.notes
    }
  }

  const mapDispatchToProps = {
    fetchNotesSuccess
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ToDoContainer)
