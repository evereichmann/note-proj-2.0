import React, { Component } from 'react'
import { Menu, Container } from 'semantic-ui-react';
import {Link} from 'react-router-dom'

export default class NavBar extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        return (
            <div>
                <Container id="container">
            <h1>WEBSITE TITLE</h1>
            <Menu>
                <Menu.Item
                    name='Login'
                    as={Link} 
                    to='/Login'
                    active={activeItem === 'login'}
                    onClick={this.handleItemClick}
                    >
                    Login
                </Menu.Item>
                <Menu.Item
                    name='CreateAccount'
                    as={Link} 
                    to='/CreateAccount'
                    active={activeItem === 'createaccount'}
                    onClick={this.handleItemClick}
                    >
                    Create Account
                </Menu.Item>
            </Menu>
            </Container>
            </div>
        )
    }
}
