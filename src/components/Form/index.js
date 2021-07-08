import React, { Component } from "react";
import "./style.css";

class Form extends Component {
    state = { 
        searchTerm: ''
    }

    handleInputChange = event => {
        console.log(event.target);
        this.setState({
            searchTerm: event.target.value
        })
    };

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
    }

    render () { 
        return (
            <div>
                <form>
                    <input
                        value={this.state.searchTerm}
                        name="search"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Enter Search"
                    />
                    <button onClick={this.handleFormSubmit}>Submit</button>
                </form>
            </div>
        )
    }
};

export default Form;