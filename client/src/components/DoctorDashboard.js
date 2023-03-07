import React from "react";
import { Link } from "react-router-dom";
import "../styles/Dashboard.css";

const DoctorDashboard = () => {
    return (
        <div className="dashboard-container">
            <nav className="navbar">
                <h1 className="navbar-brand">Doctor Dashboard</h1>
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
                        <h2>Dr. Dashboard</h2>
                    </li>

                    <li className="sidebar-header">
                        <h2>Patients</h2>
                    </li>
                    <li className="sidebar-item">
                        <Link to="/patients" className="sidebar-link">
                            <i className="fas fa-user-injured"></i>
                            <span>View Patients</span>
                        </Link>
                    </li>
                    <li className="sidebar-item">
                        <Link to="/add-patient" className="sidebar-link">
                            <i className="fas fa-user-plus"></i>
                            <span>Add Patient</span>
                        </Link>
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
                        <Link to="/add-appointment" className="sidebar-link">
                            <i className="fas fa-plus-circle"></i>
                            <span>Add Appointment</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="main-content">
                <h2>Welcome to the Doctor Dashboard!</h2>
            </div>
        </div>
    );
};

export default DoctorDashboard;