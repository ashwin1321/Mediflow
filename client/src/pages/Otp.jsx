import React, { useState } from "react";
import Layout from "../pages/Layout";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Otp = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { otp };

    axios.post("http://localhost:5000/auth/otp", data).then((res) => {
      if (res.data.error) {
        alert("Some error occured, please try again later");
        return;
      }

      if (res.data.wrongOtp) {
        alert("Wrong OTP");
        return;
      }

      alert("Login successful");
      Cookies.set("token", res.data.token);
      navigate("/dashboard");
    });
  };

  return (
    <Layout>
      <div className="form-container mt-5">
        <form onSubmit={handleSubmit}>
          <h2 className="text-4xl">Verify OTP</h2>
          <div className="form-group">
            <label htmlFor="otp">OTP</label>
            <input
              type="text"
              name="otp"
              id="otp"
              onChange={(e) => setOtp(e.target.value)}
              value={otp}
            />
          </div>
          <button type="submit">Verify</button>
        </form>
      </div>
    </Layout>
  );
};

export default Otp;
