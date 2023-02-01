import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
    return (
        <div>


            <section className="footer" id='contacts'>

                <div className="box-container">

                    <div className="box">
                        <h3>quick links</h3>
                        {/* <a href="#"> <i className="fas fa-chevron-right"></i> doctors </a> */}
                        <a href="#book"> <i className="fas fa-chevron-right"></i> Appointments </a>
                        <a href="#blogs"> <i className="fas fa-chevron-right"></i> Blogs </a>
                        <a href="#login"> <i className="fas fa-chevron-right"></i> Login </a>
                        <a href="#register"> <i className="fas fa-chevron-right"></i> Register  </a>
                    </div>

                    <div className="box">
                        <h3>our services</h3>
                        < a href="#bkog" > <i className="fas fa-chevron-right"></i> Orthopedic </a>
                        < a href="#blog" > <i className="fas fa-chevron-right"></i> Neurology </a>
                        < a href="#blog" > <i className="fas fa-chevron-right"></i> Cardiology </a>
                        < a href="#blog" > <i className="fas fa-chevron-right"></i> Diagnosis </a>
                        < a href="#blog" > <i className="fas fa-chevron-right"></i> Ambulance Service </a>
                    </div>

                    <div className="box">
                        <h3>contact info</h3>
                        < a href="#contacts" > <i className="fas fa-phone"></i> +977-123-456-7890 </a>
                        < a href="#contacts" > <i className="fas fa-envelope"></i> contact@myhospital.coom </a>
                        < a href="#contacts" > <i className="fas fa-map-marker-alt"></i> Maitidevi-29, Kathmandu, Nepal</a>
                    </div>

                    <div className="box">
                        <h3>follow us</h3>
                        <a href="#facebook"> <i className="fab fa-facebook-f"></i> Facebook </a>
                        <a href="#twitter"> <i className="fab fa-twitter"></i> Twitter </a>
                        <a href="#instagram"> <i className="fab fa-instagram"></i> Instagram </a>
                    </div>

                </div>

                <div className="credit"> Managed By: <span>Triple-A Pvt. Ltd.</span> | all rights reserved </div>

            </section>

        </div>
    )
}

export default Footer