import React, { Component } from 'react';
import Form from './Form';
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Object from './Object.js';
import Footer from './Components/Footer.js';
import './App.css';

 class App extends Component {

  verwerk = (data)=>{
      console.log(data)
  }


  render() {

    return (
      <div className="App">
        <link href="https://fonts.googleapis.com/css?family=Quicksand&display=swap" rel="stylesheet"></link>
          <Router>
                <Route exact path="/" component={()=> <Form verwerk={this.verwerk} />} />
                <Route path="/Object" component={ Object } />
          </Router>
          <Footer></Footer>
      </div>
    );
  }
}

export default App;



