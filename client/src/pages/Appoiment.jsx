import Layout from "../pages/Layout";
import React, { useState } from "react";
import "../styles/Appointment.css";
import Khalti from "../pages/Khalti"; // import your Khalti component

import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Appoiment = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [reason, setReason] = useState("");
  const [doctor, setDoctor] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("esewa");
  // const [paymentStatus, setPaymentStatus] = useState("");
  const pid = Cookies.get("id");
  const email = Cookies.get("email");

  //  ============= get doctors name and show in the options of the select tag ===============

  const data = {
    pid,
    phonenumber: phone,
    email,
    department,
    date: appointmentDate,
    remarks: reason,
    did: doctor,
    time: appointmentTime,
    paymentMethod,
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:5000/appointments/add-appointment", data)
      .then((res) => {
        console.log(res.data)
        if (res.data.booked) {
          alert("Appointment booked successfully");
          navigate("/dashboard");
        } else {
          alert(res.data.error);
        }
      })
      .catch(() => {
        alert("Something went wrong");
      });
  };
  return (
    <Layout>
      <div className="form-container ">
        <form onSubmit={handleSubmit} className="my-4">
          <h2 className="text-4xl">Make an appointment</h2>

          <div className="form-group">
            <label htmlFor="phone">Phone number:</label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter phone number"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="department">Department:</label>
            <select
              id="department"
              value={department}
              onChange={(event) => setDepartment(event.target.value)}
            >
              <option value="">Select a department</option>
              <option value="cardiology">Cardiology</option>
              <option value="orthopedics">Orthopedics</option>
              <option value="pediatrics">Pediatrics</option>
              <option value="dermatology">Dermatology</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="appointmentDate">Appointment date:</label>
            <input
              type="date"
              id="appointmentDate"
              value={appointmentDate}
              onChange={(event) => setAppointmentDate(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="reason">Reason for appointment:</label>
            <input
              type="text"
              id="reason"
              placeholder="Enter reason for appointment"
              value={reason}
              onChange={(event) => setReason(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="doctor">Doctor:</label>
            <select
              id="doctor"
              value={doctor}
              onChange={(event) => setDoctor(event.target.value)}
            >
              <option value="">Select a doctor</option>
              {department === "cardiology" && (
                <>
                  <option value="d10sd1">Dr. John</option>
                  <option value="d10sd1">Dr. Mary</option>
                  <option value="d10sd1">Dr. David</option>
                </>
              )}
              {department === "orthopedics" && (
                <>
                  <option value="d10sd1">Dr. Tom</option>
                  <option value="d10sd1">Dr. Lisa</option>
                  <option value="d10sd1">Dr. Susan</option>
                </>
              )}
              {department === "pediatrics" && (
                <>
                  <option value="d10sd1">Dr. Sarah</option>
                  <option value="d10sd1">Dr. Jessica</option>
                  <option value="d10sd1">Dr. Amy</option>
                </>
              )}
              {department === "dermatology" && (
                <>
                  <option value="d10sd1">Dr. Michael</option>
                  <option value="d10sd1">Dr. Karen</option>
                  <option value="d10sd1">Dr. Laura</option>
                </>
              )}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="appointmentTime">Appointment time:</label>
            <select
              id="appointmentTime"
              value={appointmentTime}
              onChange={(event) => setAppointmentTime(event.target.value)}
            >
              <option value="">Select an appointment time</option>
              <option value="9:00 AM">9:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="1:00 PM">1:00 PM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="3:00 PM">3:00 PM</option>
              <option value="4:00 PM">4:00 PM</option>
              <option value="5:00 PM">5:00 PM</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="paymentMethod">Payment method:</label>
            <select
                id="paymentMethod"
                value={paymentMethod}
                onChange={(event) => setPaymentMethod(event.target.value)}
            >
              <option value="cash">Cash</option>
              <option value="Khalti">Khalti</option>
            </select>
            {paymentMethod === "Khalti" && <Khalti />}

          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </Layout>
  );
};

export default Appoiment;
