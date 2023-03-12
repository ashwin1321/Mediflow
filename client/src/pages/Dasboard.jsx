import React from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import "../styles/Dashboard.css";

const Dasboard = () => {
       const role = Cookies.get("role");

       if (role === "patient") {
              return (
                     <div className="dashboard-container">
                            <nav className="navbar">
                                   <h1 className="navbar-brand">Patient Dashboard</h1>
                                   <ul className="navbar-nav">
                                          <li className="nav-item">
                                                 <Link to="/" className="navbar-brand">
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
                                                 <Link to="/dashboard/detail" className="sidebar-link">
                                                        <i className="fas fa-calendar-alt"></i>
                                                        <span>Detail</span>
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

                     </div>
              );
       } else if (role === "doctor") {
              return (
                     <div className="dashboard-container">
                            <nav className="navbar">
                                   <h1 className="navbar-brand">Doctor Dashboard</h1>
                                   <ul className="navbar-nav">
                                          <li className="nav-item">
                                                 <Link to="/" className="navbar-brand">
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
                     </div>
              );
       } else if (role === "lab") {
              return (
                     <div className="dashboard-container">
                            <nav className="navbar">
                                   <h1 className="navbar-brand">Lab Dashboard</h1>
                                   <ul className="navbar-nav">
                                          <li className="nav-item">
                                                 <Link to="/" className="navbar-brand">
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

                     </div>
              );
       } else if (role === "admin") {
              return (
                     <div className="dashboard-container">
                            <nav className="navbar">
                                   <h1 className="navbar-brand">Hospital Dashboard</h1>
                                   <ul className="navbar-nav">
                                          <li className="nav-item">
                                                 <Link to="/" className="navbar-brand">
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

                     </div>
              );
       }
};

export default Dasboard;
