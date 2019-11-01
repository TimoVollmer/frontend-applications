import React from "react";
import {Redirect} from "react-router-dom";
import './Components/Form.css';

export default class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    redirect:false
  };

  // Veranderd de state van redirect van in eerste instantie false naar true; waardoor de Route werkt
  onSubmit = (e) => {
    this.setState({redirect:true})
    this.props.verwerk(this.state); // Plaatst de waarde van this.state in verwerk; een functie in App.jss te vinden
  }

  render() {
    document.body.style.backgroundColor = "white";
    if(this.state.redirect===true){
        return <Redirect push to="/Object" />
    } 
    else{

    return (
      <div className="Form">
        <img src={require('./Components/Images/07.jpg')} className="background"/>
        <form>
          <h2 id="title">Find the object that matches you, claim it and share it!</h2>
                <ul>
                  <li>
                    <input
                    type="text"
                    min="2" 
                    max="50"
                    name="firstName"
                    placeholder="First name"
                    value={this.state.firstName}
                    onChange={e => this.setState({ firstName: e.target.value})}/>
                  </li>
                  <li>
                    <input
                    name="lastName"
                    placeholder="Last name"
                    value={this.state.lastName}
                    onChange={e => this.setState({ lastName: e.target.value})}/>
                  </li>
                  <li>
                    <button onClick={e => this.onSubmit(e)}>Find my object</button>
                  </li>
                </ul>
        </form>
      </div>
    )};
  }
}


