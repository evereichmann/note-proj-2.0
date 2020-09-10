import React, { Component } from 'react'
import { Container} from 'semantic-ui-react'

class ToDo extends Component {
  
  render () {
    // console.log(this.props.todo)
    const {title, content, urgent } = this.props.todo
    return (
      <div>
        <Container id='container'>
            <h4>{title}</h4>
            <p>{content}</p>
            <p>{urgent}</p>
        </Container>
      </div>
    )
  }
}

export default ToDo