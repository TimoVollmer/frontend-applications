import React, { Component } from 'react';
import Form from './Form';
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Object from './Object.js';
import './App.css';
import Logo from './logo.svg';

 class App extends Component {

   
  verwerk = (data)=>{
      console.log(data)
  }

  render() {

    return (
      <div className="App">

      <Router>
            <Route exact path="/" component={()=> <Form verwerk={this.verwerk} />} />
            <Route path="/Object" component={ Object } />
      </Router>
      
      </div>
    );
  }
}

export default App;



