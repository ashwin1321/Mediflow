import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/Login.css';

const Login = () => {
    return (
        <>
            <Header/>
            <div className="form-container">
                <form>
                    <h2>Sign In</h2>
                    <div className="form-group">
                        <label htmlFor="email">Email address:</label>
                        <input type="email" id="email" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" placeholder="Enter password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="remember">Remember me</label>
                        <input type="checkbox" id="remember" />

                    </div>
                    <button type="submit">Sign in</button>
                </form>
            </div>
            <Footer/>
        </>
    );
};

export default Login;
