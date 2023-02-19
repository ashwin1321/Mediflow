import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/Register.css';

const SignUp = () => {
    return (
        <>
            <Header />
            <div className="form-container">
            <form>
                <h2>Sign Up</h2>
                <div className="form-group">
                    <label htmlFor="email">Email address:</label>
                    <input type="email" id="email" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" placeholder="Enter password" />
                </div>
                <div className="form-group">
                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input type="password" id="confirm-password" placeholder="Confirm password" />
                </div>
                <button type="submit">Sign up</button>
            </form>
        </div>
            <Footer/>
            </>
    );
};

export default SignUp;
