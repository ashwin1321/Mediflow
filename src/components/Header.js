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

                <a href="/" className="logo"><LocalHospitalIcon sx={{ fontSize: 25 }} color="success" /> My<span style={{ color: "green" }}>Hospital</span></a>

                <nav className="navbar">
                    <a href="#home">home</a>
                    <a href="#about">about</a>
                    <a href="#services">services</a>
                    <a href="#Departments">doctors</a>
                    {/* submenu mathi ko ma halnu xa */}
                    <a href="#book">Appointment</a>
                    <a href="#blogs">blogs</a>
                    <a href="#review">Reviews</a>
                    <a href="#review">Contacts</a>

                    {/* login register button */}
                </nav>

                <div id="menu-btn"> <button onClick={() => {
                    setShowModal(true)
                }}> < ViewWeekIcon sx={{ fontSize: 25 }} color="success" /> </button> </div>

            </header>

            <Modal
                title={<a href="/" className="logo text-black d-flex justify-content-center h3 " ><LocalHospitalIcon sx={{ fontSize: 20 }} color="success" /> My<span style={{ color: "green" }}>Hospital</span></a>}

                open={showModal}
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
                    <p><a href="#home" >home</a></p>
                    <p><a href="#about">about</a></p>
                    <p><a href="#services">services </a></p>
                    <p><a href="#Departments">doctors</a></p>
                    <p><a href="#book">Appointment</a></p>
                    <p><a href="#blogs">blogs</a></p>
                    <p><a href="#review">Reviews</a></p>
                    <p><a href="#review">Contacts</a></p>

                    {/* login register Butoton */}
                </nav>
            </Modal>

        </div>
    )
}

export default Header