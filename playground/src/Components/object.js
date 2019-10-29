import React, { Component } from 'react'

export class item extends Component {

    render() {
     
    console.log(this.state.img);
    return (
      <div className="App">
      <h1>{this.state.title}</h1>
      <p>{this.state.description}</p>
      <img src={this.state.img}></img>
      </div>
      );
    }
  }
  
  export default item