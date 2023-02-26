import Layout from "../pages/Layout";
import React, { useState } from "react";
import "../styles/Register.css";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Layout>
      <div className="form-container mb-4">
        <form onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <div className="form-group">
            <label htmlFor="email">Name:</label>
            <input type="text" id="name" placeholder="Enter Your Name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Age:</label>
            <input type="text" id="age" placeholder="Enter Your Age" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Citizenship Number:</label>
            <input
              type="text"
              id="number"
              placeholder="Enter Your Citizenship Number"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input type="email" id="email" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" placeholder="Enter password" />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm password"
            />
          </div>

          <button type="submit">Sign up</button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
