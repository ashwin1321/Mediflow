import Layout from "../pages/Layout";
import React from "react";
import { bookImg } from "../assets/Homepage";
import "../styles/Appointment.css";

const Appoiment = () => {
  return (
    <Layout>
      <section className="book">
        <h1 class="heading">
          {" "}
          <span>book</span> now{" "}
        </h1>

        <div className="row">
          <div className="image">
            <img src={bookImg} alt="book" />
          </div>

          <form action="">
            <h3>book appointment</h3>
            <input type="text" placeholder="your name" class="box" />
            <input type="number" placeholder="your number" class="box" />
            <input type="email" placeholder="your email" class="box" />
            <input type="date" class="box" />
            <input type="submit" value="book now" class="btn" />
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Appoiment;
