import Layout from "../pages/Layout";
import React from "react";
import "../styles/Blogs.css";
import { blog1, blog2, blog3 } from "../assets/Homepage";

const Blogs = () => {
  return (
    <Layout>
      <section class="blogs" id="blogs">
        <h1 class="headinsg">
          our <span>blogs</span>
        </h1>

        <div class="box-container">
          <div class="box">
            <div class="image">
              <img src={blog1} alt="" />
            </div>
            <div class="content">
              <div class="icon">
                <a href="#">
                  {" "}
                  <i class="fas fa-calendar"></i> 1st may, 2021{" "}
                </a>
                <a href="#">
                  {" "}
                  <i class="fas fa-user"></i> by admin{" "}
                </a>
              </div>
              <h3>blog title goes here</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Provident, eius.
              </p>
              <a href="#" class="btn">
                {" "}
                learn more <span class="fas fa-chevron-right"></span>{" "}
              </a>
            </div>
          </div>

          <div class="box">
            <div class="image">
              <img src={blog2} alt="" />
            </div>
            <div class="content">
              <div class="icon">
                <a href="#">
                  {" "}
                  <i class="fas fa-calendar"></i> 1st may, 2021{" "}
                </a>
                <a href="#">
                  {" "}
                  <i class="fas fa-user"></i> by admin{" "}
                </a>
              </div>
              <h3>blog title goes here</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Provident, eius.
              </p>
              <a href="#" class="btn">
                {" "}
                learn more <span class="fas fa-chevron-right"></span>{" "}
              </a>
            </div>
          </div>

          <div class="box">
            <div class="image">
              <img src={blog3} alt="" />
            </div>
            <div class="content">
              <div class="icon">
                <a href="#">
                  {" "}
                  <i class="fas fa-calendar"></i> 1st may, 2021{" "}
                </a>
                <a href="#">
                  {" "}
                  <i class="fas fa-user"></i> by admin{" "}
                </a>
              </div>
              <h3>blog title goes here</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Provident, eius.
              </p>
              <a href="#" class="btn">
                {" "}
                learn more <span class="fas fa-chevron-right"></span>{" "}
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blogs;
