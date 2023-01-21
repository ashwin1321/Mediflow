import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="page-wrapper">
      <div className="header-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="top-left text-center text-md-left">
                <h6>Opening Hours : Saturday to Tuesday - 8am to 10pm</h6>
              </div>
            </div>
            <div className="col-md-6">
              <div className="top-right text-center text-md-right">
                <ul className="social-links">
                  <li>
                    {/* icons halna baki */}
                    <a href="/" aria-label="facebook">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/" aria-label="twitter">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/" aria-label="google-plus">
                      <i className="fab fa-google-plus-g"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/" aria-label="instagram">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/" aria-label="pinterest">
                      <i className="fab fa-pinterest-p"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="header-uper">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-3">
              <div className="logo">
                <a href="/">
                  <img
                    loading="lazy"
                    className="img-fluid"
                    // logo halna baki
                    src="images/logo.png"
                    alt="logo"
                  />
                </a>
              </div>
            </div>
            <div className="col-xl-8 col-lg-9">
              <div className="right-side">
                <ul className="contact-info pl-0 mb-4 mb-md-0">
                  <li className="item text-left">
                    <div className="icon-box">
                      {/* icon halna baki */}
                      <i className="far fa-envelope"></i>
                    </div>
                    <strong>Email</strong>
                    <br />
                    <a href="/">
                      <span>hamrohospital@hosp.com.np</span>
                    </a>
                  </li>
                  <li className="item text-left">
                    <div className="icon-box">
                      {/*  icon halna baki */}
                      <i className="fas fa-phone"></i>
                    </div>
                    <strong>Call Now</strong>
                    <br />
                    <span>+ (+977) - 123 - 4567-890</span>
                  </li>
                </ul>
                <div className="link-btn text-center text-lg-right">
                  <a href="contact.html" className="btn-style-one">
                    Appoinment
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Header Upper-->
    
    
    <!--Main Header--> */}
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarLinks"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarLinks">
            <ul className="navbar-nav">
              <li className="nav-item @@home">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="about">
                  About
                </a>
              </li>
              <li className="nav-item @@service">
                <a className="nav-link" href="service">
                  Service
                </a>
              </li>
              <li className="nav-item @@gallery">
                <a className="nav-link" href="gallery">
                  Gallery
                </a>
              </li>
              <li className="nav-item @@team">
                <a className="nav-link" href="team">
                  Team
                </a>
              </li>
              <li className="nav-item @@appointment">
                <a className="nav-link" href="appointment">
                  Appointment
                </a>
              </li>
              <li className="nav-item dropdown @@blogs">
                <a
                  className="nav-link dropdown-toggle"
                  href="#!"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Blogs
                </a>

                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item @@blog" href="departments">
                      Departments
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item @@blogDetails" href="details">
                      Orthopedic
                    </a>
                  </li>
                  {/* <li className="dropdown dropdown-submenu dropright">
                    <a
                      className="dropdown-item dropdown-toggle"
                      href="#!"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Sub Menu
                    </a>

                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a className="dropdown-item" href="index.html">
                          Submenu 01
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="index.html">
                          Submenu 02
                        </a>
                      </li>
                    </ul>
                  </li> */}
                </ul>
              </li>
              <li className="nav-item @@contact">
                <a className="nav-link" href="contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
