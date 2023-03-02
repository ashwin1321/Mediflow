import React from "react";
import { Link } from "react-router-dom";
import "../styles/Dashboard.css";

const LabDashboard = () => {
    return (
        <div className="dashboard-container">
            <nav className="navbar">
                <h1 className="navbar-brand">Lab Dashboard</h1>
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
                        <h2>Lab Dashboard</h2>
                    </li>

                    <li className="sidebar-header">
                        <h2>Manage</h2>
                    </li>
                    <li className="sidebar-item">
                        <Link to="/patients" className="sidebar-link">
                            <i className="fas fa-user-injured"></i>
                            <span>Patients</span>
                        </Link>
                    </li>
                    <li className="sidebar-item">
                        <Link to="/tests" className="sidebar-link">
                            <i className="fas fa-vial"></i>
                            <span>Tests</span>
                        </Link>
                    </li>
                    <li className="sidebar-item">
                        <Link to="/results" className="sidebar-link">
                            <i className="fas fa-file-medical"></i>
                            <span>Results</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="main-content">
                <h2>Welcome to the Lab Dashboard!</h2>
            </div>
        </div>
    );
};

export default LabDashboard;