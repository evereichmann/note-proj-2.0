import React, { Component } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import { Container  } from 'semantic-ui-react';


export default class Calander extends Component {
    state = {
        date: new Date(),
      }
     
    onChange = date => this.setState({ date })

    render() {
        const { value } = this.state;
        return (
            <div>
            <Container id="container">
            <Calendar
            id="calender"
            onChange={this.onChange}
            value={ value }
            />
            </Container>
            </div>
        )
    }
}
