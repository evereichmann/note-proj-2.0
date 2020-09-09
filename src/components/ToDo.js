import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'

export default class ToDo extends Component {
    render() {
        // console.log(this.props)

        return (
            <div key={this.props.user.id}>
                <Container id="container">
                <h6>to dos somehow</h6>
                </Container>
            </div>
        )
    }
}
