import React from 'react';
import Github from '../images/github-8-128.png';
import Linkedin from '../images/linkedin-6-128.png';
import Blogger from '../images/blogger-3-128.png';
import { Grid, Container  } from 'semantic-ui-react'
import Calender from './Calender'
import ToDoContainer from './ToDoContainer'
import { connect }  from 'react-redux'
import { fetchUsersSuccess } from '../action/index'


class MainContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      users: []
    }
  }  

  componentDidMount() {
    fetch('http://localhost:3000/users')
      .then(resp => resp.json())
      .then(usersData => {
        this.props.fetchUsersSuccess(usersData)
        // this.setState({ users: usersData });
      })
  }

    render() {
        return (
            // <div>
                <Container id="container">
                    <Grid>     
                        <Grid.Row>
                        <Grid.Column width={8}><ToDoContainer users={ this.props.users }/></Grid.Column>
                        <Grid.Column width={8}><Calender /></Grid.Column>
                        </Grid.Row>    
                <Grid.Row>   
             <Grid.Column width={4}><p>copyright 2020</p></Grid.Column>
             <Grid.Column width={1} floated='right'><a href="https://github.com/evereichmann" ><img id="link-img" src={Github} alt="github"/></a></Grid.Column>
             <Grid.Column width={1} ><a href="https://www.linkedin.com/in/eve-reichmann-a252501b2" ><img id="link-img" src={Linkedin} alt="linkedin"/></a></Grid.Column>
             <Grid.Column width={1} ><a href="https://medium.com/@eve.reichmann" ><img id="link-img" src={Blogger} alt="blog"/></a></Grid.Column>
             </Grid.Row> 
             </Grid>
             </Container>
            // </div>
        )
    }
}

const mapStateToProps = (storeState) => {
  return{
    users: storeState.users
  }
}

const mapDispatchToProps = {
  fetchUsersSuccess
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)