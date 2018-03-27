import React from 'react';
import '../../account/account.css';

const CreateAccount = () => {
    const createAccount = event => (console.log('Account created!'));

    return (
        <form className="create-account-box">
            <h3>Create Account</h3>
            <p className="create-account-box__text"><span>&#10003;</span>All orders and returns in one place</p>
            <p className="create-account-box__text"><span>&#10003;</span>Your shopping cart everywhere</p>
            <p className="create-account-box__text"><span>&#10003;</span>Create and save your wishlist</p>
            <button onClick={createAccount}
                    className="button button--secondary create-account-box__button">
                <a href="#">Create Account</a>
            </button>
        </form>
    );
};

export default CreateAccount;