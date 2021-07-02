import React, { Component } from 'react';
import Detail from './Detail';
import axios from 'axios';


class Employee extends Component {

    // We can store State (data)
    state = {
        // title: "Testing Props"
    }

    // Life Cycle Methods
    componentDidMount = () => {
        axios
            .get('https://randomuser.me/api?results=25')
            .then(data => {
                //console.log(data);
                console.log(data.data.results);

                // If we are getting data from the API successfully then we update our state
               //  this.setState(data.data.results);
            })
    }

    render () { 
        return (
            <div>
                <h2>Employee Component</h2>
                <Detail />
            </div>
        )
    }
}

export default Employee;