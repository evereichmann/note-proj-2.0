import React, { Component } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'

export default class Calander extends Component {
    state = {
        date: new Date(),
      }
     
    onChange = date => this.setState({ date })

    render() {
        const { value } = this.state;
        return (
            <div>
            <Calendar
            onChange={this.onChange}
            value={ value }
            />
            </div>
        )
    }
}
