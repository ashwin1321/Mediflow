import React from 'react'
import { homeImg } from '../assets/Homepage'
import '../styles/Home.css'

const Home = () => {
    return (
        <div>
            <section className="home" id="home">
                <div className="image">
                    <img src={homeImg} alt="homeImg" />
                </div>

                <div className="content">
                    <h3>stay safe, stay healthy</h3>
                    <p>We are the leading healthcare provider in the country. Feel free to visit us.</p>
                    <a href="#contacts" className="btn"> contact us <span className="fas fa-chevron-right"></span> </a>
                </div>
            </section>

            <section className="icons-container">
                <div className="icons">
                    <i className="fas fa-user-md"></i>
                    <h3>250+</h3>
                    <p>doctors at work</p>
                </div>

                <div className="icons">
                    <i className="fas fa-users"></i>
                    <h3>10475+</h3>
                    <p>satisfied patients</p>
                </div>

                <div className="icons">
                    <i className="fas fa-procedures"></i>
                    <h3>1600+</h3>
                    <p>bed facility</p>
                </div>

                <div className="icons">
                    <i className="fas fa-hospital"></i>
                    <h3>50+</h3>
                    <p>available departments</p>
                </div>
            </section>

        </div>
    )
}

export default Home