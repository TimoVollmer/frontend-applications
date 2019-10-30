import React from "react";
import {Link, Redirect} from "react-router-dom";

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

    // componentDidMount(){
    //     this.props.verwerk(this.state)
    // }

  render() {
    if(this.state.redirect===true){
        return <Redirect push to="/Object" />
    } 
    else{

    return (
      <form>
          <h1>Find your object</h1>
          <ul>
        <li><input
          name="firstName"
          placeholder="First name"
          value={this.state.firstName}
          onChange={e => this.setState({ firstName: e.target.value})}
        /></li>
       <li>
          <input
          name="lastName"
          placeholder="Last name"
          value={this.state.lastName}
          onChange={e => this.setState({ lastName: e.target.value})}
        /></li>
       {/* <li>
         <input
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={e => this.setState({ email: e.target.value})}
        /></li> */}
        <li>
            <button onClick={e => this.onSubmit(e)}>Submit</button>
        </li>
    </ul>
       </form>

    )};
  }
}


