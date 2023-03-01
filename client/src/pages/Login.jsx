import Layout from "../pages/Layout";
import React, { useState } from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("patient");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const data = { role, email, password };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:5000/auth/login", data).then((res) => {
      if (res.data.noUser) {
        alert("User does not exist");
        return;
      }
      if (res.data.wrongPassword) {
        alert("Wrong Password");
        return;
      }

      if (res.data.error) {
        alert("Some error occured, please try again later");
        return;
      }

      if (res.data.otpSend) {
        alert("OTP sent to your email, please verify");
        Cookies.set("id", res.data.id);
        Cookies.set("role", res.data.role);
      }
      navigate("/otp");
    });
  };

  return (
    <Layout>
      <div className="form-container mt-5">
        <form onSubmit={handleSubmit}>
          <h2>Sign In</h2>
          <div className="form-group">
            <label htmlFor="role">Role</label>
            <select
              name="role"
              id="role"
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
              <option value="lab">Lab</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">Sign in</button>
          <div className="form-footer">
            <p className="h5 mt-3">
              Don't have an account?
              <Link to="/register" className="h5">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
