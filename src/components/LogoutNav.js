import React from 'react'
import { Menu } from 'semantic-ui-react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { logoutSuccess } from '../action/auth'

class LogoutNav extends React.Component {

render(){
    return(
        <Menu>
            <Menu.Item
                    name='login'
                    as={Link} 
                    to='/login'
                    onClick={this.props.logoutSuccess}
                    >
                    Logout
                </Menu.Item>
                <Menu.Item
                    name='home'
                    as={Link} 
                    to='/home'
                    >
                    Home
                </Menu.Item>
                <Menu.Item
                    name='newtodo'
                    as={Link} 
                    to='/newtodo'
                    >
                    New Note
                </Menu.Item>
        </Menu>
    )
}
}

const mapStateToProps = (state) => {
    return {
      auth: state.auth
    }
  }
  
  const mapDispatchToProps = {
    logoutSuccess
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(LogoutNav)