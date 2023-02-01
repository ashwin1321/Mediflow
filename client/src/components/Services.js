import React from 'react'
import '../styles/Services.css'

const Services = () => {
    return (
        <div>
            <section className="services" id="services">

                <h1 className="heading"> our <span>services</span> </h1>

                <div className="box-container">
                    <div className="box">
                        <i className="fas fa-notes-medical"></i>
                        <h3>free checkups</h3>
                        <p>We have many campaigns for the needy people free of cost.</p>
                    </div>

                    <div className="box">
                        <i className="fas fa-ambulance"></i>
                        <h3>24/7 ambulance</h3>
                        <p>call 911 for the ambulance services anytime.</p>
                    </div>

                    <div className="box">
                        <i className="fas fa-user-md"></i>
                        <h3>expert doctors</h3>
                        <p>We have the team of many experienced and specialized doctors.</p>
                    </div>

                    <div className="box">
                        <i className="fas fa-pills"></i>
                        <h3>medicines</h3>
                        <p>We have  5 different medical stores inside for the easy accessibility of the medicines.</p>
                    </div>

                    <div className="box">
                        <i className="fas fa-procedures"></i>
                        <h3>bed facility</h3>
                        <p>We are capable of handling 1600 patient at the same time.</p>
                    </div>

                    <div className="box">
                        <i className="fas fa-heartbeat"></i>
                        <h3>total care</h3>
                        <p>Every patient is treated and handled with care.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services