import React from "react";
import { Link } from "react-router-dom";
import "../styles/Dashboard.css";

const AdminDashboard = () => {
    return (
        <div className="dashboard-container">
            <nav className="navbar">
                <h1 className="navbar-brand">Hospital Dashboard</h1>
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
                        <h2>Admin Dashboard</h2>
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
                        <Link to="/appointments" className="sidebar-link">
                            <i className="far fa-calendar-alt"></i>
                            <span>Appointments</span>
                        </Link>
                    </li>
                    <li className="sidebar-item">
                        <Link to="/doctors" className="sidebar-link">
                            <i className="fas fa-user-md"></i>
                            <span>Doctors</span>
                        </Link>
                    </li>

                    <li className="sidebar-item">
                        <Link to="/doctors" className="sidebar-link">
                            <i className="fas fa-user-md"></i>
                            <span>Billings</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="main-content">
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
                <h2>Welcome to the Admin Dashboard!</h2>
            </div>
        </div>
    );
};

export default AdminDashboard;