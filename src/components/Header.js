import React, { useState } from 'react'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';

import { Modal } from 'antd'
import '../styles/Header.css'

const Header = () => {

    const [showModal, setShowModal] = useState(false);

    return (

        <div>
            <header className="header">

                <a href="#home" className="logo"><LocalHospitalIcon sx={{ fontSize: 25 }} style={{ color: "#16a085" }} /> My<span style={{ color: "#16a085" }}>Hospital</span></a>

                <nav className="navbar">
                    <a href="#home">home</a>
                    <a href="#about">about</a>
                    <a href="#services">services</a>
                    {/* <a href="#Departments">doctors</a> */}
                    {/* submenu mathi ko ma halnu xa */}
                    <a href="#blogs">blogs</a>
                    <a href="#book">appointment</a>
                    <a href="#contacts">contact us</a>
                    <a href="#login"> Login</a>
                    <a href="#register"> Register</a>

                </nav>

                <div id="menu-btn"> <button onClick={() => {
                    setShowModal(true)
                }}> < ViewWeekIcon sx={{ fontSize: 25 }} style={{ color: "#16a085" }} /> </button> </div>

            </header>

            <Modal
                title={<a href="/" className="logo text-black d-flex justify-content-center h3 " ><LocalHospitalIcon sx={{ fontSize: 20 }} style={{ color: "#16a085" }} /> My<span style={{ color: "#16a085" }}>Hospital</span></a>}

                open={showModal}
                onOk={() => {
                    setShowModal(false)
                }}

                onCancel={() => {
                    setShowModal(false)
                }}

                footer={null}

                style={{
                    top: 20,
                    textAlign: "center",
                }}
            >
                <nav className='mt-5 h4 fw-bold' >
                    <p><a href="#home" onClick={() => setShowModal(false)} >home</a></p>
                    <p><a href="#about" onClick={() => setShowModal(false)}>about</a></p>
                    <p><a href="#services" onClick={() => setShowModal(false)}>services </a></p>
                    <p><a href="#blogs" onClick={() => setShowModal(false)}>blogs</a></p>
                    <p><a href="#book" onClick={() => setShowModal(false)}>appointment</a></p>
                    <p><a href="#contacts" onClick={() => setShowModal(false)}>contact us</a></p>
                    <p><a href="#login" onClick={() => setShowModal(false)}>Login</a></p>
                    <p><a href="#register" onClick={() => setShowModal(false)}>Register</a></p>

                    {/* login register Butoton */}
                </nav>
            </Modal>
        </div>

    )
}

export default Header