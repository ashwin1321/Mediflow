import "./App.css";
import HomeMain from "./pages/HomeMain";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogs from "./pages/Blogs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Appoiment from "./pages/Appoiment";
import Otp from "./pages/Otp";

import PatientDashboard from "./components/PatientDashboard";
import DoctorDashboard from "./components/DoctorDashboard";
import LabDashboard from "./components/LabDashboard";
import AdminDashboard from "./components/AdminDashboard";


import Login from "./components/Login";
import Register from "./components/Register";
import Appointment from "./components/Appointment";

function App() {



  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeMain />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/book" element={<Appoiment />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/patient" element={<PatientDashboard />} />
          <Route path="/doctor" element={<DoctorDashboard />} />
          <Route path="/lab" element={<LabDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />

        </Routes>
      </BrowserRouter>
  );
}

export default App;
