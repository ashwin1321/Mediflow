import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/Appointment.css';

const Appointment = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [department, setDepartment] = useState('');
    const [appointmentDate, setAppointmentDate] = useState('');
    const [reason, setReason] = useState('');
    const [doctor, setDoctor] = useState('');
    const [appointmentTime, setAppointmentTime] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('esewa');
    const [paymentStatus, setPaymentStatus] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

    };

    return (
        <>
            <Header />
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <h2>Make an appointment</h2>
                    <div className="form-group">
                        <label htmlFor="name">Your name:</label>
                        <input type="text" id="name" placeholder="Enter your name" value={name} onChange={(event) => setName(event.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address:</label>
                        <input type="email" id="email" placeholder="Enter email" value={email} onChange={(event) => setEmail(event.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone number:</label>
                        <input type="tel" id="phone" placeholder="Enter phone number" value={phone} onChange={(event) => setPhone(event.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="department">Department:</label>
                        <select id="department" value={department} onChange={(event) => setDepartment(event.target.value)}>
                            <option value="">Select a department</option>
                            <option value="cardiology">Cardiology</option>
                            <option value="orthopedics">Orthopedics</option>
                            <option value="pediatrics">Pediatrics</option>
                            <option value="dermatology">Dermatology</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="appointmentDate">Appointment date:</label>
                        <input type="date" id="appointmentDate" value={appointmentDate} onChange={(event) => setAppointmentDate(event.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="reason">Reason for appointment:</label>
                        <input type="text" id="reason" placeholder="Enter reason for appointment" value={reason} onChange={(event) => setReason(event.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="doctor">Doctor:</label>
                        <select id="doctor" value={doctor} onChange={(event) => setDoctor(event.target.value)}>
                            <option value="">Select a doctor</option>
                            {department === 'cardiology' && (
                                <>
                                    <option value="dr-john">Dr. John</option>
                                    <option value="dr-mary">Dr. Mary</option>
                                    <option value="dr-david">Dr. David</option>
                                </>
                            )}
                            {department === 'orthopedics' && (
                                <>
                                    <option value="dr-tom">Dr. Tom</option>
                                    <option value="dr-lisa">Dr. Lisa</option>
                                    <option value="dr-susan">Dr. Susan</option>
                                </>
                            )}
                            {department === 'pediatrics' && (
                                <>
                                    <option value="dr-sarah">Dr. Sarah</option>
                                    <option value="dr-jessica">Dr. Jessica</option>
                                    <option value="dr-amy">Dr. Amy</option>
                                </>
                            )}
                            {department === 'dermatology' && (
                                <>
                                    <option value="dr-michael">Dr. Michael</option>
                                    <option value="dr-karen">Dr. Karen</option>
                                    <option value="dr-laura">Dr. Laura</option>
                                </>
                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="appointmentTime">Appointment time:</label>
                        <select id="appointmentTime" value={appointmentTime} onChange={(event) => setAppointmentTime(event.target.value)}>
                            <option value="">Select an appointment time</option>
                            <option value="9:00 AM">9:00 AM</option>
                            <option value="10:00 AM">10:00 AM</option>
                            <option value="11:00 AM">11:00 AM</option>
                            <option value="12:00 PM">12:00 PM</option>
                            <option value="1:00 PM">1:00 PM</option>
                            <option value="2:00 PM">2:00 PM</option>
                            <option value="3:00 PM">3:00 PM</option>
                            <option value="4:00 PM">4:00 PM</option>
                            <option value="5:00 PM">5:00 PM</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="paymentMethod">Payment method:</label>
                        <select id="paymentMethod" value={paymentMethod} onChange={(event) => setPaymentMethod(event.target.value)}>
                            <option value="esewa">eSewa</option>
                            <option value="creditCard">Credit Card</option>
                            <option value="debitCard">Debit Card</option>
                        </select>
                    </div>
                    {paymentMethod === 'esewa' && (
                        <div className="form-group">
                            <label htmlFor="esewaTransactionId">eSewa transaction ID:</label>
                            <input type="text" id="esewaTransactionId" placeholder="Enter eSewa transaction ID" />
                        </div>
                    )}
                    <button type="submit">Submit</button>
                </form>
            </div>
            <Footer />
        </>
    );
};
export default Appointment;

