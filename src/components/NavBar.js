import React from 'react'
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux'
import LogoutNav from './LogoutNav'
import LoginNav from './LoginNav'

function NavBar(props) {
        return (
            <div>
                <Container id="container">
                    <h1>Notester</h1>
                    {props.auth ? <LogoutNav /> : <LoginNav />}
                </Container>
            </div>
        )
}


const mapStateToProps = (state) => {
    return {
      auth: state.auth
    }
}
  
export default connect(mapStateToProps, null)(NavBar)