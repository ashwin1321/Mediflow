import React from "react";
import Cookies from "js-cookie";

import PatientDashboard from "../components/PatientDashboard";
import DoctorDashboard from "../components/DoctorDashboard";
import LabDashboard from "../components/LabDashboard";
import AdminDashboard from "../components/AdminDashboard";

const Dasboard = () => {
       const role = Cookies.get("role");

       if (role === "patient") {
              return <PatientDashboard />;
       } else if (role === "doctor") {
              return <DoctorDashboard />;
       } else if (role === "lab") {
              return <LabDashboard />;
       } else if (role === "admin") {
              return <AdminDashboard />;
       }
};

export default Dasboard;
