import React, { useState, useEffect } from 'react'
import Dasboard from '../Dasboard'
import axios from 'axios'
import Cookies from 'js-cookie'

const viewAppointment = () => {

    const pid = Cookies.get('id')
    const role = Cookies.get('role')
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [appointment, setAppointment] = useState([])

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        axios.get(`http://localhost:5000/appointments/get-appointment`,
            {
                params: {
                    id: pid,
                    role: role
                }
            }
        )
            .then(res => {
                setAppointment(res.data.result)
            })
            .catch(err => {
                console.log(err)
            })
    }, [pid, role])


    return (
        <div className="dashboard-container" >
            {console.log(appointment)}
            <div>
                <Dasboard />
            </div>

            <div className="main-content ">
            </div>
        </div>

    )
}

export default viewAppointment