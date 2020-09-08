import React, { Component} from 'react';
import './App.css';
import ToDoContainer from './components/ToDoContainer'
import { Switch, Route } from 'react-router-dom'
import Login from './components/Login';
import MainContainer from './components/MainContainer';
import NavBar from './components/NavBar';
import CreateAccount from './components/CreateAccount'
import NoMatch from './components/NoMatch'

export default class App extends Component {

  render() {
    return (
    <div className="App">
    <NavBar /> 
    <Switch>
      <Route path='/ToDo' component={ToDoContainer} />
      <Route path='/Login' component={Login} />
      <Route path='/CreateAccount' component={CreateAccount} />
      <Route exact path='/' component={MainContainer} />
      <Route path='*' component={NoMatch} />
    </Switch>
  </div>
    )
  }
}
