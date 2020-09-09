import React, { Component } from 'react'
// import { Grid, Container  } from 'semantic-ui-react'
import ToDo from './ToDo'

export default class ToDoContainer extends Component {
    render() {
        // console.log(this.props)
        return(
            <div>
                <h3>To Dos</h3>
                {this.props.users.map(user => {
                        return <ToDo user={user}/>
                    })}
        </div>
        )
    }
}
