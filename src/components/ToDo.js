import React, { Component } from 'react'
import { Container, Button, Icon} from 'semantic-ui-react'
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
    // fetch('https://noteprojectbackend.herokuapp.com/to_dos/'+id, reqObj )
      .then(resp => resp.json())
      .then(data => {
        this.props.deleteNote(id)
      })
  }

  render () {
    // console.log(this.props.notes)
    const {title, content, urgent } = this.props.todo
    return (
      <div>
        <Container id='container-card'>         
            <h4 id="card-font">{title}</h4>
            <p id="card-font">{content}</p>
            <p id="card-font">{urgent}</p>
            { urgent ? <Icon id="card-font" name='flag' color='red' /> : <Icon id="card-font" name='flag outline' color='red' />}
            <Button floated='right' id="button" onClick={() => this.deleteNote(this.props.todo.id)}>X</Button>
            <Button floated='right' id="button" >Edit</Button>
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