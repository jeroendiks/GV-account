import React from 'react';
import '../../account/account.css';

const CreateAccount = () => {
    const createAccount = event => (console.log('Account created!'));

    return (

            <form className="my-account__create-box">
                <h3>Create Account</h3>
                <p><span>&#10003;</span>All orders and returns in one place</p>
                <p><span>&#10003;</span>Your shopping cart everywhere</p>
                <p><span>&#10003;</span>Create and save your wishlist</p>
                {/*<a href="#" type="button" className="button button--secondary my-account__button" value="Create Account"*/}
                   {/*onClick={createAccount}>Create Account</a>*/}
                <input type="button" className="button button--secondary my-account__button" value="Create Account"
                       onClick={createAccount}/>
            </form>

    );
};

export default CreateAccount;
