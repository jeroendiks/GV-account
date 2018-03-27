import React, { Component } from 'react';
import './App.css';
import LoginAccount from './account/login-account/login-account';
import CreateAccount from './account/create-account/create-account';

class MyAccount extends Component {
  render() {
    return (
      <div className="App">
        <LoginAccount />
        <CreateAccount />
      </div>
    );
  }
}

export default MyAccount;