import React, { Component } from 'react';
import '../../account/account.css';

class LoginAccount extends Component {
    constructor(props) {
        super(props);
        this.checkInput = this.checkInput.bind(this);
        this.logIn = this.logIn.bind(this);
        this.state = {
            email: '',
            password: '',
            error: ''
        };
    }

    checkInput(event) {
        this.setState({ error: '' });
        if (event.target.type === 'email') {
            this.setState({ email: event.target.value });
        }
        if (event.target.type === 'password') {
            this.setState({ password: event.target.value });
        }
    }

    logIn(event) {
        const email = this.state.email;
        const password = this.state.password;

        //  || email.includes('@') === false

        if (email === '') {
            this.setState({ error: 'Please fill in your email address' });
            event.preventDefault();
        } else if (password === '') {
            this.setState({ error: 'Please fill in your password' });
            event.preventDefault();
        } else if (email !== 'hoi@hoi.com') { // TODO: BACKEND CHECK FOR EMAIL!
            this.setState({ error: 'Your email address is incorrect. Please try again.' });
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
            <form onChange={this.checkInput} onSubmit={this.logIn} className="my-account__login-box">
                <h3>Login</h3>
                <input type="email" value={this.state.email} placeholder="E-mailaddress" className="my-account__input-bar"/>
                <input type="password" value={this.state.password} placeholder="Password" className="my-account__input-bar"/>
                <span className="error">{this.state.error}</span>
                <input type="submit" value="Login" className="button button--primary my-account__button"/>
                <a href="" className="my-account__password-link">Forgot password?</a>
            </form>
        );
    }
}


export default LoginAccount;