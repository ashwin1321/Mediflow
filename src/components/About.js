import React from 'react'
import { about } from '../assets/Homepage'
import '../styles/About.css'

const About = () => {
    return (
        <div>

            <section className="about" id="about">
                <h1 className="heading"> <span>about</span> us </h1>

                <div className="row">
                    <div className="image">
                        <img src={about} alt="" />
                    </div>

                    <div className="content">
                        <h3>we take care of your healthy life</h3>
                        <p>My Hospital was created with the vision to fill an existing void in the Nepali healthcare industry. It is dedicated to the seamless delivery of quality, patient-centric healthcare which means supplying everything a patient may need, from acute critical care to rehabilitation to transitional care to home healthcare services at an affordable cost. Our goal is to establish in this country a culture of continuous improvement in healthcare not only by providing excellent healthcare services but also by conducting community health education seminars, outreach programs, and wellness programs in several parts of Nepal.
                            <br /> <br />
                            The hospital is a 1600 bedded, state of the art health care facility offering a wide range of medical, surgical and diagnostic services. The hospital has special features like a Wellness Center to help our community stay healthy. With latest in technology and a network of qualified physicians and staff.</p>

                        <a href="#about" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a>
                        {/* Departments ko page ma jane ni ya bata */}
                    </div>

                </div>

            </section>
        </div>
    )
}

export default About