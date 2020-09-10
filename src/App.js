import React, { Component } from 'react'
import './App.css'
import { Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import MainContainer from './components/MainContainer'
import NavBar from './components/NavBar'
import CreateAccount from './components/CreateAccount'
import NoMatch from './components/NoMatch'
import NewNote from './components/NewNote'

export default class App extends Component {
  render () {
    return (
      <div className='App'>
        <NavBar />
        <Switch>
          <Route path='/newtodo' component={NewNote}/>
          <Route path='/login' component={Login} />
          <Route path='/CreateAccount' component={CreateAccount} />
          <Route path='/home' component={MainContainer} />
          <Route path='*' component={NoMatch} />
        </Switch>
      </div>
    )
  }
}
