import React from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import "../styles/Dashboard.css";

const Dasboard = () => {
       const role = Cookies.get("role");

       if (role === "patient") {
              return (
                     <div className="dashboard-container">
                            <div className="sidebar">
                                   <ul className="sidebar-nav">
                                          <li className="sidebar-header">
                                                 <h2 className="text-4xl mt-4 mb-4">Patient Dashboard</h2>
                                                 <hr />
                                          </li>

                                          <li className="sidebar-header mt-9">

                                                 <h2 className="text-3xl">Appointments</h2>
                                          </li>
                                          <li className="sidebar-item">
                                                 <Link to="/dashboard/detail" className="sidebar-link">
                                                        <i className="fas fa-calendar-alt"></i>&nbsp;
                                                        <span>Detail</span>
                                                 </Link>
                                          </li>
                                          <li className="sidebar-item mb-4">
                                                 <Link to="/book" className="sidebar-link ">
                                                        <i className="fas fa-plus-circle "></i> &nbsp;
                                                        <span>Book Appointment</span>
                                                 </Link>
                                          </li>
                                          <li className="sidebar-header">
                                                 <h2 className="text-3xl">Medical Records</h2>
                                          </li>
                                          <li className="sidebar-item">
                                                 <Link to="/dashboard/viewAppointment" className="sidebar-link">
                                                        <i className="fas fa-notes-medical"></i>&nbsp;
                                                        <span>View Appointment</span>
                                                 </Link>
                                          </li>
                                          <li className="sidebar-item">
                                                 <Link to="reports" className="sidebar-link">
                                                        <i className="fas fa-file-medical-alt"></i>&nbsp;
                                                        <span>View Medical Reports</span>
                                                 </Link>
                                          </li>
                                          {/* <br /> */}
                                          <li className="sidebar-item">
                                                 <Link to="/">
                                                        <i className="fas fa-sign-out-alt"></i>&nbsp;
                                                        <span>Logout</span>
                                                 </Link>
                                          </li>
                                   </ul>
                            </div>

                     </div>
              );
       } else if (role === "doctor") {
              return (
                     <div className="dashboard-container">
                            <div className="sidebar">
                                   <ul className="sidebar-nav">
                                          <li className="sidebar-header">
                                                 <h2 className="text-4xl mt-4 mb-4">Doctor Dashboard</h2>
                                                 <hr />
                                          </li>

                                          <li className="sidebar-header">
                                                 <h2 className="text-3xl mt-4">Patients</h2>
                                          </li>
                                          <li className="sidebar-item">
                                                 <Link to="/patients" className="sidebar-link">
                                                        <i className="fas fa-user-injured"></i>&nbsp;
                                                        <span>Diagonosis</span>
                                                 </Link>
                                          </li>
                                          <li className="sidebar-item">
                                                 <Link to="/add-patient" className="sidebar-link">
                                                        <i className="fas fa-user-plus"></i>&nbsp;
                                                        <span>View Reports</span>
                                                 </Link>
                                          </li>
                                          <li className="sidebar-header">
                                                 <h2 className="text-3xl mt-4">Appointments</h2>
                                          </li>
                                          <li className="sidebar-item">
                                                 <Link to="/dashboard/viewAppointment" className="sidebar-link">
                                                        <i className="fas fa-calendar-alt"></i>&nbsp;
                                                        <span>View Appointments</span>
                                                 </Link>
                                          </li>



                                          <li className="sidebar-item">
                                                 <Link to="/">
                                                        <i className="fas fa-sign-out-alt"></i>&nbsp;
                                                        <span>Logout</span>
                                                 </Link>
                                          </li>
                                   </ul>
                            </div>
                     </div>
              );
       } else if (role === "lab") {
              return (
                     <div className="dashboard-container">

                            <div className="sidebar">
                                   <ul className="sidebar-nav">
                                          <li className="sidebar-header">
                                                 <h2 className="text-4xl mt-4 mb-4">Lab Dashboard</h2>
                                                 <hr />
                                          </li>

                                          <li className="sidebar-header">
                                                 <h2>Manage</h2>
                                          </li>
                                          <li className="sidebar-item">
                                                 <Link to="/patients" className="sidebar-link">
                                                        <i className="fas fa-user-injured"></i>&nbsp;
                                                        <span>Patients</span>
                                                 </Link>
                                          </li>
                                          <li className="sidebar-item">
                                                 <Link to="/tests" className="sidebar-link">
                                                        <i className="fas fa-vial"></i>&nbsp;
                                                        <span>Tests</span>
                                                 </Link>
                                          </li>
                                          <li className="sidebar-item">
                                                 <Link to="/results" className="sidebar-link">
                                                        <i className="fas fa-file-medical"></i>&nbsp;
                                                        <span>Results</span>
                                                 </Link>
                                          </li>
                                          <li className="sidebar-item">
                                                 <Link to="/">
                                                        <i className="fas fa-sign-out-alt"></i>&nbsp;
                                                        <span>Logout</span>
                                                 </Link>
                                          </li>
                                   </ul>
                            </div>

                     </div>
              );
       } else if (role === "admin") {
              return (
                     <div className="dashboard-container">

                            <div className="sidebar">
                                   <ul className="sidebar-nav">
                                          <li className="sidebar-header">
                                                 <h2 className="text-4xl mt-4 mb-4">Admin Dashboard</h2>
                                                 <hr />
                                          </li>

                                          <li className="sidebar-header">
                                                 <h2 className="text-3xl mt-4">Manage</h2>
                                          </li>
                                          <li className="sidebar-item">
                                                 <Link to="/dashboard/manageDoc" className="sidebar-link">
                                                        <i className="fas fa-user-injured"></i>&nbsp;
                                                        <span>Doctors</span>
                                                 </Link>
                                          </li>

                                          <li className="sidebar-item">
                                                 <Link to="/dashboard/manageLab" className="sidebar-link">
                                                        <i className="fas fa-user-md"></i>&nbsp;
                                                        <span>Lab Assistants</span>
                                                 </Link>
                                          </li>

                                          <li className="sidebar-item">
                                                 <Link to="/">
                                                        <i className="fas fa-sign-out-alt"></i>&nbsp;
                                                        <span>Logout</span>
                                                 </Link>
                                          </li>
                                   </ul>
                            </div>

                     </div>
              );
       }
};

export default Dasboard;
