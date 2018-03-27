import React, { Component } from 'react';
import '../../account/account.css';

class LoginAccount extends Component {
    constructor(props) {
        super(props);
        this.checkEmailInput = this.checkEmailInput.bind(this);
        this.checkPasswordInput = this.checkPasswordInput.bind(this);
        this.logIn = this.logIn.bind(this);
        this.state = {
            email: '',
            password: '',
            error: ''
        };
    }

    checkEmailInput(event) {
        this.setState({ email: event.target.value });
    }

    checkPasswordInput(event) {
        this.setState({ password: event.target.value });
    }

    logIn(event) {
        const email = this.state.email;
        const password = this.state.password;

        if (email === '') {
            this.setState({ error: 'Please fill in your email address' });
            event.preventDefault();
        } else if (email !== 'hoi@hoi.com') { // TODO: BACKEND CHECK FOR EMAIL!
            this.setState({ error: 'Your email address is incorrect. Please try again.' });
            event.preventDefault();
        } else if (password === '') {
            this.setState({ error: 'Please fill in your password' });
            event.preventDefault();
        } else if (password !== 'hoi') { // TODO: BACKEND CHECK FOR PASSWORD!
            this.setState({ error: 'Your password is incorrect. Please try again.' });
            event.preventDefault();
        } else {
            this.setState({ error: '' });
            alert('Je bent nu ingelogd!');
        }
    }

    render() {
        return (
            <form onSubmit={this.logIn} className="login-box">
                <h3>Login</h3>
                <input type="email"
                       value={this.state.email}
                       placeholder="E-mailaddress"
                       className="login-box__input-bar"
                       onChange={this.checkEmailInput}/>
                <input type="password"
                       value={this.state.password}
                       placeholder="Password"
                       className="login-box__input-bar"
                       onChange={this.checkPasswordInput}/>
                <span className="error">{this.state.error}</span>
                <button type="submit" className="button button--primary login-box__button">Login</button>
                <a href="#" className="login-box__password-link">Forgot password?</a>
            </form>
        );
    }
}

export default LoginAccount;