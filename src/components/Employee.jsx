import React, { Component } from 'react';
import Detail from './Detail';
import axios from 'axios';


class Employee extends Component {

    // We can store State (data)
    state = {
        employees: [],
        filtered: []
    }

    // Life Cycle Methods
    componentDidMount = () => {
        axios
            .get('https://randomuser.me/api?results=25')
            .then(data => {
                console.log(data);
                console.log(data.data.results);

                // If we are getting data from the API successfully then we update our state
                this.setState({ employees: data.data.results });
            })
    }

    sortAlphabetically = () => {
        
        const sortedEmployees = this.state.employees.sort(function(a, b) {
            var nameA = a.name.first.toUpperCase(); // ignore upper and lowercase
            var nameB = b.name.first.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1; //nameA comes first
            }
            if (nameA > nameB) {
              return 1; // nameB comes first
            }
            return 0;  // names must be equal
          });

          // Update the filtered state
          this.setState({ filtered: sortedEmployees })
    }

    render () { 
        return (
            <div>
                <h2>Employee Component</h2>
                <Detail data={this.state.employees}/>
                <button onClick={this.sortAlphabetically}>Sort Employees </button>
            </div>
        )
    }
}

export default Employee;