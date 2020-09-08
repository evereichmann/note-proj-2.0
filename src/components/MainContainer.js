import React, { Component } from 'react';
// import Github from './images/src/github-8-128.png';
// import Linkedin from './images/src/linkedin-6-128.png';
// import Blogger from './images/src/blogger-3-128.png';
import { Grid, Container  } from 'semantic-ui-react'
import Calender from './Calender'
import ToDoContainer from './ToDoContainer'

export default class MainContainer extends Component {
    state = {
    users: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/users')
      .then(resp => resp.json())
      .then(usersData => {
        this.setState({ users: usersData });
      })
  }

    render() {
      console.log(this.state)
        return (
            // <div>
                <Container id="container">
                    <Grid>     
                        <Grid.Row>
                        <Grid.Column width={8}><ToDoContainer todos={ this.state.users }/></Grid.Column>
                        <Grid.Column width={8}><Calender /></Grid.Column>
                        </Grid.Row>    
                <Grid.Row>   
             <Grid.Column width={4}><p>copyright 2020</p></Grid.Column>
             {/* <Grid.Column width={1} floated='right'><a href="https://github.com/evereichmann" target="_blank"><img id="link-img" src={Github} alt="github"/></a></Grid.Column> */}
             {/* <Grid.Column width={1} ><a href="https://www.linkedin.com/in/eve-reichmann-a252501b2" target="_blank"><img id="link-img" src={Linkedin} alt="linkedin"/></a></Grid.Column> */}
             {/* <Grid.Column width={1} ><a href="https://medium.com/@eve.reichmann" target="_blank"><img id="link-img" src={Blogger} alt="blog"/></a></Grid.Column> */}
             </Grid.Row> 
             </Grid>
             </Container>
            // </div>
        )
    }
}
