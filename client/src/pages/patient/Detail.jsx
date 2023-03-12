import React, { useState, useEffect } from 'react'
import Dasboard from '../Dasboard'
import axios from 'axios'
import Cookies from 'js-cookie'


const detail = () => {
    const pid = Cookies.get('id')
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [patient, setPatient] = useState([])

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        axios.get(`http://localhost:5000/get/patients`,
            {
                params: {
                    pid: 'P84318'
                }
            }
        )
            .then(res => {
                setPatient(res.data.result)
            })
            .catch(err => {
                console.log(err)
            })
    }, [pid])

    console.log(patient)

    return (
        <div className="dashboard-container" >

            <div>
                <Dasboard />
            </div>

            <div className="main-content">

                {patient.map((patient) => (
                    <div className="patient-detail" key={patient.pid}>
                        <div className="patient-detail-header">
                            <h1>Personal Details</h1>

                            <div className="patient-detail-header-right">
                                <h3>Name: {patient.Name}</h3>
                                <h3>PID: {patient.pid}</h3>
                                <h3>Age: {patient.age}</h3>
                                <h3>Phone: {patient.phone}</h3>
                                <h3>Citizenship Number: {patient.citizenship}</h3>
                                <h3>Email: {patient.email}</h3>




                            </div>
                        </div>
                    </div>

                ))}




            </div>
        </div >
    )
}

export default detail