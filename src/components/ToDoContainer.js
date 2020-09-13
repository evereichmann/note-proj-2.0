import React from 'react'
import { connect } from 'react-redux'
import ToDo from './ToDo'


class ToDoContainer extends React.Component {

  
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
      auth: state.auth
    }
  }
  
  export default connect(mapStateToProps, null)(ToDoContainer)