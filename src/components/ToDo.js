import React, { Component } from 'react'
import { Container, Button} from 'semantic-ui-react'
import { deleteNote } from '../action/index'
import { connect } from 'react-redux'

class ToDo extends Component {
  deleteNote = (id) => {
    const reqObj = {
      method: 'DELETE', 
      headers: {
        'Content-Type' : 'application/json'}
    }
    fetch('http://localhost:3000/to_dos/'+id, reqObj )
      .then(resp => resp.json())
      .then(data => {
        this.props.deleteNote(id)
      })
  }
  
  renderToDo = () => {
    return this.props.notes.map(note => {
      return (<h4>{note.title}</h4>)
    })
  }


  render () {
    console.log(this.props.notes)
    // const {title, content, urgent } = this.props.notes
    return (
      <div>
        <Container id='container-card'>         
            {/* <h4 id="card-font">{this.props.notes.title}</h4>
            <p id="card-font">{content}</p>
            <p id="card-font">{urgent}</p> */}
            {/* <Button id="button" onClick={() => this.deleteNote(this.props.todo.id)}>X</Button> */}
          { this.renderToDo() }
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes
  }
}


const mapDispatchToProps = {
  deleteNote
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDo)