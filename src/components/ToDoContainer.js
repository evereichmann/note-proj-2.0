import React, { Component } from 'react'
// import { Grid, Container  } from 'semantic-ui-react'
import ToDo from './ToDo'

export default class ToDoContainer extends Component {
    render() {
        return(
            <div>
                <h3>To Dos</h3>
                {this.props.todos.map(todo => {
                        return <ToDo todo={todo}/>
                    })}
        </div>
        )
    }
}
