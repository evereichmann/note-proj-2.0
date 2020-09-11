import React from 'react'
import { Menu } from 'semantic-ui-react';
import {Link} from 'react-router-dom'

class LoginNav extends React.Component {

render(){

    return(
        <Menu>
            <Menu.Item
                    name='login'
                    as={Link} 
                    to='/login'
                    >
                    Login
                </Menu.Item>
                <Menu.Item
                    name='CreateAccount'
                    as={Link} 
                    to='/CreateAccount'
                    >
                    Create Account
                </Menu.Item>
                <Menu.Item
                    name='home'
                    as={Link} 
                    to='/home'
                    >
                    Home
                </Menu.Item>
        </Menu>
    )
}
}
 
export default LoginNav