import Layout from "../pages/Layout";
import React from "react";
import "../styles/Blogs.css";
import { health1, health2, health3, tech1, tech2, wel1, wel2 } from "./imgg";

const Blogs = () => {
  return (
    <Layout>
      <section id="projects" className="py-5">
        <div className="container">
          {/* <!--     title--> */}
          <div className="row title mb-3">
            <div className="col d-flex justify-content-center text-center mb-5">
              <h1 className="text-uppercase">
                OUR <span className="primary-color">BLOGS</span>
              </h1>
            </div>
          </div>
          {/* <!--      end of title-->
      <!--      button row--> */}
          <div className="row">
            <div className="col text-center">
              <div
                className="btn-group btn-group-lg mb-5 button-group filter-button-group"
                role="group"
              >
                <h1 className="text-uppercase mt-4">
                  OUR <span className="primary-color">BLOGS</span>
                </h1>
              </div>
            </div>
          </div>
          {/* <!--      images row--> */}
          <div className="row d-flex grid">
            <div className="col-sm-6 col-md-4 my-3 wellness">
              <div className="card">
                <img className="card-img-top" src={health1} alt="Card" />
                <div className="card-body">
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 my-3 healthcare">
              <div className="card">
                <img className="card-img-top" src={health2} alt="Card " />
                <div className="card-body">
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 my-3 medicaltech">
              <div className="card">
                <img className="card-img-top" src={health3} alt="Card " />
                <div className="card-body">
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 my-3 medicaltech">
              <div className="card">
                <img className="card-img-top" src={tech1} alt="Card " />
                <div className="card-body">
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 my-3 wellness">
              <div className="card">
                <img className="card-img-top" src={tech2} alt="Card " />
                <div className="card-body">
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 my-3 healthcare">
              <div className="card">
                <img className="card-img-top" src={wel1} alt="Card " />
                <div className="card-body">
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 my-3 wellness">
              <div className="card">
                <img className="card-img-top" src={wel2} alt="Card " />
                <div className="card-body">
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 my-3 healthcare">
              <div className="card">
                <img className="card-img-top" src={health1} s alt="Card " />
                <div className="card-body">
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 my-3 medicaltech">
              <div className="card">
                <img className="card-img-top" src={tech2} alt="Card " />
                <div className="card-body">
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blogs;
