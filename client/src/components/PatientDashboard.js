import React from "react";
import { Link } from "react-router-dom";
import "../styles/Dashboard.css";

const PatientDashboard = () => {
    return (
        <div className="dashboard-container">
            <nav className="navbar">
                <h1 className="navbar-brand">Patient Dashboard</h1>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            Logout
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="sidebar">
                <ul className="sidebar-nav">
                    <li className="sidebar-header">
                        <h2>Patient Dashboard</h2>
                    </li>

                    <li className="sidebar-header">
                        <h2>Appointments</h2>
                    </li>
                    <li className="sidebar-item">
                        <Link to="/appointments" className="sidebar-link">
                            <i className="fas fa-calendar-alt"></i>
                            <span>View Appointments</span>
                        </Link>
                    </li>
                    <li className="sidebar-item">
                        <Link to="/book-appointment" className="sidebar-link">
                            <i className="fas fa-plus-circle"></i>
                            <span>Book Appointment</span>
                        </Link>
                    </li>
                    <li className="sidebar-header">
                        <h2>Medical Records</h2>
                    </li>
                    <li className="sidebar-item">
                        <Link to="/medical-records" className="sidebar-link">
                            <i className="fas fa-notes-medical"></i>
                            <span>View Medical Records</span>
                        </Link>
                    </li>
                    <li className="sidebar-item">
                        <Link to="/upload-medical-record" className="sidebar-link">
                            <i className="fas fa-file-upload"></i>
                            <span>Upload Medical Record</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="main-content">
                <h2>Welcome to the Patient Dashboard!</h2>
            </div>
        </div>
    );
};

export default PatientDashboard;