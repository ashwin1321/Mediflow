import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/Appointment.css';



const Appointment = () => {
    return (
        <>
            <Header />
        <div className="form-container">
            <form>
                <h2>Make an appointment</h2>
                <div className="form-group">
                    <label htmlFor="name">Your name:</label>
                    <input type="text" id="name" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address:</label>
                    <input type="email" id="email" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone number:</label>
                    <input type="tel" id="phone" placeholder="Enter phone number" />
                </div>
                <div className="form-group">
                    <label htmlFor="department">Department:</label>
                    <select id="department">
                        <option value="">Select a department</option>
                        <option value="cardiology">Cardiology</option>
                        <option value="orthopedics">Orthopedics</option>
                        <option value="pediatrics">Pediatrics</option>
                        <option value="dermatology">Dermatology</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="appointmentDate">Appointment date:</label>
                    <input type="date" id="appointmentDate" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
            <Footer/>
            </>
    );
};

export default Appointment;
