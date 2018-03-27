import React, { Component } from 'react';
import './account/account.css';
import LoginAccount from './account/login-account/login-account';
import CreateAccount from './account/create-account/create-account';

class MyAccount extends Component {
  render() {
    return (
      <div className="my-account">
        <LoginAccount />
        <CreateAccount />
      </div>
    );
  }
}

export default MyAccount;