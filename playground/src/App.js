import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";

import Form from './Form';
import Object from './Object';
import Footer from './Components/Footer';
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



