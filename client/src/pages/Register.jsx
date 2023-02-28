import Layout from "../pages/Layout";
import React, { useState } from "react";
import "../styles/Register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [Citizenship, setCitizenship] = useState("");
  const [password, setPassword] = useState("");
  const pid = "P" + Math.floor(Math.random() * 100000);

  const data = { name, age, email, Citizenship, password, pid };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <Layout>
      <div className="form-container mb-4">
        <form onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <div className="form-group">
            <label htmlFor="email">Name:</label>
            <input
              type="text"
              id="name"
              placeholder="Enter Your Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Age:</label>
            <input
              type="text"
              id="age"
              placeholder="Enter Your Age"
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Citizenship Number:</label>
            <input
              type="text"
              id="number"
              placeholder="Enter Your Citizenship Number"
              onChange={(e) => setCitizenship(e.target.value)}
            />
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

          <button type="submit">Sign up</button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
