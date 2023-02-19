import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/Register.css';

const SignUp = () => {
    const [role, setRole] = useState('patient'); // default role is patient

    const handleRoleChange = (e) => {
        setRole(e.target.value);
    };

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
                    <div className="form-group">
                        <label htmlFor="role">I am a:</label>
                        <select id="role" value={role} onChange={handleRoleChange}>
                            <option value="patient">Patient</option>
                            <option value="doctor">Doctor</option>
                        </select>
                    </div>
                    {role === 'patient' && (
                        <>
                        <div className="form-group">
                            <label htmlFor="dob">Date of Birth:</label>
                            <input type="date" id="dob" />
                        </div>
                            <div className="form-group">
                                <label htmlFor="mobile">Mobile:</label>
                                <input type="text" id="mobile" />
                            </div>
                        </>
                    )}
                    {role === 'doctor' && (
                        <>
                            <div className="form-group">
                                <label htmlFor="specialty">Specialty:</label>
                                <input type="text" id="specialty" placeholder="Enter specialty" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="license-number">License Number:</label>
                                <input type="text" id="license-number" placeholder="Enter license number" />
                            </div>
                        </>
                    )}
                    <button type="submit">Sign up</button>
                </form>
            </div>
            <Footer/>
        </>
    );
};

export default SignUp;
