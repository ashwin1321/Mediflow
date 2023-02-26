import Layout from "../pages/Layout";
import React from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Layout>
      <div className="form-container mt-5">
        <form>
          <h2>Sign In</h2>
          <div className="form-group">
            <label htmlFor="role">Role</label>
            <select name="role" id="role">
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
              <option value="lab">Lab</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input type="email" id="email" placeholder="Enter email" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" placeholder="Enter password" />
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
