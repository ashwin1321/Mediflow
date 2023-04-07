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

            <div className="main-content ">

                {patient.map((patient) => (
                    <div className="patient-detail w-[100%] mt-10 ml-[-5%] h-[300px] px-4 flex  border border-green-8=600 border-4 " key={patient.pid}>
                        <div className="patient-detail-header">
                            <h1 className="text-5xl text-green-800 p-2 mt-5 underline">Personal Details</h1>
                            <br />

                            <div className="patient-detail-header-right text-3xl">
                                <h3 className='p-2'><span className=''>Name:</span>  {patient.name}</h3>
                                <h3 className='p-2'>PID: {patient.pid}</h3>
                                <h3 className='p-2'>Age: {patient.age}</h3>
                                <h3 className='p-2'>Phone: {patient.phone}</h3>
                                <h3 className='p-2'>Citizenship Number: {patient.citizenship}</h3>
                                <h3 className='p-2'>Email: {patient.email}</h3>




                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div >
    )
}

export default detail