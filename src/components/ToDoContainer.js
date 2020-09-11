import React from 'react'
import { connect } from 'react-redux'
import ToDo from './ToDo'
import {fetchNotesSuccess} from '../action/index'


class ToDoContainer extends React.Component {
  state = {
    notes: []
  }

  componentDidMount() {
    if(!this.props.auth){
      return 
    }else{

      fetch('http://localhost:3000/users/'+this.props.auth.id)
        .then(resp => resp.json())
        .then(data => {
          this.props.fetchNotesSuccess(data.to_dos)
        })
    }
  }


  render () {
    return (
      <div>
        {this.props.auth? <ToDo /> : <h4>create an account to make notes</h4>}
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
