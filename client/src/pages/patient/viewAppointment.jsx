import React, { useState, useEffect } from 'react'
import Dasboard from '../Dasboard'
import axios from 'axios'
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom'

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

            <div className="main-content mt-[-0.5%] ">
                <div className='' >
                    <div className="p-4 flex flex-row shadow ml-[-6.2%] justify-between items-center  ">
                        <h1 className='text-4xl text-center text-[#328059]'>View Appointments</h1>
                        <Link to="/book">
                            <button className='bg-[#3b7a5b] hover:text-[#328059]  hover:bg-[#e4ece8]'>Book Now </button>
                        </Link>
                    </div>

                </div>



            </div>
        </div>

    )
}

export default viewAppointment