import React from 'react';
import Github from './images/github-8-128.png';
import Linkedin from './images/linkedin-6-128.png';
import Blogger from './images/blogger-3-128.png';
import './App.css';
import Calender from './Calender'
import { Grid, Container  } from 'semantic-ui-react'

function App() {
  return (
    <Container>
    <Grid>
            <Grid.Row>
            <Grid.Column><h1>NOTES TITLE OF PAGE</h1></Grid.Column>
            </Grid.Row>    
            <Grid.Row>
                <Grid.Column width={8}><h4>Nav Bar</h4></Grid.Column>
                <Grid.Column floated='right' width={4}><form>
                    <input type="text" placeholder="username"></input>
                    <button type="submit">Login</button>
                </form></Grid.Column>
            </Grid.Row>    
            <Grid.Row>
            <Grid.Column width={8}><h3>Todays notes</h3></Grid.Column>
              <Grid.Column width={8}><Calender /></Grid.Column>
            </Grid.Row>    
    <Grid.Row>   
    <Grid.Column width={4}><p>copyright 2020</p></Grid.Column>
    <Grid.Column width={1} floated='right'><a href="https://github.com/evereichmann" target="_blank"><img id="link-img" src={Github} alt="github"/></a></Grid.Column>
    <Grid.Column width={1} ><a href="https://www.linkedin.com/in/eve-reichmann-a252501b2" target="_blank"><img id="link-img" src={Linkedin} alt="linkedin"/></a></Grid.Column>
    <Grid.Column width={1} ><a href="https://medium.com/@eve.reichmann" target="_blank"><img id="link-img" src={Blogger} alt="blog"/></a></Grid.Column>
    </Grid.Row> 
    </Grid>
    </Container>
  );
}

export default App;
