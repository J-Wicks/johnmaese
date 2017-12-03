import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
  constructor () {
    super()
    this.state = {
      email: '',
      password: '',
    }
    this.handleType = this.handleType.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleType(event) {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit() {
    axios.post('/login', {
      password: this.state.password,
    })
      .then((foundUser) => {
        console.log(foundUser);
      });
  };


  render() {
    return (
      <div>
        <input
          type="text"
          name="email"
          onChange={this.handleType}
          value={this.state.email}
          key="email"
        /><br />
        <input
          type="text"
          name="password"
          onChange={this.handleType}
          value={this.state.password}
          key="password"
        />
        <button onClick={this.handleSubmit}> Continue </button>
      </div>
    )
  } 
}

