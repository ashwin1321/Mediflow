import React, { useState } from "react";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import ViewWeekIcon from "@mui/icons-material/ViewWeek";
import { Link } from "react-router-dom";

import { Modal } from "antd";
import "../styles/Header.css";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <header className="header">
        <Link to="/" className="logo">
          <LocalHospitalIcon
            sx={{ fontSize: 25 }}
            style={{ color: "#16a085" }}
          />{" "}
          My<span style={{ color: "#16a085" }}>Hospital</span>
        </Link>

        <nav className="navbar">
          <Link to="/">home</Link>
          <Link to="/blogs">blogs</Link>
          <Link to="/book">appointment</Link>

          <Link to="/login">Login</Link>
        </nav>

        <div id="menu-btn">
          {" "}
          <button
            onClick={() => {
              setShowModal(true);
            }}
          >
            {" "}
            <ViewWeekIcon
              sx={{ fontSize: 25 }}
              style={{ color: "#16a085" }}
            />{" "}
          </button>{" "}
        </div>
      </header>

      <Modal
        title={
          <Link
            to="/"
            className="logo text-black d-flex justify-content-center h3 "
          >
            <LocalHospitalIcon
              sx={{ fontSize: 20 }}
              style={{ color: "#16a085" }}
            />{" "}
            My<span style={{ color: "#16a085" }}>Hospital</span>
          </Link>
        }
        open={showModal}
        onOk={() => {
          setShowModal(false);
        }}
        onCancel={() => {
          setShowModal(false);
        }}
        footer={null}
        style={{
          top: 20,
          textAlign: "center",
        }}
      >
        <nav className="mt-5 h4 fw-bold">
          <p>
            <a href="/" onClick={() => setShowModal(false)}>
              home
            </a>
          </p>
          <p>
            <Link to="/blogs" onClick={() => setShowModal(false)}>
              blogs
            </Link>
          </p>
          <p>
            <Link to="/book" onClick={() => setShowModal(false)}>
              appointment
            </Link>
          </p>

          <p>
            <Link to="/login" onClick={() => setShowModal(false)}>
              Login
            </Link>
          </p>

          {/* login register Butoton */}
        </nav>
      </Modal>
    </div>
  );
};

export default Header;
