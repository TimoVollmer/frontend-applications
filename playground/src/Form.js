import React from "react";
import {Link, Redirect} from "react-router-dom";
import './Form.css';

export default class Form extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    redirect:false
  };

  onSubmit = (e) => {
    this.setState({redirect:true})
    this.props.verwerk(this.state);
  }

  render() {
    if(this.state.redirect===true){
        return <Redirect push to="/Object" />
    } 
    else{

    return (
      <div className="Form">
        <img src={require('./Components/Images/07.jpg')} className="background"/>
        <form>
          <h1>Find the object that matches you, claim it and share it!</h1>
                <ul>
                  <li>
                    <input
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


