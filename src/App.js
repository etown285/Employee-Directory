import React from "react";

import Employee from './components/Employee';
import FormComponent from './components/Form/index';

import "./App.css";

function App() {
  return (
      <div className="App">
        <FormComponent />
        <Employee />
      </div>
  );
}

export default App;
