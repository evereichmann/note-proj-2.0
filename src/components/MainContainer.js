import React from 'react'
import Github from '../images/github-8-128.png'
import Linkedin from '../images/linkedin-6-128.png'
import Blogger from '../images/blogger-3-128.png'
import { Grid, Container } from 'semantic-ui-react'
import Calender from './Calender'
import Clock from 'react-digital-clock';
import ToDoContainer from './ToDoContainer'
import { connect } from 'react-redux'
import { fetchUsersSuccess } from '../action/index'

class MainContainer extends React.Component {

  render () {
    return (
    // <div>
      <Container id='container'>
        <Grid>
          <Grid.Row>
          </Grid.Row>
          <Grid.Row >
            <Grid.Column width={10}><h3>Notes</h3></Grid.Column>
            <Grid.Column width={6} color={'red'} floated='left' ><Clock hour12={false}/></Grid.Column>  
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={9}><ToDoContainer/></Grid.Column>
            <Grid.Column width={1}></Grid.Column>
            <Grid.Column width={6}><Calender /></Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={5}><p>copyright 2020</p></Grid.Column>
            <Grid.Column width={7}></Grid.Column>
            <Grid.Column width={1}><a href='https://github.com/evereichmann'><img id='link-img' src={Github} alt='github' /></a></Grid.Column>
            <Grid.Column width={1}><a href='https://www.linkedin.com/in/eve-reichmann-a252501b2'><img id='link-img' src={Linkedin} alt='linkedin' /></a></Grid.Column>
            <Grid.Column width={1}><a href='https://medium.com/@eve.reichmann'><img id='link-img' src={Blogger} alt='blog' /></a></Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    // </div>
    )
  }
}

const mapStateToProps = (storeState) => {
  return {
    users: storeState.users
  }
}

const mapDispatchToProps = {
  fetchUsersSuccess
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)
