import React from 'react';
import '../../account/account.css';

const CreateAccount = () => {
    const createAccount = event => (console.log('Account created!'));

    return (
        <form className="create-account-box">
            <h3>Create Account</h3>
            <p><span>&#10003;</span>All orders and returns in one place</p>
            <p><span>&#10003;</span>Your shopping cart everywhere</p>
            <p><span>&#10003;</span>Create and save your wishlist</p>
            <a href="#" className="button button--secondary create-account-box__button"
               onClick={createAccount}>Create Account</a>
        </form>
    );
};

export default CreateAccount;